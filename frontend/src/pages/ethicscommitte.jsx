import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';


export default function Ethicscommitte() {
   const [doc, setdoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Note: consultancies named collection was created inplace os Sponsors actually this is sponsored projects
    const STRAPI_API_TOKEN = "8cb9116689a985543e1b5290caa6b58ce8da4dab31abb817c70ed2e96282f0d034ebe8504ff2f6fc7222f2efa7822ae51a9a531e1331469d0790e88f4b58285d1a39432618127cb9f7114da65e8594e99dfbb342d3497d0a88efef0625709bafe7adc09b101785abfb09fbc5315fcdd5341bbcd3903bdab9280fa834e2d38db1"
    const STRAPI_API_URL = 'http://localhost:1337/api/ethicscommittes?pagination[pageSize]=100';

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
            <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
                Institutional Ethics Committee (IEC)</h1>
                <br />
            <p className="text-lg text-gray-700 mb-6 text-center">
                The Institutional Ethics Committee (IEC) is responsible for ensuring that all research involving human participants is conducted ethically and in compliance with relevant regulations. This includes reviewing research proposals, monitoring ongoing studies, and ensuring the rights and welfare of participants are protected.</p>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-purple-800">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                S.No
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Current Organization
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                            Role
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
                                    {item.Name}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.currentorganization}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.role}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}