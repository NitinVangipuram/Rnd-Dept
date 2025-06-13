import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-scroll';

import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';

const CACHE_EXPIRY = 5 * 60 * 1000;

const backendUrl = import.meta.env.VITE_STRAPI_URL;

export default function Documents() {
  const [docsData, setDocsData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = 'docsDataCache';
    const cacheTimestampKey = 'docsDataCacheTimestamp';

    const loadData = async () => {
      const cached = localStorage.getItem(cacheKey);
      const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

      if (cached && cachedTimestamp && Date.now() - Number(cachedTimestamp) < CACHE_EXPIRY) {
        setDocsData(JSON.parse(cached));
        setLoading(false);
      } else {
        try {
          const response = await axios.get(`https://rnd.iitdh.ac.in/strapi/api/om-docs?populate=*`);
          const items = response.data?.data || [];

          setDocsData(items);

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
    <div id='doc-top' className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-8 text-center">OM and Documents</h1>

      {loading ? (
        <PageSkeleton />
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] bg-red-50 border border-red-200 rounded-lg shadow p-6 my-8">
          <h2 className="text-xl font-bold text-red-700 mb-2">Unable to load OM and Documents</h2>
          <p className="text-red-600 mb-2">
            There was a problem fetching the documents from the server.
          </p>
          <p className="text-sm text-red-500 mb-4">
            Please check your internet connection or try again later.
          </p>
        </div>
      ) : (
        <div className="max-w-4xl mx-auto space-y-8">
          {docsData.map((section, idx) => (
            <div
              key={idx}
              className="bg-white p-5 rounded-2xl shadow-md border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-black mb-4">{section.heading}</h2>
              <ol className="list-decimal ml-6 space-y-2">
                {section.link.map((item, i) => (
                  <li key={i}>
                    <a
                      href={item.wordLink}
                      className="text-purple-600 hover:text-purple-800 no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: 'none' }}
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
      {/* Back to Top Button */}
                  <div className="cursor-pointer text-center mt-10">
                      <Link
                          to="doc-top"
                          spy={true}
                          smooth={true}
                          offset={-100}
                          duration={500}
                          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                      >
                          Back to Top
                      </Link>
                  </div>
    </div>
  );
}
