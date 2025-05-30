import React from 'react'
import { useSearchParams } from 'react-router-dom';
import searchData from '../searchData.jsx'; // Adjust the path as necessary
import './searchresults.css'

export default function Searchresults() {

    const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  const filteredResults = searchData.filter(item =>
    item.title.toLowerCase().includes(query)
  );

  return (
    <div className='searchresults'>
        <h1>Search query:{query}</h1>
        <br />
        {filteredResults.length>0?(<ul>
          {filteredResults.map((item, index) => (
            <li key={index}>
              <a href={item.link}>{item.title}</a>
              <p>{item.content}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No matching titles found.</p>
      )}
      
    </div>
  )
}
