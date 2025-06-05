import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';


export default function Sponsored() {
   const [doc, setdoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const SPONSOR_TOKEN="c5e1d1e520132e6509aa8a2c1c5b3063469217c9c7d7ec8174a5cb441f8443f0ddefd2430c8f95a66eabb72bba5f0ca79c8aecf17752e912aaaf0d9d07ddf7ae1acdc37972f31e5f3d9419aa54b9c2034756704913fb6ccbd7ad56915c50bd0b8faeccdd30d886a0066c2b1af6aa111dadc1147743f303eaa63373bb09067980"
    const STRAPI_API_TOKEN = SPONSOR_TOKEN
    const STRAPI_API_URL = 'https://rnd.iitdh.ac.in/strapi/api/sponsors?pagination[pageSize]=100';

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
              {item.sl_no}
            </td>
            <td className="px-2 py-2 whitespace-normal text-sm font-medium text-gray-900">
              {item.title}
            </td>
            <td className="px-2 py-2 whitespace-normal text-sm text-gray-700">
              {item.Investigator}
            </td>
            <td className="px-2 py-2 whitespace-normal text-sm text-gray-700">
              {item.SponsoringAgencyScheme}
            </td>
            <td className="px-2 py-2 whitespace-normal text-sm text-gray-700">
              {item.values}
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
