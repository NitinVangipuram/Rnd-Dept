/**
 * Cache Utility for React Applications
 * Provides localStorage-based caching with TTL (Time To Live)
 */

/**
 * Get cached data if valid, otherwise return null
 * @param {string} cacheKey - The key to retrieve from cache
 * @param {number} cacheDuration - Cache duration in milliseconds (default: 5 minutes)
 * @returns {any|null} - Cached data or null if expired/not found
 */
export const getCachedData = (cacheKey, cacheDuration = 5 * 60 * 1000) => {
  try {
    const cachedData = localStorage.getItem(cacheKey);
    const cacheTimestamp = localStorage.getItem(`${cacheKey}_timestamp`);
    
    if (!cachedData || !cacheTimestamp) {
      return null;
    }
    
    const now = Date.now();
    const timestamp = parseInt(cacheTimestamp, 10);
    
    // Check if cache is still valid
    if (now - timestamp < cacheDuration) {
      return JSON.parse(cachedData);
    }
    
    // Cache expired, clean up
    clearCache(cacheKey);
    return null;
  } catch (error) {
    console.error(`Error reading cache for key "${cacheKey}":`, error);
    return null;
  }
};

/**
 * Set data in cache with timestamp
 * @param {string} cacheKey - The key to store data under
 * @param {any} data - The data to cache
 */
export const setCachedData = (cacheKey, data) => {
  try {
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(`${cacheKey}_timestamp`, Date.now().toString());
  } catch (error) {
    console.error(`Error setting cache for key "${cacheKey}":`, error);
  }
};

/**
 * Clear specific cache entry
 * @param {string} cacheKey - The key to clear
 */
export const clearCache = (cacheKey) => {
  try {
    localStorage.removeItem(cacheKey);
    localStorage.removeItem(`${cacheKey}_timestamp`);
  } catch (error) {
    console.error(`Error clearing cache for key "${cacheKey}":`, error);
  }
};

/**
 * Clear all cache entries (useful for logout or data refresh)
 * @param {string} prefix - Optional prefix to clear only specific cache entries
 */
export const clearAllCache = (prefix = '') => {
  try {
    const keys = Object.keys(localStorage);
    keys.forEach(key => {
      if (prefix === '' || key.startsWith(prefix)) {
        localStorage.removeItem(key);
      }
    });
  } catch (error) {
    console.error('Error clearing all cache:', error);
  }
};

/**
 * Check if cache exists and is valid
 * @param {string} cacheKey - The key to check
 * @param {number} cacheDuration - Cache duration in milliseconds
 * @returns {boolean} - True if cache is valid
 */
export const isCacheValid = (cacheKey, cacheDuration = 5 * 60 * 1000) => {
  try {
    const cacheTimestamp = localStorage.getItem(`${cacheKey}_timestamp`);
    if (!cacheTimestamp) return false;
    
    const now = Date.now();
    const timestamp = parseInt(cacheTimestamp, 10);
    
    return (now - timestamp) < cacheDuration;
  } catch (error) {
    return false;
  }
};

// Cache duration constants (in milliseconds)
export const CACHE_DURATIONS = {
  SHORT: 2 * 60 * 1000,      // 2 minutes
  MEDIUM: 5 * 60 * 1000,     // 5 minutes
  LONG: 15 * 60 * 1000,      // 15 minutes
  HOUR: 60 * 60 * 1000,      // 1 hour
  DAY: 24 * 60 * 60 * 1000,  // 24 hours
};
