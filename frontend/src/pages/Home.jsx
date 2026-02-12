import React, { useEffect, useState } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
import AltCarousel from '../components/Carousel/AltCarousel';
import { Link } from 'react-scroll';
import { getCachedData, setCachedData, CACHE_DURATIONS } from '../utils/cacheUtils';

const CACHE_KEY_OPPORTUNITIES = 'home_opportunities';
const CACHE_KEY_CAROUSEL_IMAGES = 'home_carousel_images';

const Home = () => {
    const [opportunities, setOpportunities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [driveImages, setDriveImages] = useState([]);
    const [imagesLoading, setImagesLoading] = useState(true);

    // Fetch carousel images with caching
    useEffect(() => {
        const fetchStrapiImages = async () => {
            try {
                setImagesLoading(true);
                
                // Check cache first
                const cachedImages = getCachedData(CACHE_KEY_CAROUSEL_IMAGES, CACHE_DURATIONS.MEDIUM);
                if (cachedImages) {
                    setDriveImages(cachedImages);
                    setImagesLoading(false);
                    return;
                }

                // Fetch fresh data
                const url = "https://rnd.iitdh.ac.in/strapi/api/upload/files";
                const res = await fetch(url);
                const data = await res.json();

                const imageUrls = data
                    .filter((file) => file.mime.includes("image/"))
                    .map((file) => file.url.startsWith("http") ? file.url : `http://localhost:1337${file.url}`);

                // Cache the images
                setCachedData(CACHE_KEY_CAROUSEL_IMAGES, imageUrls);
                setDriveImages(imageUrls);
            } catch (err) {
                console.error("Error fetching Strapi images:", err);
                // Try to use stale cache on error
                const staleCache = getCachedData(CACHE_KEY_CAROUSEL_IMAGES, Infinity);
                if (staleCache) {
                    setDriveImages(staleCache);
                }
            } finally {
                setImagesLoading(false);
            }
        };

        fetchStrapiImages();
    }, []);

    // Fetch opportunities with improved caching
    useEffect(() => {
        const fetchOpportunities = async () => {
            try {
                setIsLoading(true);
                
                // Check cache first
                const cachedOpportunities = getCachedData(CACHE_KEY_OPPORTUNITIES, CACHE_DURATIONS.MEDIUM);
                if (cachedOpportunities) {
                    setOpportunities(cachedOpportunities);
                    setIsLoading(false);
                    return;
                }

                // Fetch fresh data
                const res = await fetch(
                    'https://opensheet.vercel.app/1t352KbG0gFpu_QK7BVjBrcwLy5Kthq4JmHRy_AtVHUM/Sheet1'
                );
                const data = await res.json();
                const today = new Date();

                const filtered = data.filter(entry => {
                    const deadlineStr = entry.Deadline?.trim();
                    const deadlineDate = new Date(deadlineStr);
                    deadlineDate.setDate(deadlineDate.getDate() + 1);
                    const isRolling = /rolling/i.test(deadlineStr);
                    const isFutureDate = deadlineStr && !isNaN(deadlineDate) && deadlineDate >= today;
                    return isRolling || isFutureDate;
                });

                // Cache the filtered opportunities
                setCachedData(CACHE_KEY_OPPORTUNITIES, filtered);
                setOpportunities(filtered);
            } catch (err) {
                console.error('Error fetching opportunities:', err);
                setError('Could not load opportunities.');
                
                // Try to use stale cache on error
                const staleCache = getCachedData(CACHE_KEY_OPPORTUNITIES, Infinity);
                if (staleCache) {
                    setOpportunities(staleCache);
                    setError(null);
                }
            } finally {
                setIsLoading(false);
            }
        };

        fetchOpportunities();
    }, []);

    const allImages = [...driveImages];

    return (
        <>
            {/* Carousel Section */}
            <div id='home-top' className="py-6 px-4 md:px-8">
                <div className="">
                    <AltCarousel images={allImages} />
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
                    className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 cursor-pointer z-50"
                >
                    ↑
                </Link>
            </div>
        </>
    );
};

export default Home;