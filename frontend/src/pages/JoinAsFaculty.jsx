import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';

// Helper function to render content
const renderContent = (content) => {
  if (!content) return null;

  return content.map((item, index) => {
    if (item.type === 'paragraph') {
      // Check if this paragraph contains tabular data
      const text = item.children[0].text;
      if (text.includes('\t')) {
        const rows = text.split('\n').filter(row => row.trim());
        if (rows.length > 0 && rows[0].includes('\t')) {
          return (
            <div key={index} className="overflow-x-auto mb-4">
              <table className="min-w-full text-sm border-collapse">
                <tbody>
                  {rows.map((row, rowIndex) => {
                    const cells = row.split('\t');
                    return (
                      <tr key={rowIndex} className={rowIndex === 0 ? 'bg-gray-100 font-medium' : 'border-b hover:bg-gray-50'}>
                        {cells.map((cell, cellIndex) => (
                          <td 
                            key={cellIndex} 
                            className={`px-6 py-3 text-left ${
                              cellIndex === 0 ? 'w-1/3' : 
                              cellIndex === 1 ? 'w-1/4' : 'w-1/3'
                            }`}
                          >
                            {cell}
                          </td>
                        ))}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          );
        }
      }

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
              {listItem.children.map((child, childIndex) => {
                if (child.type === 'link') {
                  return (
                    <a
                      key={childIndex}
                      href={child.url}
                      className="text-indigo-600 hover:text-indigo-800"
                    >
                      {child.children[0].text}
                    </a>
                  );
                }
                return (
                  <span
                    key={childIndex}
                    className={child.bold ? 'font-bold' : child.italic ? 'italic' : ''}
                  >
                    {child.text}
                  </span>
                );
              })}
            </li>
          ))}
        </ul>
      );
    }
    return null;
  });
};

// JoinAsFaculty Page
const JoinAsFaculty = () => {
  const [facultyInfo, setFacultyInfo] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const response = await fetch("https://cse.iitdh.ac.in/strapi/api/joinasfaculties");
        if (!response.ok) {
          throw new Error('Failed to fetch faculty recruitment data');
        }

        const json = await response.json();

        // Cache the data
        localStorage.setItem('cachedFacultyInfo', JSON.stringify(json.data));
        localStorage.setItem('facultyInfoCacheTimestamp', Date.now().toString());

        setFacultyInfo(json.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Check cache first
    const cachedData = localStorage.getItem('cachedFacultyInfo');
    const cacheTimestamp = localStorage.getItem('facultyInfoCacheTimestamp');
    const now = Date.now();

    if (cachedData && cacheTimestamp && (now - parseInt(cacheTimestamp)) < 300000) {
      setFacultyInfo(JSON.parse(cachedData));
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, []);

  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div id="join-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Join as Faculty</h1>
        <p className="text-gray-600">
          Join our dynamic team of educators and researchers at IIT Dharwad's Computer Science Department.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
          {facultyInfo.map((section) => (
            <Link
              key={section.id}
              to={`section-${section.id}`}
              spy={true}
              smooth={true}
              offset={-100}
              duration={500}
              className="cursor-pointer"
            >
              <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition-shadow duration-300 hover:bg-indigo-50 h-full flex flex-col items-center justify-center">
                <div className="text-indigo-600 mb-3 text-3xl">
                  <i className="fas fa-user-tie"></i>
                </div>
                <h3 className="text-lg font-semibold text-gray-800">{section.Title}</h3>
                <p className="text-sm text-gray-600 mt-2">View Details</p>
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Content Sections */}
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
          <p>Error loading faculty recruitment data: {error}</p>
          <p className="text-sm mt-2">Please try refreshing the page.</p>
        </div>
      ) : (
        <div className="space-y-8">
          {facultyInfo.map((section) => (
            <div
              key={section.id}
              id={`section-${section.id}`}
              className="bg-white rounded-lg shadow-sm p-6 scroll-mt-[100px]"
            >
              <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">
                {section.Title}
              </h2>
              {renderContent(section.description)}
            </div>
          ))}
        </div>
      )}

      {/* Back to Top Button */}
      <div className="text-center mt-10">
        <Link
          to="join-top"
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

export default JoinAsFaculty; 