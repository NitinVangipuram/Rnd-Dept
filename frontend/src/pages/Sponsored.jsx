import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';


export default function Sponsored() {
   const [doc, setdoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Note: consultancies named collection was created inplace os Sponsors actually this is sponsored projects
    const STRAPI_API_TOKEN = "ebda610534c9c4d00a1f5511b8f837c6fd751b939a08162f6f0e701058d9e94d000fed2381f0343b878c068a937aa92d6e55eba419324fc978a782111f292d8833099e3ab0fd4d6669b2d8daf3383d0a822559263f12bc5b542f9cec18e5465dbe44795608086eda6efa5575bd07d9f76a39a9acf27ce76f16c2e141a4d588c1"
    const STRAPI_API_URL = 'http://localhost:1337/api/sponsors?pagination[pageSize]=100';

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
        <div className="p-6" id="research-and-documents-table">
          <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>Sponsored Projects</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-purple-800">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Serial No
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Title
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Investigator(s)
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Sponsoring Agency Scheme
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Value
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Duration
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Sanction Date
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {doc.map((item) => (
                            <tr key={item.id}>
                                 <td className="px-3 py-4 whitespace-normal text-sm font-medium text-gray-900">
                                    {item.sl_no}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm font-medium text-gray-900">
                                    {item.title}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.principalInvestigator}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.industry}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.values}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.time}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.sanctiondate}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}