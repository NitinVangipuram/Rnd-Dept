import React, { useEffect, useState } from 'react';
import { Link } from 'react-scroll';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
import AltCarousel from '../components/Carousel/AltCarousel';
import img1 from '../assets/carousel-images/image-1.png';
import img2 from '../assets/carousel-images/image-2.png';
import img3 from '../assets/carousel-images/image-3.png';
import img4 from '../assets/carousel-images/image-4.png';

const CACHE_KEY = 'cachedOpportunities';
const CACHE_TIMESTAMP_KEY = 'opportunitiesCacheTimestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in minutes

const OpportunityCard = ({ scheme, agency, deadline, link }) => (
    <div
        className="cursor-pointer bg-white shadow-sm hover:shadow-md border border-gray-200 rounded-xl p-5 transition duration-300"
        onClick={() => link && window.open(link, '_blank')}
    >
        <h3 className="text-gray-800 font-semibold text-lg mb-2">
            🎯 {scheme}
        </h3>

        <p className="text-sm text-gray-600 mb-1">
            🏛️ <span className="font-medium">Agency:</span> {agency}
        </p>

        <p className="text-sm text-gray-600 mb-2">
            ⏳ <span className="font-medium">Deadline:</span> {deadline}
        </p>

        {link && (
            <span className="text-sm text-rose-600 mt-2 inline-block cursor-pointer transform transition-transform duration-200 hover:scale-105">
                📎 View / Apply
            </span>
        )}
    </div>
);

const Opportunities = () => {
    const [opportunities, setOpportunities] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const images = [img1, img2, img3, img4];

    useEffect(() => {
        const fetchOpportunities = async () => {
            try {
                setIsLoading(true);
                const res = await fetch(
                    'https://opensheet.vercel.app/1t352KbG0gFpu_QK7BVjBrcwLy5Kthq4JmHRy_AtVHUM/Sheet1'
                );
                const data = await res.json();

                const today = new Date();

                const filtered = data.filter(entry => {
                    const dateStr = entry.Deadline?.trim();
                    const date = new Date(dateStr);
                    return dateStr && !isNaN(date) && date >= today;
                });

                // Cache filtered data and timestamp
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

        // Check cache
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
            <div id="home-top" className="py-6 px-4 md:px-8">
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
                    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                        {opportunities.map((item, idx) => (
                            <OpportunityCard
                                key={idx}
                                scheme={item.Scheme}
                                agency={item.Agnecy} 
                                deadline={item.Deadline}
                                link={item.Link}
                            />
                        ))}
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

export default Opportunities;
