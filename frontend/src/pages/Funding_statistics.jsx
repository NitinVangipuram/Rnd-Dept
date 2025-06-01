import React, { useState,useEffect } from 'react';
import axios from 'axios';

import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';

const CACHE_EXPIRY = 5 * 60 * 1000;

const backendUrl = import.meta.env.VITE_STRAPI_URL;

export default function Funding_statistics() {
  const [fundingData, setFundingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error,setError] = useState(null);

  useEffect(() => {
    const cacheKey = 'fundingDataCache';
    const cacheTimestampKey = 'fundingDataCacheTimestamp';

    //console.log(backendUrl);

    const loadData = async () => {
      // Try to get from cache
      const cached = localStorage.getItem(cacheKey);
      const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

      // If cached and not expired
      if (cached && cachedTimestamp && Date.now() - Number(cachedTimestamp) < CACHE_EXPIRY) {
        setFundingData(JSON.parse(cached));
        setLoading(false);

      //   console.log("test1"+fundingData);
      } else {
        // Fetch from backend
        try {
          const response = await axios.get(`${backendUrl}/funding?populate=*`);
          const items = response.data?.data?.link || [];

          //console.log(items)

          setFundingData(items);


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
    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
      Funding Agencies
    </h1>

    <div className="overflow-x-auto">
      {loading ? (
        <PageSkeleton />
      ) : error ? (
        <div className="text-red-500">{error}</div>
      ) : (
        <table className="min-w-full table-auto border border-gray-300 shadow-md bg-white">
          <thead className="bg-gray-300 text-sm sm:text-base">
            <tr>
              <th className="p-2 sm:p-3 border">Sl No.</th>
              <th className="p-2 sm:p-3 border text-left">Agency Name</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base">
            {fundingData.map((agency, index) => (
              <tr
                key={index}
                className={`text-center ${index % 2 === 0 ? "bg-white" : "bg-gray-200"}`}
              >
                <td className="p-2 sm:p-3 border">{index + 1}</td>
                <td className="p-2 sm:p-3 border text-left">
                  <a
                    href={agency.link}
                    className="text-blue-700 underline hover:text-blue-900"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {agency.name}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  </div>
  )
};