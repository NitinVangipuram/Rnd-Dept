import React, { useState, useEffect } from 'react';

const About = () => {
  const [aboutData, setAboutData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://cse.iitdh.ac.in/strapi/api/department-background-and-visions");

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const json = await response.json();

        // console.log(json.data);

        // Cache the data
        localStorage.setItem('cachedAboutData', JSON.stringify(json.data));
        localStorage.setItem('aboutDataCacheTimestamp', Date.now().toString());

        setAboutData(json.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Check cache first
    const cachedData = localStorage.getItem('cachedAboutData');
    const cacheTimestamp = localStorage.getItem('aboutDataCacheTimestamp');
    const now = Date.now();

    // console.log(cachedData);

    if (cachedData && cacheTimestamp && (now - parseInt(cacheTimestamp)) < 300000) {
      setAboutData(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, []);

  // Helper function to render description content
  const renderDescription = (description) => {
    return description.map((item, index) => {
      if (item.type === 'paragraph') {
        return (
          <p key={index} className="text-gray-600 leading-relaxed">
            {item.children[0].text}
          </p>
        );
      } else if (item.type === 'heading') {
        return (
          <h3 key={index} className="text-xl font-medium text-gray-700 mb-2">
            {item.children[0].text}
          </h3>
        );
      }
      return null;
    });
  };

  if (isLoading) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="animate-pulse space-y-6">
          {[1, 2, 3, 4, 5].map((i) => (
            <div key={i} className="bg-white p-6 rounded-lg shadow-sm">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-red-500 p-4 bg-red-50 rounded-lg">
          <p>Error loading content: {error}</p>
          <p className="text-sm mt-2">Please try refreshing the page.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">About Us</h1>
      
      <div className="space-y-6">
        {aboutData.map((section) => (
          <section key={section.id} className="bg-white p-6 rounded-lg shadow-sm">
            <h2 className="text-2xl font-semibold text-gray-700 mb-4">{section.Title}</h2>
            <div className="space-y-4">
              {renderDescription(section.description)}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default About; 