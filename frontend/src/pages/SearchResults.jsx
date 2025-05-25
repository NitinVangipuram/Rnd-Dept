import React from 'react';
import { useLocation, Link } from 'react-router-dom'; // ⬅️ import Link
import searchData from '../searchData'; // adjust if needed

function SearchResults() {
  const location = useLocation();
  const query = new URLSearchParams(location.search).get('q');

  const results = searchData.filter(item =>
    item.content.toLowerCase().includes(query.toLowerCase()) || 
    item.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-semibold mb-4">Search Results for: "{query}"</h1>
      
      {results.length > 0 ? (
        <ul>
          {results.map((result, index) => (
            <li key={index} className="mb-4">
              <h2 className="font-semibold text-lg">
                {/* ✅ Use Link instead of <a> */}
                <Link to={result.link} className="text-blue-500 hover:underline">
                  {result.title}
                </Link>
              </h2>
              <p>{result.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No results found for "{query}".</p>
      )}
    </div>
  );
}

export default SearchResults;
