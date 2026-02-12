import { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
import { Link } from 'react-scroll';
import axios from 'axios';
import "./searchresults.css"
import { getCachedData, setCachedData, CACHE_DURATIONS } from '../utils/cacheUtils';

const GOOGLE_SHEET_CSV_URL = 'https://docs.google.com/spreadsheets/d/1-v5ne-TsrgHOGDlcBMoGugzE_vO8H93kgWXtHNkYnZM/export?format=csv&gid=0';
const CACHE_KEY_PATENTS = 'patents_data';
const CACHE_KEY_PATENTS_NUMBER = 'patents_number';

const Patents = () => {
    const [patentData, setPatentData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [entries,setEntries] = useState('');
    const [number,setNumber] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                
                // Check cache first
                const cachedData = getCachedData(CACHE_KEY_PATENTS, CACHE_DURATIONS.MEDIUM);
                if (cachedData) {
                    setPatentData(cachedData);
                    setLoading(false);
                    return;
                }

                // Fetch fresh data
                const res = await axios.get("https://opensheet.vercel.app/1GwrkMQ6uIeKmUU8yhEpZce-cTnGDcvNlj6KwYR6CrBE/Sheet1");
                
                // Cache the data
                setCachedData(CACHE_KEY_PATENTS, res.data);
                setPatentData(res.data);
            } catch (error) {
                console.error(error);
                // Try stale cache on error
                const staleCache = getCachedData(CACHE_KEY_PATENTS, Infinity);
                if (staleCache) {
                    setPatentData(staleCache);
                }
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    useEffect(() => {
        const fetchNumber = async () => {
            try {
                // Check cache first
                const cachedNumber = getCachedData(CACHE_KEY_PATENTS_NUMBER, CACHE_DURATIONS.MEDIUM);
                if (cachedNumber !== null) {
                    setNumber(cachedNumber);
                    return;
                }

                // Fetch fresh data
                const response = await axios.get(GOOGLE_SHEET_CSV_URL);
                const csvString = response.data;
                const parsedNumber = parseFloat(csvString);

                if (!isNaN(parsedNumber)) {
                    // Cache the number
                    setCachedData(CACHE_KEY_PATENTS_NUMBER, parsedNumber);
                    setNumber(parsedNumber);
                } else {
                    setNumber(null);
                }
            } catch (err) {
                console.error("Failed to fetch number:", err);
                // Try stale cache on error
                const staleCache = getCachedData(CACHE_KEY_PATENTS_NUMBER, Infinity);
                if (staleCache !== null) {
                    setNumber(staleCache);
                } else {
                    setNumber(null);
                }
            }
        };

        fetchNumber();
    }, [])

    useEffect(()=>{
        let count=0;

        patentData.map((item)=>{
            count++;
        })
        
        setEntries(count)
    },[patentData])

    if (loading) {
        return (
            <PageSkeleton />
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800 flex flex-col justify-center items-center text-red-600">
                <p className="text-xl font-semibold">Error: {error.message}</p>
            </div>
        );
    }

    return (   
        <div className="p-6">
            <h1 id='patents-top' className='text-3xl font-bold text-center text-gray-800 mb-6'>PATENTS</h1>
            
            <ul className='project-summary'>
                <li><b>Total Patents: </b>{entries}</li>
                <li><b>Total Patents Submitted: </b>{number} </li>
            </ul>
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    {patentData.length > 0 && (
                        <thead className="bg-purple-800">
                            <tr>
                                {Object.keys(patentData[0]).map((key) => (
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
                        {patentData.map((item, idx) => (
                            <tr key={idx}>
                                {Object.keys(patentData[0]).map((key, i) => (
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

                                    {/* Back to Top Button
                                    <div className="cursor-pointer text-center mt-10">
                                        <Link
                                            to="patents-top"
                                            spy={true}
                                            smooth={true}
                                            offset={-100}
                                            duration={500}
                                            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                                        >
                                            Back to Top
                                        </Link>
                                    </div> */}
        </div>
    )
};

export default Patents;