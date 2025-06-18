import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';

export default function CSR() {
    const [doc, setdoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const STRAPI_API_TOKEN = "756aec3b3ed14f6ababdd892366b869b7a2936ac68962ee029a1082add1bd5d2493c000c59dfa2c44c25ee85e9afc0ee434b1b0a95a6050d8ef3159f40034a39d0d96e8b182c4c038506775878074ba42df4b973150db4d38d0c25d266ac80e4d4dd40fd0f321386e0fb45474adedbe73d6c4e119cd76708d1526af1f40c4e3c"
    const STRAPI_API_URL = 'https://rnd.iitdh.ac.in/strapi/api/csrprojects';

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
            <h1 className='text-3xl font-bold text-center text-gray-800 mb-4'>CSR Projects</h1>
            <div className="mb-4 text-center">
                <a
                href="https://drive.google.com/drive/u/2/folders/1EQ8rYC1ccBZHYn7UreO3Pn9TIUoCHF_Y"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-purple-900 text-purple-700 text-sm sm:text-base font-medium"
                >
                View as document
                </a>
            </div>
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