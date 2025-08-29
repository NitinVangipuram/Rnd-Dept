import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
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

export default function Sgnf() {
  const [doc, setDoc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('')
  const [sortOrder, setSortOrder] = useState(' ')
  const [sortedDoc, setsortedDoc] = useState('')
  const [filteredDoc, setfilteredDoc] = useState('')
  const [entries, setEntries] = useState('')
  const [value, setValue] = useState('')



  const SHEET_API_URL = "https://opensheet.elk.sh/1JQ_9Xh9aPNnklv7_iP0ihVUztYd4Rs2ZnumybaJrf7c/Sheet1";



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


  useEffect(() => {
    // console.log(doc)
    let sum = 0;
    let count = 0;

    doc.map((item) => {

      const val = parseFloat(item["Value (₹1,00,000)"]) * 100000;
      if (val != NaN)
        sum += val

      count++;
    })

    setEntries(count)
    setValue(sum)
  }, [doc])


  useEffect(() => {
    const filtered = doc.filter(item =>
      [

        item["Name "],
        item["Project Title"],
        item["Value (₹1,00,000)"],
        item["Sanction date"],
        item["Duration (years)"]
      ]
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
    );
    setfilteredDoc(filtered)
    // console.log(filtered)
  }, [search, doc])



  useEffect(() => {
    const sorted = [...filteredDoc].sort((a, b) => {
      const dateA = parseDateYMD(a["Sanction date"]);
      const dateB = parseDateYMD(b["Sanction date"]);

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


  function parseDateYMD(dateStr) {
    if (!dateStr || dateStr.toLowerCase() === 'n/a') return null;

    const parts = dateStr.split(/[-.]/);

    if (parts.length !== 3) return null;


    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10) - 1; // Month is 0-based in JS Date
    const day = parseInt(parts[2], 10);

    const date = new Date(year, month, day);
    return isNaN(date.getTime()) ? null : date;
  }

  function parseDateMDY(dateStr) {
    if (!dateStr || dateStr.toLowerCase() === 'n/a') return null;

    const parts = dateStr.split(/[-.]/);

    if (parts.length !== 3) return null;

    const month = parseInt(parts[0], 10) - 1; // Month first
    const day = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);

    const date = new Date(year, month, day);
    return isNaN(date.getTime()) ? null : date;
  }


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
      <Typography id="consultancy-top" variant="h5" fontWeight="bold" mb={3} align="center">
        Seed Grant and Networking Fund
      </Typography>

      <ul className="project-summary">
        <li><b>Total Projects:</b>{entries}</li>
        <li><b>Total Value of Projects:</b>₹{value.toLocaleString('en-IN')} </li>
      </ul>

      <div className="bar">
        <TextField
          label="Search "
          variant="outlined"
          size="small"
          className='searchfield'
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ mb: 2 }}
        />

        <FormControl className='formcontrol' size="small" sx={{ mb: 3 }}>
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

      <div id="research-and-documents-table">
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-purple-800">
              <tr>
                <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                  Name
                </th>
                <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                  Project Title
                </th>
                <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                  Value (₹1,00,000)
                </th>
                <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                  Sanction Date
                </th>

                <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                  Duration (years)
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {sortedDoc.map((item, index) => (
                <tr key={index}>
                  <td className="px-3 py-4 whitespace-normal text-sm font-medium text-gray-900">
                    {item["Name "]}
                  </td>
                  <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                    {item["Project Title"]}
                  </td>
                  <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                    {(parseFloat(item["Value (₹1,00,000)"]) * 1).toLocaleString("en-IN")}
                  </td>
                  <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                    {item["Sanction date"]}
                  </td>
                  <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                    {item["Duration (years)"]}
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
            className="fixed bottom-6 right-6 bg-indigo-600 text-white p-3 rounded-full shadow-lg hover:bg-indigo-700 transition duration-300 cursor-pointer z-50"
          >
            ↑
          </Link>
        </div>
      </div>
    </Box>
  );
}
