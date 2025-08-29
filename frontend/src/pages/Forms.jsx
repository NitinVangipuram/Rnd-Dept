import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';

const CACHE_EXPIRY = 5 * 60 * 1000;
const backendUrl = import.meta.env.VITE_STRAPI_URL;
import { Link } from 'react-scroll';

export default function Forms() {

  const [formData, setFormData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const cacheKey = 'formsDataCache';
    const cacheTimestampKey = 'formsDataCacheTimestamp';

    const loadData = async () => {
      const cached = localStorage.getItem(cacheKey);
      const cachedTimestamp = localStorage.getItem(cacheTimestampKey);

      if (cached && cachedTimestamp && Date.now() - Number(cachedTimestamp) < CACHE_EXPIRY) {
        setFormData(JSON.parse(cached));
        setLoading(false);
      } else {
        try {
          const response = await axios.get(`https://rnd.iitdh.ac.in/strapi/api/form?populate=*`);
          const items = response.data?.data?.link || [];
          setFormData(items);
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
    <div id='forms-top' className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800">
      <h1 className="text-3xl sm:text-3xl font-bold mb-4 text-center">R&D Forms</h1>
      <div className="mb-4 text-center">
        <a
          href="https://drive.google.com/drive/u/2/folders/1EQ8rYC1ccBZHYn7UreO3Pn9TIUoCHF_Y"
          target="_blank"
          rel="noopener noreferrer"
          className="underline hover:text-purple-900 text-purple-700 text-sm sm:text-base font-medium"
        >
          View all forms
        </a>
      </div>

      {loading ? (
        <PageSkeleton />
      ) : error ? (
        <div className="flex flex-col items-center justify-center min-h-[40vh] bg-red-50 border border-red-200 rounded-lg shadow p-6 my-8">
          <h2 className="text-xl font-bold text-red-700 mb-2">Unable to load forms</h2>
          <p className="text-red-600 mb-2">
            There was a problem fetching the forms from the server.
          </p>
          <p className="text-sm text-red-500 mb-4">
            Please check your internet connection or try again later.
          </p>
        </div>
      ) : (
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-purple-800">
              <tr>
                <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                  Sl No.
                </th>
                <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                  Form Name
                </th>
                <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                  Word Format
                </th>
                <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                  PDF
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {formData.map((form, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-3 py-4 whitespace-normal text-sm font-medium text-gray-900 text-left">
                    {index + 1}
                  </td>
                  <td className="px-3 py-4 whitespace-normal text-sm font-medium text-gray-900 text-left">
                    {form.name}
                  </td>
                  <td className="px-3 py-4 whitespace-normal text-sm text-purple-700 text-left">
                    <a
                      href={form.wordLink}
                      className="underline hover:text-purple-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Download
                    </a>
                  </td>
                  <td className="px-3 py-4 whitespace-normal text-sm text-blue-700 text-left">
                    <a
                      href={form.pdfLink}
                      className="underline hover:text-purple-900"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
      {/* Back to Top Button */}
      <div className="cursor-pointer text-center mt-10">
         <Link
                            to="forms-top"
                            spy={true}
                            smooth={true}
                            offset={-100}
                            duration={500}
                            className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 cursor-pointer z-50"
                        >
                            ↑
                        </Link>
      </div>
    </div>
  );
}
