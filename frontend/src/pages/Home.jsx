import React, { useEffect, useState } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
import AltCarousel from '../components/Carousel/AltCarousel';
import img1 from '../assets/carousel-images/image-1.png';
import img2 from '../assets/carousel-images/image-2.png';
import img3 from '../assets/carousel-images/image-3.png';
import img4 from '../assets/carousel-images/image-4.png';
import img5 from '../assets/carousel-images/image4.jpg'
import pdf1 from '../assets/i1.png';
import pdf2 from '../assets/i2.png';
import pdf3 from '../assets/i3.png';
import pdf4 from '../assets/i10.jpg';
import pdf5 from '../assets/i11.jpg';

import { Link } from 'react-scroll';

const CACHE_KEY = 'cachedOpportunities';
const CACHE_TIMESTAMP_KEY = 'opportunitiesCacheTimestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in ms


const Home = () => {
    const [opportunities, setOpportunities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const images = [img5, img1, img2, img3, img4,pdf1,pdf2,pdf3,pdf4,pdf5];

    useEffect(() => {
        const fetchOpportunities = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(
                    'https://opensheet.vercel.app/1t352KbG0gFpu_QK7BVjBrcwLy5Kthq4JmHRy_AtVHUM/Sheet1'
                );
                const data = await res.json();
                // console.log('Fetched opportunities:', data);
                const today = new Date();

                const filtered = data.filter(entry => {
                    const deadlineStr = entry.Deadline?.trim();
                    const deadlineDate = new Date(deadlineStr);
                     deadlineDate.setDate(deadlineDate.getDate() + 1); 
                    const isRolling = /rolling/i.test(deadlineStr); // case-insensitive match
                    const isFutureDate = deadlineStr && !isNaN(deadlineDate) && deadlineDate >= today;
                    return isRolling || isFutureDate;
                });
                
                console.log('Filtered opportunities:', filtered);
                localStorage.setItem(CACHE_KEY, JSON.stringify(filtered));
                localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());

                setOpportunities(filtered);
            } catch (err) {
                console.error('Error fetching opportunities:', err);
                setError('Could not load opportunities.');
            } finally {
                setIsLoading(false);
            }
        };

        const cachedData = localStorage.getItem(CACHE_KEY);
        const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
        const now = Date.now();

        if (
            cachedData &&
            cacheTimestamp &&
            now - parseInt(cacheTimestamp, 10) < CACHE_DURATION
        ) {
            setOpportunities(JSON.parse(cachedData));
            setIsLoading(false);
        } else {
            fetchOpportunities();
        }
    }, []);

    return (
        <>
            {/* Carousel Section */}
            <div id='home-top' className="py-6 px-4 md:px-8">
                <div className="">
                    <AltCarousel images={images} />
                </div>
            </div>

            {/* Opportunities Section */}
            <div className="px-4 py-8 max-w-6xl mx-auto">
                <h2 className="text-2xl font-bold text-gray-800 mb-6">Call for proposals</h2>

                {isLoading ? (
                    <PageSkeleton />
                ) : error ? (
                    <div className="text-red-500">{error}</div>
                ) : opportunities.length === 0 ? (
                    <div className="text-gray-500">No current opportunities with upcoming deadlines.</div>
                ) : (
                    <div className="overflow-x-auto rounded-xl shadow-sm border border-gray-200">
                        <table className="min-w-full bg-white">
                            <thead className="bg-gray-100 border-b border-gray-300">
                                <tr className='bg-purple-600'>
                                    <th className="text-left text-white font-semibold px-6 py-3">Scheme</th>
                                    <th className="text-left text-white font-semibold px-6 py-3"> Agency</th>
                                    <th className="text-left text-white font-semibold px-6 py-3"> Deadline</th>
                                    <th className="text-left text-white font-semibold px-6 py-3"> Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                {opportunities.map((item, idx) => (
                                    <tr
                                        key={idx}
                                        className="hover:bg-gray-50 border-b border-gray-200 transition duration-150"
                                    >
                                        <td className="px-6 py-4 text-gray-800">{item.Scheme}</td>
                                        <td className="px-6 py-4 text-gray-600">{item.Agnecy}</td>
                                        <td className="px-6 py-4 text-gray-600">{item.Deadline}</td>
                                        <td className="px-6 py-4">
                                            {item.Link ? (
                                                <a
                                                    href={item.Link}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-blue-600 hover:underline font-medium"
                                                >
                                                    View / Apply
                                                </a>
                                            ) : (
                                                <span className="text-gray-400">N/A</span>
                                            )}
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}

            </div>
            {/* Back to Top Button */}
            <div className="cursor-pointer text-center mt-10">
                <Link
                    to="home-top"
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={500}
                    className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
                >
                    Back to Top
                </Link>
            </div>
        </>
    );
};

export default Home;
