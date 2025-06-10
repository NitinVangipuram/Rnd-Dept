import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Typography,
  TextField,
  Box
} from "@mui/material";
import PageSkeleton from '../components/LoadingSkeleton/PageSkeleton';

const ResearchAreas = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [loading, setLoading] = useState(true);
  const itemsPerPage = 100;

  const fetchData = async (page) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://rnd.iitdh.ac.in/strapi/api/research-areas?populate=*&pagination[page]=${page}&pagination[pageSize]=${itemsPerPage}`
      );

      const result = response.data?.data || [];
      const meta = response.data?.meta?.pagination || {};

      setData(result);
      setTotalPages(meta.pageCount || 1);
    } catch (error) {
      console.error('Error fetching research areas:', error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(currentPage);
  }, [currentPage]);

  const filteredData = data.filter((item) =>
    item.ProfName?.toLowerCase().includes(search.toLowerCase()) ||
    item.Department?.toLowerCase().includes(search.toLowerCase()) ||
    item.AreaofInterest?.some((area) => area.Area?.toLowerCase().includes(search.toLowerCase()))
  );

  const handlePageChange = (page) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="p-4 max-w-screen-xl mx-auto">
      <Box sx={{ maxWidth: "95%", mx: "auto", p: 2 }}>
        <Typography variant="h5" fontWeight="bold" mb={3} align="center">
          Academics and Research Areas
        </Typography>
        <TextField
          fullWidth
          label="Search by Name/ Department/ Research Areas"
          variant="outlined"
          size="small"
          value={search}
          onChange={e => setSearch(e.target.value)}
          sx={{ mb: 3 }}
        />
      </Box>

      <div className="p-4" id="research-areas-table">
        <div className="overflow-x-auto shadow-lg rounded-lg">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-purple-800">
              <tr>
                <th className="px-3 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">Name</th>
                <th className="px-3 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">Department</th>
                <th className="px-3 py-2 text-left text-sm font-medium text-white uppercase tracking-wider">Areas of Interest</th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {loading ? (
                <tr>
                  <td colSpan="3" className="text-center p-6">
                    <PageSkeleton />
                  </td>
                </tr>
              ) : filteredData.length > 0 ? (
                filteredData.map((prof) => (
                  <tr key={prof.id} className="hover:bg-gray-50">
                    <td className="px-3 py-2 text-sm text-gray-900">{prof.ProfName}</td>
                    <td className="px-3 py-2 text-sm text-gray-900">{prof.Department}</td>
                    <td className="px-3 py-2 text-sm text-gray-900">
                      <ul className="list-disc ml-4 space-y-0.5">
                        {prof.AreaofInterest.map((area) => (
                          <li key={area.id}>{area.Area}</li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                ))
              ) : (
                <tr className="bg-gray-50">
                  <td colSpan="3" className="px-4 py-6 text-center text-gray-500 text-sm sm:text-base">
                    No matching research areas found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      {!loading && totalPages > 1 && (
        <div className="flex justify-center items-center mt-4 flex-wrap gap-2 text-sm sm:text-base">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className="cursor-pointer px-3 py-1 rounded border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            Prev
          </button>

          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => handlePageChange(page)}
              className={`cursor-pointer px-3 py-1 rounded border ${
                page === currentPage ? 'bg-purple-600 text-white' : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              {page}
            </button>
          ))}

          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className="cursor-pointer px-3 py-1 rounded border bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default ResearchAreas;
