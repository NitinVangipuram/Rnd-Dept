import React, { useState, useEffect } from 'react';
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';
import {
  Typography,
  TextField,
  Box
} from "@mui/material";

const CACHE_KEY = 'cachedOpportunities';
const CACHE_TIMESTAMP_KEY = 'opportunitiesCacheTimestamp';
const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes

export default function Sponsored() {
  const [doc, setdoc] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchDoc = async () => {
      try {
        setLoading(true);
        const res = await fetch(
          'https://opensheet.vercel.app/1cVHmxJMGNPD_yGoQ4-_IASm1NYRfW1jpnozaR-PlB2o/Sheet1'
        );
        const data = await res.json();

        localStorage.setItem(CACHE_KEY, JSON.stringify(data));
        localStorage.setItem(CACHE_TIMESTAMP_KEY, Date.now().toString());

        setdoc(data);
      } catch (err) {
        console.error('Error fetching data:', err);
        setError('Could not load sponsored projects.');
      } finally {
        setLoading(false);
      }
    };

    const cachedData = localStorage.getItem(CACHE_KEY);
    const cacheTimestamp = localStorage.getItem(CACHE_TIMESTAMP_KEY);
    const now = Date.now();

    if (
      cachedData &&
      cacheTimestamp &&
      now - parseInt(cacheTimestamp, 10) < CACHE_DURATION
    ) {
      setdoc(JSON.parse(cachedData));
      setLoading(false);
    } else {
      fetchDoc();
    }
  }, []);

  // Apply search filter
  const filteredDoc = doc.filter(item =>
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

  if (loading) {
    return <PageSkeleton />;
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800 flex flex-col justify-center items-center text-red-600">
        <p className="text-xl font-semibold">Error: {error}</p>
        <p className="text-sm mt-2 text-center">Please check your internet connection or data source.</p>
      </div>
    );
  }

  return (
    <Box sx={{ maxWidth: "95%", mx: "auto", p: 2 }}>
      <Typography variant="h5" fontWeight="bold" mb={3} align="center">
        Sponsored Projects
      </Typography>
      <TextField
        fullWidth
        label="Search Sponsored Projects"
        variant="outlined"
        size="small"
        value={search}
        onChange={e => setSearch(e.target.value)}
        sx={{ mb: 3 }}
      />

      <div className="p-4" id="research-and-documents-table">
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-purple-800">
              <tr>
                <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">Serial No</th>
                <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">Title</th>
                <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">Investigator(s)</th>
                <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">Sponsoring Agency</th>
                <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">Value (₹1,00,000)</th>
                <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">Sanction Date</th>
                <th className="px-2 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">Duration (years)</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {filteredDoc.length === 0 ? (
                <tr>
                  <td colSpan="8" className="px-4 py-6 text-center text-gray-500">
                    No results found.
                  </td>
                </tr>
              ) : (
                filteredDoc.map((item, index) => (
                  <tr key={index}>
                    <td className="px-2 py-2 text-sm text-gray-900">{item["Serial no."]}</td>
                    <td className="px-2 py-2 text-sm text-gray-900">{item["Title"]}</td>
                    <td className="px-2 py-2 text-sm text-gray-700 whitespace-pre-line">
                      {item["Investigator(s)"]}
                      {item["Co-PI"]?.trim() && (
                        <>
                          {"\n"}<span className="text-gray-700">Co-PI:{'\n'} {item["Co-PI"]}</span>
                        </>
                      )}
                    </td>
                    <td className="px-2 py-2 text-sm text-gray-700">{item["Sponsoring Agency-Scheme"]}</td>
                    <td className="px-2 py-2 text-sm text-gray-700">{item["Value (₹1,00,000)"]}</td>
                    <td className="px-2 py-2 text-sm text-gray-700">{item["Sanction date"]}</td>
                    <td className="px-2 py-2 text-sm text-gray-700">{item["Duration (years)"]}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </Box>
  );
}
