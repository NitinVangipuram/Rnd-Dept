import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';


export default function Sponsored() {
   const [doc, setdoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Note: consultancies named collection was created inplace os Sponsors actually this is sponsored projects
    const STRAPI_API_TOKEN = "76c0a73a0e8995193f27fb3fa52991a8cc964a7e561831edbec5568b3bb861fb9f5d410c452c9a476d54ea42087134afdd39fe85bcf36e426a3e647359ca11d3579f0431631e58d82fb51b9ed917dc57381815ac0f37ec4fc096f6fb1f1b8937ec24ca88926827fe868b10115c4abd2867815984f99a42051143771b054c1aa6"
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
            <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>Consultancy Projects</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-purple-800">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Serial No
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Title of Project
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Principal Investigator
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                 Industry
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                  Sanction Date
                            </th>
    
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Duration
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                             Cost of Project
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
                                    {item.sanctiondate}
                                </td>
                              
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.duration}
                                </td>
                                  <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.costofprojects}
                                </td>
                               
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}