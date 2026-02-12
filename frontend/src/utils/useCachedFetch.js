import { useState, useEffect, useCallback } from 'react';
import { getCachedData, setCachedData, CACHE_DURATIONS } from './cacheUtils';

/**
 * Custom hook for fetching data with caching support
 * @param {string} cacheKey - Unique key for caching this data
 * @param {Function} fetchFunction - Async function that fetches the data
 * @param {number} cacheDuration - Cache duration in milliseconds (default: 5 minutes)
 * @param {Array} dependencies - Dependencies array for refetching (optional)
 * @returns {Object} - { data, isLoading, error, refetch }
 */
export const useCachedFetch = (
  cacheKey,
  fetchFunction,
  cacheDuration = CACHE_DURATIONS.MEDIUM,
  dependencies = []
) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async (forceRefresh = false) => {
    try {
      setIsLoading(true);
      setError(null);

      // Check cache first (unless forcing refresh)
      if (!forceRefresh) {
        const cachedData = getCachedData(cacheKey, cacheDuration);
        if (cachedData !== null) {
          setData(cachedData);
          setIsLoading(false);
          return;
        }
      }

      // Fetch fresh data
      const freshData = await fetchFunction();
      
      // Cache the fresh data
      setCachedData(cacheKey, freshData);
      setData(freshData);
    } catch (err) {
      console.error(`Error fetching data for key "${cacheKey}":`, err);
      setError(err.message || 'Failed to fetch data');
      
      // Try to use stale cache on error
      const staleCache = getCachedData(cacheKey, Infinity);
      if (staleCache !== null) {
        setData(staleCache);
        console.warn('Using stale cache due to fetch error');
      }
    } finally {
      setIsLoading(false);
    }
  }, [cacheKey, fetchFunction, cacheDuration]);

  useEffect(() => {
    fetchData();
  }, [...dependencies, fetchData]);

  const refetch = useCallback(() => {
    return fetchData(true);
  }, [fetchData]);

  return { data, isLoading, error, refetch };
};

/**
 * Hook for managing multiple cached API calls
 * Useful when a component needs to fetch multiple datasets
 */
export const useMultipleCachedFetch = (fetchConfigs) => {
  const [results, setResults] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchAll = async () => {
      setIsLoading(true);
      const newResults = {};
      const newErrors = {};

      for (const config of fetchConfigs) {
        const { key, cacheKey, fetchFunction, cacheDuration = CACHE_DURATIONS.MEDIUM } = config;

        try {
          // Check cache first
          const cachedData = getCachedData(cacheKey, cacheDuration);
          if (cachedData !== null) {
            newResults[key] = cachedData;
            continue;
          }

          // Fetch fresh data
          const freshData = await fetchFunction();
          setCachedData(cacheKey, freshData);
          newResults[key] = freshData;
        } catch (err) {
          console.error(`Error fetching data for key "${key}":`, err);
          newErrors[key] = err.message || 'Failed to fetch data';
          
          // Try stale cache on error
          const staleCache = getCachedData(cacheKey, Infinity);
          if (staleCache !== null) {
            newResults[key] = staleCache;
          }
        }
      }

      setResults(newResults);
      setErrors(newErrors);
      setIsLoading(false);
    };

    fetchAll();
  }, []);

  return { results, isLoading, errors };
};
