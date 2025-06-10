import React from 'react';
import { useSearchParams } from 'react-router-dom';
import searchData from '../searchData.jsx';
import './searchresults.css'; // Keep this if you already use it elsewhere

export default function Searchresults() {
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q")?.toLowerCase() || "";

  const filteredResults = searchData.filter(item =>
    item.content.toLowerCase().includes(query)
  );

  const groupedResults = filteredResults.reduce((acc, item) => {
    if (!acc[item.page]) {
      acc[item.page] = [];
    }
    acc[item.page].push(item);
    return acc;
  }, {});

  return (
    <div className='searchresults'>
      <h1 className="text-xl font-semibold mb-4">Search query: {query}</h1>
      {filteredResults.length > 0 ? (
        Object.entries(groupedResults).map(([page, items]) => (
          <div key={page} className="mb-10">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">{page}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {items.map((item, index) => (
                <div key={index} className="border border-gray-300 rounded-xl p-4 shadow hover:shadow-md transition-shadow bg-white">
                  <a href={item.link} className="!text-purple-600 font-medium hover:underline">
                    {item.title}
                  </a>
                  <p className="text-sm text-gray-700 mt-1">{item.displaycontent}</p>
                </div>
              ))}
            </div>
          </div>
        ))
      ) : (
        <p className="text-gray-600">No matching results found.</p>
      )}
    </div>
  );
}
