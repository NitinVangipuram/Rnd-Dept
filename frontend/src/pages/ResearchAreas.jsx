import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ResearchAreasTable = () => {
  const [data, setData] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      const cached = localStorage.getItem('research_cache');
      const cachedTime = localStorage.getItem('research_cache_time');
      const now = Date.now();

      if (cached && cachedTime && now - cachedTime < 5 * 60 * 1000) {
        setData(JSON.parse(cached));
      } else {
        try {
          const response = await axios.get('https://rnd.iitdh.ac.in/strapi/api/research-areas?populate=*');
          const result = response.data?.data || [];
          setData(result);
          localStorage.setItem('research_cache', JSON.stringify(result));
          localStorage.setItem('research_cache_time', now.toString());
        } catch (error) {
          console.error('Error fetching research areas:', error);
        }
      }
    };

    fetchData();
  }, []);

  const filteredData = data.filter(item =>
    item.ProfName?.toLowerCase().includes(search.toLowerCase()) ||
    item.Department?.toLowerCase().includes(search.toLowerCase()) ||
    item.AreaofInterest?.some(area => area.Area?.toLowerCase().includes(search.toLowerCase()))
  );

  return (
    <div className="p-4 max-w-screen-lg mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-center mb-4">RESEARCH AREAS</h2>
      <input
        type="text"
        className="border rounded w-full p-2 mb-4 text-sm sm:text-base"
        placeholder="Search by Name/Department/Research Areas..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Make table horizontally scrollable on small screens */}
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
            {filteredData.map((prof) => (
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
            ))}
            {filteredData.length === 0 && (
              <tr>
                <td colSpan="3" className="text-center p-4 text-gray-500 text-sm sm:text-base">
                  No matching research areas found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ResearchAreasTable;
