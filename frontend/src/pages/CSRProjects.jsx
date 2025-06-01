import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';

export default function CSR() {
    const [doc, setdoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const STRAPI_API_TOKEN = "8da67daebd67d87252890446f93ca04aac3d25304036a0915b137c3ec5da4170d47539bb2865a5ab3cc4836f7f0930a4661573bbb8f81a01fb77a4dd7dde88037f9602a5437b55237b1b97186500465d7b37c075345d7a0b4a85813067db6df7f9dbe16aa191b4b4df079a6aa8328adffe4c60ba8741eb59ec3d4906101ed7ab";
    const STRAPI_API_URL = 'http://localhost:1337/api/csrprojects';

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
            <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>CSR Projects</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-purple-800">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Title
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Investigator(s)
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Sponsoring Agency
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {doc.map((item) => (
                            <tr key={item.id}>
                                <td className="px-6 py-4 whitespace-normal text-sm font-medium text-gray-900">
                                    {item.title}
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.investigator}
                                </td>
                                <td className="px-6 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.sponsoringAgency}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}