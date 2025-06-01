import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
export default function Funding_statistics() {
  const [fundingAgencies, setFundingAgencies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  
  const STRAPI_API_TOKEN = "7c8d827492d11c5bd765a34dbf4d32232482e8825a2282113a379ee32c5e1b2b881f16f691797d18aad30238711c20daba3222ae753235f28f19b37f1c53f06f63d4a26070ffb535493597ca1bbd1c75de877e6b9b99d1cff5eedb5d5e6844f1ce5b07356ab226aefb1071152dea7ee664b5d72899436d928b8ac125da48c6eb";
  const STRAPI_API_URL = 'http://localhost:1337/api/funding-statistics?pagination[pageSize]=100'; 

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