import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
import {
  Typography,
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

import './searchresults.css'

export default function Sponsored() {
    const [doc, setdoc] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [search,setSearch]=useState('')
    const [sortOrder,setSortOrder]=useState(' ')
    const [sortedDoc,setsortedDoc]=useState('')
    const [filteredDoc,setfilteredDoc]=useState('')

    const CONSULTANCY_TOKEN = "2e02b4d1a89d345802d5d8888d572e9ea4869e50b06bf4c30dd8cfe486fca446ebfe837b4a71d25b32557c538106df56b2724726218d746fc4db069cacb4e4c59c1dd7a54ac617facd1b7cad6087f0ff833683071f64dfb0fe65d1950190135ec06d2dea9664df3fe9514e1e50cd663bd40a1fd2add2e84ff65884e5c2313687"
    const STRAPI_API_TOKEN = CONSULTANCY_TOKEN
    const STRAPI_API_URL = 'https://rnd.iitdh.ac.in/strapi/api/Consultancyprojects?pagination[pageSize]=100';

    useEffect(() => {
        const fetchData = async () => {
            try {
                if (!STRAPI_API_TOKEN) {
                    throw new Error("Strapi API Token is not defined.");
                }
                console.log("making request to Strapi API with token")

                const response = await fetch(STRAPI_API_URL, {
                    method: 'GET',
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${STRAPI_API_TOKEN}`,
                    },
                });

                if (!response.ok) {
                    const errorBody = await response.json().catch(() => ({}));
                    throw new Error(`HTTP error! Status: ${response.status} - ${errorBody.error?.message || response.statusText}`);
                }

                const jsonData = await response.json();

                if (!jsonData || !Array.isArray(jsonData.data)) {
                    throw new Error("Invalid data format received from API. Expected 'data' array.");
                }
                setdoc(jsonData.data);

            } catch (err) {
                console.error("Failed to fetch documents:", err);
                setError(err);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [STRAPI_API_TOKEN]);
    



    useEffect(()=>{
       const filtered = doc.filter(item =>
        [
    item.s_no,
    item.Titleofproject,
    item.PrincipalInvestigator,
    item.company,
    item.sanctiondate,
    item.duration,
    item.Costofproject
]       
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase())
      );
      setfilteredDoc(filtered)
    console.log(filtered)},[search,doc])
    
    
    
    useEffect(()=>{
    const sorted = [...filteredDoc].sort((a, b) => {
      const dateA = parseDateDMY(a.sanctiondate);
      const dateB = parseDateDMY(b.sanctiondate);
    
      const isValidA = dateA instanceof Date && !isNaN(dateA);
      const isValidB = dateB instanceof Date && !isNaN(dateB);
    
      
      if (!isValidA && isValidB) return 1;
      if (isValidA && !isValidB) return -1;
      if (!isValidA && !isValidB) return 1; 
    
      
      return sortOrder === "asc"
        ? dateA - dateB
        : dateB - dateA;
    });
    
    
        setsortedDoc(sorted);
      }, [sortOrder, filteredDoc]);
    
    function parseDateDMY(dateStr) {
      if (!dateStr || dateStr.toLowerCase() === 'n/a') return null;
    
      
      const parts = dateStr.split(/[-.]/);  
    
      if (parts.length !== 3) return null;
    
      const day = parseInt(parts[0], 10);
      const month = parseInt(parts[1], 10) - 1;
      const year = parseInt(parts[2], 10);
    
      const date = new Date(year, month, day);
      return isNaN(date.getTime()) ? null : date;
    }


    if (loading) {
        return (
            <PageSkeleton />
        );
    }

    if (error) {
        return (
            <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800 flex flex-col justify-center items-center text-red-600">
                <p className="text-xl font-semibold">Error: {error.message}</p>
                <p className="text-sm mt-2 text-center">Please ensure your Strapi server is running, your API token is correct, and network is available.</p>
            </div>
        );
    }

    return (

         <Box sx={{ maxWidth: "95%", mx: "auto", p: 2 }}>
              <Typography variant="h5" fontWeight="bold" mb={3} align="center">
                Consultancy Projects
              </Typography>
        
            <div className="bar">
              <TextField
                label="Search Consultancy Projects"
                variant="outlined"
                size="small"
                className='searchfield'
                value={search}
                onChange={e => setSearch(e.target.value)}
                sx={{ mb: 2 }}
              />
         
              <FormControl className='formcontrol'  size="small" sx={{ mb: 3 }}>
                <InputLabel id="sort-by-label">Sort by date</InputLabel>
                <Select
                  labelId="sort-by-label"
                  id="sort-by"
                  value={sortOrder}
                  label="Sort by Sanction Date"
                  onChange={(e) => setSortOrder(e.target.value)}
                >
                  <MenuItem value="asc">Oldest to Newest</MenuItem>
                  <MenuItem value="desc">Newest to Oldest</MenuItem>
                </Select>
              </FormControl>
            </div>
              
        <div  id="research-and-documents-table">
            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-purple-800">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Serial No
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Title of Project
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Principal Investigator
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Industry
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Sanction Date
                            </th>

                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Duration
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Cost of Project
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {sortedDoc.map((item) => (
                            <tr key={item.id}>
                                <td className="px-3 py-4 whitespace-normal text-sm font-medium text-gray-900">
                                    {item.s_no}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm font-medium text-gray-900">
                                    {item.Titleofproject}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.PrincipalInvestigator}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.company}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.sanctiondate}
                                </td>

                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.duration}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.Costofproject}
                                </td>

                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Back to Top Button */}
            <div className="cursor-pointer text-center mt-10">
                <Link
                    to="consultancy-top"
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
        </Box>
    );
}