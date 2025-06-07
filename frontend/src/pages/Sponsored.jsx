import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';


export default function Sponsored() {
   const [doc, setdoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const SPONSOR_TOKEN="2842d89dd1039a268c9be63f731c7ae26077c0153e21ddfe1d11c2dc8df8b08f3496151e8fc5e6de7b7947730dc3826df36a4d5696fbf5670277f9f040d04cf97f78b937af5fdb320fe0d0b937d8c9cdf58f86ae15eb3f6b147c919f908645a4e5d87e208bdeed88340a7642beda2d9e220d2c83d2262c7479df5a670b30488c"
    const STRAPI_API_TOKEN = SPONSOR_TOKEN
    const STRAPI_API_URL = 'https://rnd.iitdh.ac.in/strapi/api/Sponsored-projects?pagination[pageSize]=100';

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!STRAPI_API_TOKEN) {
                    throw new Error("Strapi API Token is not defined.");
                }
                console.log("making request to Strapi API with token")

                const response = await fetch(STRAPI_API_URL, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
                    },
                });

                if (!response.ok) {
                    const errorBody = await response.json().catch(() => ({}));
                    throw new Error(`HTTP error! Status: ${response.status} - ${errorBody.error?.message || response.statusText}`);
                }

                const jsonData = await response.json();

                if (!jsonData || !Array.isArray(jsonData.data)) {
                    throw new Error("Invalid data format received from API. Expected 'data' array.");
                }
                setdoc(jsonData.data);

            } catch (err) {
                console.error("Failed to fetch documents:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [STRAPI_API_TOKEN]);

    if (loading) {
        return (
            <PageSkeleton />
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800 flex flex-col justify-center items-center text-red-600">
                <p className="text-xl font-semibold">Error: {error.message}</p>
                <p className="text-sm mt-2 text-center">Please ensure your Strapi server is running, your API token is correct, and network is available.</p>
            </div>
        );
    }

    return (
        <div className="p-4" id="research-and-documents-table">
  <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">Sponsored Projects</h1>
  <div className="overflow-x-auto shadow-lg rounded-lg">
    <table className="min-w-full divide-y divide-gray-200">
      <thead className="bg-purple-800">
        <tr>
          <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">
            Serial No
          </th>
          <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">
            Title
          </th>
          <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">
            Investigator(s)
          </th>
          <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">
            Sponsoring Agency Scheme
          </th>
          <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">
            Value(₹1,00,000)
          </th>
          <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">
            Duration
          </th>
          <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">
            Sanction Date
          </th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {doc.map((item) => (
          <tr key={item.id}>
            <td className="px-2 py-2 whitespace-normal text-sm font-medium text-gray-900">
              {item.s_no}
            </td>
            <td className="px-2 py-2 whitespace-normal text-sm font-medium text-gray-900">
              {item.Title}
            </td>
            <td className="px-2 py-2 whitespace-normal text-sm text-gray-700">
              {item.Investigator}
            </td>
            <td className="px-2 py-2 whitespace-normal text-sm text-gray-700">
              {item.Agencyscheme}
            </td>
            <td className="px-2 py-2 whitespace-normal text-sm text-gray-700">
              {item.value}
            </td>
            <td className="px-2 py-2 whitespace-normal text-sm text-gray-700">
              {item.duration}
            </td>
            <td className="px-2 py-2 whitespace-normal text-sm text-gray-700">
              {item.sanctiondate}
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
</div>)}
