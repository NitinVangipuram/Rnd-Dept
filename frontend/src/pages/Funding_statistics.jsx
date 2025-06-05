import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';

const CACHE_EXPIRY = 5 * 60 * 1000;
const backendUrl = import.meta.env.VITE_STRAPI_URL;

export default function Funding_statistics() {
  const [fundingData, setFundingData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = 'fundingDataCache';
    const cacheTimestampKey = 'fundingDataCacheTimestamp';

    const loadData = async () => {
      const cached = localStorage.getItem(cacheKey);
      const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

      if (cached && cachedTimestamp && Date.now() - Number(cachedTimestamp) < CACHE_EXPIRY) {
        setFundingData(JSON.parse(cached));
        setLoading(false);
      } else {
        try {
          const response = await axios.get(`https://rnd.iitdh.ac.in/strapi/api/funding?populate=*`);
          const items = response.data?.data?.link || [];
          setFundingData(items);

          localStorage.setItem(cacheKey, JSON.stringify(items));
          localStorage.setItem(cacheTimestampKey, Date.now().toString());
        } catch (err) {
          console.error('Failed to fetch funding data', err);
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
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center text-black">
        Funding Agencies
      </h1>

      <div className="overflow-x-auto">
        {loading ? (
          <PageSkeleton />
        ) : error ? (
          <div className="flex flex-col items-center justify-center min-h-[40vh] bg-red-50 border border-red-200 rounded-lg shadow p-6 my-8">
            <h2 className="text-xl font-bold text-red-700 mb-2">Unable to load funding agencies</h2>
            <p className="text-red-600 mb-2">
              There was a problem fetching the funding data from the server.
            </p>
            <p className="text-sm text-red-500 mb-4">
              Please check your internet connection or try again later.
            </p>
          </div>
        ) : (
          <table className="min-w-full table-auto border border-gray-200 shadow-lg bg-white rounded-lg overflow-hidden">
            <thead>
              <tr className="bg-purple-700 text-white text-sm sm:text-base">
                <th className="p-3 text-center border-r border-purple-600 rounded-tl-lg">S.NO</th>
                <th className="p-3 text-left rounded-tr-lg">NAME</th>
              </tr>
            </thead>
            <tbody className="text-sm sm:text-base">
              {fundingData.map((agency, index) => (
                <tr
                  key={index}
                  className="text-gray-800 even:bg-gray-100 odd:bg-white"
                >
                  <td className="p-3 text-center border">{index + 1}</td>
                  <td className="p-3 border">
                    <a
                      href={agency.wordLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-700 hover:text-purple-900 no-underline"
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
  );
}
