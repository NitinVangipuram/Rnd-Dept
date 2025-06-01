import React, { useState,useEffect } from 'react';
import axios from 'axios';

import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';

const CACHE_EXPIRY = 5 * 60 * 1000;

const backendUrl = import.meta.env.VITE_STRAPI_URL;

export default function Documents() {
  const [docsData, setDocsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    const cacheKey = 'docsDataCache';
    const cacheTimestampKey = 'docsDataCacheTimestamp';

    //console.log(backendUrl);

    const loadData = async () => {
      // Try to get from cache
      const cached = localStorage.getItem(cacheKey);
      const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

      // If cached and not expired
      if (cached && cachedTimestamp && Date.now() - Number(cachedTimestamp) < CACHE_EXPIRY) {
        setDocsData(JSON.parse(cached));
        setLoading(false);

      //   console.log("test1"+docsData);
      } else {
        // Fetch from backend
        try {
          const response = await axios.get(`${backendUrl}/om-docs?populate=*`);
          const items = response.data?.data || [];

          //console.log(items)

          setDocsData(items);


          // Save to cache
          localStorage.setItem(cacheKey, JSON.stringify(items));
          localStorage.setItem(cacheTimestampKey, Date.now().toString());
        } catch (err) {
          console.error('Failed to fetch Forms data', err);
          setError(err);
        } finally {
          setLoading(false);
        }
      }
    };

    loadData();
  }, [backendUrl]);

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">OM and Documents</h1>

      {loading ? (
        <PageSkeleton />
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <div className="max-w-3xl space-y-8">
          {docsData.map((section, idx) => (
            <div key={idx}>
              <h2 className="text-xl font-semibold mb-3">{section.heading}</h2>
              <ol className="list-decimal ml-6 space-y-2">
                {section.link.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.wordLink}
                      className="text-blue-600 underline hover:text-blue-800"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ol>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};