import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
import { Link } from 'react-scroll';
import axios from 'axios';
import './searchresults.css'
import { getCachedData, setCachedData, CACHE_DURATIONS } from '../utils/cacheUtils';

const CACHE_KEY_CSR = 'csr_projects_data';

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

    const [info, setInfo] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [entries, setEntries] = useState('')
    const [value, setValue] = useState('')

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                // Check cache first
                const cachedData = getCachedData(CACHE_KEY_CSR, CACHE_DURATIONS.MEDIUM);
                if (cachedData) {
                    setInfo(cachedData);
                    setLoading(false);
                    return;
                }

                // Fetch fresh data
                const res = await axios.get("https://opensheet.vercel.app/1aGpQlcEX4hw_L4nAhOxTC07KK0yXe0QqoKW3s7TRAaM/Sheet1");
                
                // Cache the data
                setCachedData(CACHE_KEY_CSR, res.data);
                setInfo(res.data);
            } catch (error) {
                console.error(error);
                // Try stale cache on error
                const staleCache = getCachedData(CACHE_KEY_CSR, Infinity);
                if (staleCache) {
                    setInfo(staleCache);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);


    useEffect(() => {
        let sum = 0;
        let count = 0;

        info.map((item) => {

            const val = parseFloat(item["Value (₹1,00,000)"]) * 100000;
            if (val != NaN)
                sum += val

            count++;
        })

        setEntries(count)
        setValue(sum)
    }, [info])


    if (loading) {
        return (
            <PageSkeleton />
        );
    }

    function parseDateDMY(dateStr) {
        if (!dateStr || dateStr.toLowerCase() === 'n/a') return null;


        const parts = dateStr.split(/[-.]/);

        if (parts.length !== 3) return null;

        const day = parseInt(parts[0], 10);
        const month = parseInt(parts[1], 10) - 1;
        const year = parseInt(parts[2], 10);

        const date = new Date(year, month, day);
        return isNaN(date.getTime()) ? null : date;
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

            <ul className="project-summary">
                <li><b>Total Projects:</b>{entries}</li>
                <li><b>Total Value of Projects:</b>₹{value.toLocaleString('en-IN')} </li>
            </ul>
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
                    className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 cursor-pointer z-50"
                >
                    ↑
                </Link>
            </div>
        </div>
    );
}