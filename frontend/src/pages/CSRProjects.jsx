import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
import { Link } from 'react-scroll';
import axios from 'axios';

export default function CSR() {
    // const [doc, setdoc] = useState([]);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // const STRAPI_API_URL = 'https://rnd.iitdh.ac.in/strapi/api/csrprojects';

    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             if (!STRAPI_API_TOKEN) {
    //                 throw new Error("Strapi API Token is not defined.");
    //             }

    //             const response = await fetch(STRAPI_API_URL, {
    //                 method: 'GET',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                     'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
    //                 },
    //             });

    //             if (!response.ok) {
    //                 const errorBody = await response.json().catch(() => ({}));
    //                 throw new Error(`HTTP error! Status: ${response.status} - ${errorBody.error?.message || response.statusText}`);
    //             }

    //             const jsonData = await response.json();

    //             if (!jsonData || !Array.isArray(jsonData.data)) {
    //                 throw new Error("Invalid data format received from API. Expected 'data' array.");
    //             }
    //             setdoc(jsonData.data);

    //         } catch (err) {
    //             console.error("Failed to fetch documents:", err);
    //             setError(err);
    //         } finally {
    //             setLoading(false);
    //         }
    //     };

    //     fetchData();
    // }, [STRAPI_API_TOKEN]);

    const [info,setInfo] = useState([]);
    const [loading,setLoading] = useState(true);
    const [error,setError] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const res = await axios.get("https://opensheet.vercel.app/1aGpQlcEX4hw_L4nAhOxTC07KK0yXe0QqoKW3s7TRAaM/Sheet1");
                setInfo(res.data); // reverse for latest first, optional
            } catch (error) {
                console.error(error); // optional logging
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <PageSkeleton />
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800 flex flex-col justify-center items-center text-red-600">
                <p className="text-xl font-semibold">Error: {error.message}</p>
                {/* <p className="text-sm mt-2 text-center">Please ensure your Strapi server is running, your API token is correct, and network is available.</p> */}
            </div>
        );
    }

    return (
        <div className="p-6" id="research-and-documents-table">
            <h1 id='csrProject-top' className='text-3xl font-bold text-center text-gray-800 mb-6'>CSR Projects</h1>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    {info.length > 0 && (
                        <thead className="bg-purple-800">
                            <tr>
                                {Object.keys(info[0]).map((key) => (
                                    <th
                                        key={key}
                                        className="px-6 py-2 text-left text-sm font-medium text-white uppercase tracking-wider"
                                    >
                                        {key}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                    )}
                    <tbody className="bg-white divide-y divide-gray-200">
                        {info.map((item, idx) => (
                            <tr key={idx}>
                                {Object.keys(info[0]).map((key, i) => (
                                    <td
                                        key={i}
                                        className="px-6 py-4 whitespace-normal text-sm text-gray-700"
                                    >
                                        {item[key]}
                                    </td>
                                ))}
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

                                    {/* Back to Top Button */}
                                    <div className="cursor-pointer text-center mt-10">
                                        <Link
                                            to="csrProject-top"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                                        >
                                            Back to Top
                                        </Link>
                                    </div>
        </div>
    );
}