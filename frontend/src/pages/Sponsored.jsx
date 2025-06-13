import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
import './searchresults.css'
import {
  Typography,
  TextField,
  Box,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";

export default function Sponsored() {
  const [doc, setDoc] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sortOrder, setSortOrder] = useState(' ');
  const [filteredDoc,setfilteredDoc]=useState(' ')
  const [sortedDoc,setSortedDoc]=useState(' ')

  const SHEET_API_URL = "https://opensheet.elk.sh/1cVHmxJMGNPD_yGoQ4-_IASm1NYRfW1jpnozaR-PlB2o/Sheet1";

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(SHEET_API_URL);
        const jsonData = await response.json();
        setDoc(jsonData);
      } catch (err) {
        console.error("Failed to fetch data from Google Sheet:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(()=>{
   const filtered = doc.filter(item =>
    [
      item["Serial no."],
      item["Title"],
      item["Investigator(s)"],
      item["Co-PI"],
      item["Sponsoring Agency-Scheme"],
      item["Value (₹1,00,000)"],
      item["Sanction date"],
      item["Duration (years)"]
    ]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );
  setfilteredDoc(filtered)},[search,doc])



useEffect(()=>{
const sorted = [...filteredDoc].sort((a, b) => {
  const dateA = parseDateDMY(a["Sanction date"]);
  const dateB = parseDateDMY(b["Sanction date"]);

  const isValidA = dateA instanceof Date && !isNaN(dateA);
  const isValidB = dateB instanceof Date && !isNaN(dateB);

  
  if (!isValidA && isValidB) return 1;
  if (isValidA && !isValidB) return -1;
  if (!isValidA && !isValidB) return 1; 

  
  return sortOrder === "asc"
    ? dateA - dateB
    : dateB - dateA;
});


    setSortedDoc(sorted);
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
    return <PageSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 text-red-600 text-center">
        <p className="text-xl font-semibold">Error: {error.message}</p>
        <p className="text-sm mt-2">Please check your internet or sheet sharing settings.</p>
      </div>
    );
  }

  return (
    <Box sx={{ maxWidth: "95%", mx: "auto", p: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={3} align="center">
        Sponsored Projects
      </Typography>

    <div className="bar">
      <TextField
        label="Search Sponsored Projects"
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
          placeholder='sort by sanctiondate'
          value={sortOrder}
        
          label="Sort by Sanction Date"
          onChange={(e) => setSortOrder(e.target.value)}
        >
    
          <MenuItem value="asc">Oldest to Newest</MenuItem>
          <MenuItem value="desc">Newest to Oldest</MenuItem>
        </Select>
      </FormControl>
    </div>
      

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-purple-800 text-white text-sm font-medium">
            <tr>
              <th className="px-2 py-2 text-left">Serial No</th>
              <th className="px-2 py-2 text-left">Title</th>
              <th className="px-2 py-2 text-left">Investigator(s)</th>
              <th className="px-2 py-2 text-left">Co-PI</th>
              <th className="px-2 py-2 text-left">Agency Scheme</th>
              <th className="px-2 py-2 text-left">Value (₹ Lakhs)</th>
              <th className="px-2 py-2 text-left">Sanction Date</th>
              <th className="px-2 py-2 text-left">Duration (Years)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200 text-sm">
            {sortedDoc.map((item, index) => (
              <tr key={index}>
                <td className="px-2 py-2">{item["Serial no."]}</td>
                <td className="px-2 py-2">{item["Title"]}</td>
                <td className="px-2 py-2">{item["Investigator(s)"]}</td>
                <td className="px-2 py-2">{item["Co-PI"]}</td>
                <td className="px-2 py-2">{item["Sponsoring Agency-Scheme"]}</td>
                <td className="px-2 py-2">{item["Value (₹1,00,000)"]}</td>
                <td className="px-2 py-2">{item["Sanction date"] || "N/A"}</td>
                <td className="px-2 py-2">{item["Duration (years)"] || "N/A"}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Box>
  );
}
