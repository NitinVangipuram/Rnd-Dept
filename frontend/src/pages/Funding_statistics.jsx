import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
export default function Funding_statistics() {
  const [fundingAgencies, setFundingAgencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const STRAPI_API_TOKEN = "5840a35387b0b7e4257bb8fd5cfa7a331ce84d5cd6322fbec56e8fde7b111b365b1a3deab39c0340d7d0b9fa75213d7b580773d2453ab1c2541f31c81c6a8dd8d21fbce6af2cd53d1d544807e7d4dce566ba211310dc343031853b186529c1498fb80405ede5688007007d4c24850451a831c9f0ad188ef3e587ad48034fb2db"
  const STRAPI_API_URL = 'https://rnd.iitdh.ac.in/strapi/api/funding-statistics?pagination[pageSize]=100'; 

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!STRAPI_API_TOKEN) {
          throw new Error("Strapi API Token is not defined.");
        }

        const response = await fetch(STRAPI_API_URL, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const jsonData = await response.json();

        if (!jsonData || !Array.isArray(jsonData.data)) {
          throw new Error("Invalid data format received from API. Expected 'data' array.");
        }

      
        const transformedData = jsonData.data.map((item) => {
          return {
            id: item.id,
            sl_no: item.sl_no, 
            name: item.name,   
            url: item.url,     
          };
        });

        setFundingAgencies(transformedData);
      } catch (err) {
        console.error("Failed to fetch funding agencies:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [STRAPI_API_TOKEN]);

  if (loading) {
    return (
      <PageSkeleton/>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800 flex flex-col justify-center items-center text-red-600">
        <p className="text-xl font-semibold">Error: {error.message}</p>
        <p className="text-sm mt-2">Please ensure your Strapi server is running, your API token is correct, and network is available.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
        Funding Agencies
      </h1>

      <div className="overflow-x-auto rounded-lg shadow-md">
        <table className="min-w-full table-auto border border-gray-300 bg-white rounded-lg overflow-hidden">
          <thead className="bg-gray-300 text-sm sm:text-base text-gray-700">
            <tr>
              <th className="p-2 sm:p-3 border border-gray-300">Sl No.</th>
              <th className="p-2 sm:p-3 border border-gray-300 text-left">Agency Name</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base divide-y divide-gray-200">
            {fundingAgencies.length > 0 ? (
              fundingAgencies.map((agency) => (
                <tr
                  key={agency.id}
                  className={`text-center ${agency.sl_no % 2 === 0 ? "bg-white" : "bg-gray-100"} hover:bg-gray-50 transition-colors duration-200`}
                >
                  <td className="p-2 sm:p-3 border-r border-gray-200">{agency.sl_no}</td>
                  <td className="p-2 sm:p-3 text-left">
                    <a
                      href={agency.url}
                      className="text-blue-700 underline hover:text-blue-900 font-medium"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {agency.name}
                    </a>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="2" className="p-4 text-center text-gray-500">No funding agencies found.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}