<<<<<<< HEAD
import React from 'react';
import './documents.css'; 
import { Link } from 'react-scroll';

export default function Documents() {
  return (
    <div id="document-top" className="omanddoc p-6">
      <div className='om'>
        {/* Placeholder for "Office Statistics" heading */}
        <h1 className='text-[black] text-3xl font-bold mb-8'>OM and Documents</h1>

        <h2 className='text-[black] text-2xl font-semibold mb-4'>OM for Engagement of Manpower:</h2>
        <hr className="border border-[#D8BFD8] mb-6" />
        <ul className="list-none space-y-3 mb-8">
          <li>
            <a href="https://intranet.iitdh.ac.in:444/pdf/OM_JRF_SRF_RA_2023.pdf" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]  text-lg">JRF/SRF/RA Positions</a>
          </li>
          <li>
            <a href="https://intranet.iitdh.ac.in:444/pdf/OM-3%20R&D%20Manpower%20Others-modified%2028.10.2021.pdf" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]  text-lg">Other than JRF/SRF/RA Positions</a>
          </li>
          <li>
            <a href="https://intranet.iitdh.ac.in:444/pdf/OM%20for%20Revised%20emoluments%20for%20Manpower%20recruitemnt%20(Other%20than%20JRF%20SRF%20RA)_updated.pdf" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black] text-lg">Other than JRF/SRF/RA Positions for ANRF Sponsored Projects</a>
          </li>
        </ul>

        <h2 className='text-[black] text-2xl font-semibold mb-4'>Circulars and Office Orders:</h2>
        <hr className="border border-[#D8BFD8] mb-6" />
        {/* Changed to ol for numbered list and applied purple text */}
        <ol className="list-decimal list-inside space-y-3 mb-8 text-[#8B008B] text-lg">
          <li>
            <a href="https://drive.google.com/file/d/1lpmr_Rzlw3G3c9fRGCsh-P38IYZrxx6R/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">Special provisions in amended GFRs 2017 - Enhancement in ceilings for procurement</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1NeW3dvSkfXmQQBIkUToG6ARn96KSxSqi/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">Committee for allocation of Research Labs in Permanent Campus</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1hwbDjShxpCkOiqRZIQyfSR_oOHCz1xB_/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">Relaxation from obtaining prior approval for procurement of consumable, expenditures on contingency of sponsored projects</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1pRBiFCStqQm6NsmFAsvWPBFYkKfTL3F6/view?usp=sharing" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">PPT for Generation of GeM Non availability report</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1bvhOGo4oGfvv_LosHwc_3wWNFiJTv4Ek/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">General Financial Rules 2017 with latest updates till 31.07.2024</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1j1Yu8og4TCOz1NM24R9iQAcjhYEKWoDi/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">TA/DA rates for students and project staffs</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1BnoKynjZdLozy0PgEOXZKgJP2fdilQ1L/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">Revision of Intellectual Property Rights (IPR) Policy guidelines</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1b3oSH_oB2Rq5cPImSgYUv4wIIlHSjUu0/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">Circulation of R&D Procurement Referencer</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1pLWRgZlYgxogXy5195trxqTB-oucdSui/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">Streamlining of Manpower Recruitment Process for Sponsored Research and Consultancy Projects</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/10LYl1TNcoHiesF0iTLDkou-ZjNRJdKQF/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">Provision for Temporary Loan for Payment of Project Staff Salaries during Fund Release Delays</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1LZjf4Isc0yWD4fLQUgGEQGAigHlfJBOs/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">Implementation of Distribution of charges collected from testing services by SCIF/DCIF</a>
          </li>
          <li>
            <a href="#" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">Formation of Department level Standing committees (DLSC) for Authorization of Proprietary Article Certificate (PAC)</a>
          </li>
          <li>
            <a href="https://drive.google.com/file/d/1-kEHmWqM-Cdn56EkwPgj1ZkQMdaFbj3w/view?usp=drive_link" target='_blank' className="text-[#8B008B] hover:underline hover:text-[black]">Implementation of revised Overhead charges for consultancy projects</a>
          </li>
        </ol>
      </div>
      {/* Back to Top Button */}
      <div className="cursor-pointer text-center mt-10">
        <Link
          to="document-top"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Back to Top
        </Link>
      </div>
=======
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
>>>>>>> origin/main
    </div>
  );
}