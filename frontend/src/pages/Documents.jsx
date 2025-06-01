import React, { useState } from 'react';
import './documents.css';
import { useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
export default function Documents() {

  const [doc,setdoc]=useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const STRAPI_API_TOKEN = "1e38760ea6905d7dbd0b1f0a0a9f667c08561eea24d192eb828e8f08be48ef3a4132cab4e72a451e404907eed3f3a00473121ac0d3f5187e247723e603fb80572cdeb895b0c81541af1ab23e332b567bcab6f530ea0b04985ce019b001daf5032a71ba4c16de0c7be6ed8319b1410046942ce04b14637bfa982a853e32e3dc63"
    const STRAPI_API_URL = 'http://localhost:1337/api/docs?pagination[pageSize]=100'; 
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          if (!STRAPI_API_TOKEN) {
            throw new Error("Strapi API Token is not defined.");
          }
  
          const response = await fetch(STRAPI_API_URL, {
            method: 'GET',
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
            },
          });
  
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
  
          const jsonData = await response.json();
  
          if (!jsonData || !Array.isArray(jsonData.data)) {
            throw new Error("Invalid data format received from API. Expected 'data' array.");
          }
  
        
          const transformedData = jsonData.data.map((item) => {
            return {
              id: item.id,
              category: item.category, 
              name: item.name,   
              url: item.url,     
            };
          });
  
          setdoc(transformedData);
        } catch (err) {
          console.error("Failed to fetch documents:", err);
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, [STRAPI_API_TOKEN]);
  

    if (loading) {
    return (
      <PageSkeleton/>
    );
  }
  
  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800 flex flex-col justify-center items-center text-red-600">
        <p className="text-xl font-semibold">Error: {error.message}</p>
        <p className="text-sm mt-2">Please ensure your Strapi server is running, your API token is correct, and network is available.</p>
      </div>
    );
  }

  return (
    <div className="omanddoc p-6" id="documents">
      {doc.map((ele) => ( 
  <div key={ele.id} className="mb-8">
    <h1 className='text-[black] text-2xl font-bold mb-4'>{ele.category}</h1>
    <hr className="border border-[#D8BFD8] mb-4" />
    <ol className="space-y-2">
      {/* Iterate over the 'name' and 'url' arrays */}
      {ele.name && ele.name.map((nameItem, index) => (
        <li key={`${ele.id}-${index}`}> {/* Unique key for each list item */}
          {/* Check if a corresponding URL exists at the same index */}
          {ele.url && ele.url[index] ? (
            <a
              href={ele.url[index]}
              target='_blank'
              rel='noopener noreferrer'
              className="text-[#8B008B] hover:underline hover:text-[black] text-lg"
            >
              {nameItem}
            </a>
          ) : (
            
            <span className="text-[black] text-lg">{nameItem}</span>
          )}
        </li>
      ))}
    </ol>
  </div>
))}
    </div>
  );
}