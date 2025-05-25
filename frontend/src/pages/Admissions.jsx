import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

// Helper function to render content
const renderContent = (content) => {
  if (!content) return null;

  return content.map((item, index) => {
    if (item.type === 'paragraph') {
      return (
        <p key={index} className="text-gray-700 mb-4">
          {item.children.map((child, childIndex) => (
            <span
              key={childIndex}
              className={child.bold ? 'font-bold' : child.italic ? 'italic' : ''}
            >
              {child.text}
            </span>
          ))}
        </p>
      );
    } else if (item.type === 'heading') {
      return (
        <h3 key={index} className="text-xl font-semibold text-gray-800 mb-4 mt-6">
          {item.children[0].text}
        </h3>
      );
    } else if (item.type === 'list') {
      return (
        <ul key={index} className={`list-${item.format === 'ordered' ? 'decimal' : 'disc'} list-inside mb-4 space-y-2`}>
          {item.children.map((listItem, listIndex) => (
            <li key={listIndex} className="text-gray-700">
              {listItem.children.map((child, childIndex) => (
                <span
                  key={childIndex}
                  className={child.bold ? 'font-bold' : child.italic ? 'italic' : ''}
                >
                  {child.text}
                </span>
              ))}
            </li>
          ))}
        </ul>
      );
    } else if (item.type === 'link') {
      return (
        <a
          key={index}
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-indigo-600 hover:text-indigo-800"
        >
          {item.children[0].text}
        </a>
      );
    }
    return null;
  });
};

// Navigation Card Component
const NavCard = ({ title, description, targetId }) => {
  return (
    <Link
      to={targetId}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className="cursor-pointer"
    >
      <div className="bg-white rounded-lg shadow-md p-4 text-center hover:shadow-lg transition-shadow duration-300 hover:bg-indigo-50 h-full flex flex-col items-center justify-center">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">{description}</p>
      </div>
    </Link>
  );
};

// Section Component
const Section = ({ id, title, children }) => {
  return (
    <div id={id} className="py-10 scroll-mt-[100px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">{title}</h2>
      {children}
    </div>
  );
};

// Admissions Page
const Admissions = () => {
  const [admissions, setAdmissions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://cse.iitdh.ac.in/strapi/api/admissions");
        if (!response.ok) {
          throw new Error('Failed to fetch admissions data');
        }

        const json = await response.json();

        // Cache the data
        localStorage.setItem('cachedAdmissions', JSON.stringify(json.data));
        localStorage.setItem('admissionsCacheTimestamp', Date.now().toString());

        setAdmissions(json.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Check cache first
    const cachedData = localStorage.getItem('cachedAdmissions');
    const cacheTimestamp = localStorage.getItem('admissionsCacheTimestamp');
    const now = Date.now();

    if (cachedData && cacheTimestamp && (now - parseInt(cacheTimestamp)) < 300000) {
      setAdmissions(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, []);

  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div id="admissions-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Admissions</h1>
        <p className="text-gray-600">
          Learn about our various programs and admission processes for undergraduate and graduate studies.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {admissions.map((program) => (
            <Link
              key={program.id}
              to={`program-${program.id}`}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition-shadow duration-300 hover:bg-indigo-50 h-full flex flex-col items-center justify-center">
                <div className="text-indigo-600 mb-3 text-3xl">
                  <i className="fas fa-graduation-cap"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{program.Title}</h3>
                <p className="text-sm text-gray-600 mt-2">View Details</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Program Sections */}
      {isLoading ? (
        <div className="animate-pulse space-y-8">
          {[1, 2, 3].map((i) => (
            <div key={i} className="bg-white rounded-lg shadow-sm p-6">
              <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
              <div className="space-y-3">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                <div className="h-4 bg-gray-200 rounded w-4/6"></div>
              </div>
            </div>
          ))}
        </div>
      ) : error ? (
        <div className="text-red-500 p-4 bg-red-50 rounded-lg">
          <p>Error loading admissions data: {error}</p>
          <p className="text-sm mt-2">Please try refreshing the page.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {admissions.map((program) => (
            <div
              key={program.id}
              id={`program-${program.id}`}
              className="bg-white rounded-lg shadow-sm p-6 scroll-mt-[100px]"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                {program.Title}
              </h2>
              {renderContent(program.description)}
            </div>
          ))}
        </div>
      )}

      {/* Back to Top Button */}
      <div className="text-center mt-10">
        <Link
          to="admissions-top"
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
};

export default Admissions; 