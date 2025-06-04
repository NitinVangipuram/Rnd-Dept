import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResearchAreas = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const itemsPerPage = 100;

  const fetchData = async (page) => {
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
    <div className="p-4 max-w-screen-lg mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">RESEARCH AREAS</h2>
      <input
        type="text"
        className="border rounded w-full p-2 mb-4 text-sm sm:text-base"
        placeholder="Search by Name/Department/Research Areas..."
        value={search}
        onChange={(e) => {
          setSearch(e.target.value);
          setCurrentPage(1); // reset to page 1 on new search
        }}
      />

      <div className="overflow-x-auto">
        <table className="min-w-full border-collapse">
          <thead>
            <tr className="bg-purple-700 text-white text-sm sm:text-base">
              <th className="border p-2 text-left">Name</th>
              <th className="border p-2 text-left">Department</th>
              <th className="border p-2 text-left">Areas of Interest</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((prof) => (
                <tr key={prof.id} className="bg-white hover:bg-gray-50 text-sm sm:text-base">
                  <td className="border p-2">{prof.ProfName}</td>
                  <td className="border p-2">{prof.Department}</td>
                  <td className="border p-2">
                    <ul className="list-disc ml-4 space-y-0.5">
                      {prof.AreaofInterest.map((area) => (
                        <li key={area.id}>{area.Area}</li>
                      ))}
                    </ul>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500 text-sm sm:text-base">
                  No matching research areas found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination Controls */}
      {totalPages > 1 && (
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
