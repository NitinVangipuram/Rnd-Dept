import React, { useEffect, useState } from 'react';
import './FacultyList.css';

function FacultyList() {
  const [facultyData, setFacultyData] = useState([]);

  useEffect(() => {
    // Import the JSON file dynamically
    import('../data/faculty.json')
      .then((module) => setFacultyData(module.default))
      .catch((error) => console.error('Error loading faculty data:', error));
  }, []);

  return (
    <aside className="faculty-sidebar">
      <h3>Faculty</h3>
      {facultyData.length === 0 ? (
        <p>Loading faculty list...</p>
      ) : (
        <ul>
          {facultyData.map((faculty) => (
            <li key={faculty.id}>
              <a href={`#faculty-${faculty.id}`} className="faculty-link">
                {faculty.name}
              </a>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}

export default FacultyList;