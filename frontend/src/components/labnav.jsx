import React from 'react';
import { NavLink } from 'react-router-dom';

function LabSubNavbar() {
  const navLinkStyle = ({ isActive }) =>
    isActive
      ? 'text-[#9F00FF] px-3 py-1 rounded-md font-semibold transition-all'
      : 'text-white  px-3 py-1 rounded-md transition-all';

  return (
    <div className="bg-slate-800 border-b border-slate-700 px-2 py-3 flex flex-wrap gap-1 shadow">
      <NavLink to="/Labs/cse" className={navLinkStyle} title="Computer Science and Engineering" >CSE</NavLink>
      <NavLink to="/Labs/biosciences" className={navLinkStyle} title="Bioscience and Bioengineering">Biosciences</NavLink>
      <NavLink to="/Labs/humanities" className={navLinkStyle} title="Humanities, Economics, Arts and Rural Technologies">Humanities</NavLink>
      <NavLink to="/Labs/mechanical" className={navLinkStyle} title="Mechanical, Materials and Aerospace Engineering">MMAE</NavLink>
      <NavLink to="/Labs/chemistry" className={navLinkStyle} title="Chemistry">Chemistry</NavLink>
      <NavLink to="/Labs/chemicaleng" className={navLinkStyle} title="Chemical Engineering">Chemical Engineering</NavLink>
      <NavLink to="/Labs/physics" className={navLinkStyle} title="Physics">Physics</NavLink>
      <NavLink to="/Labs/eece" className={navLinkStyle} title="Electrical, Electronics and Communication Engineering">EECE</NavLink>
      <NavLink to="/Labs/civil" className={navLinkStyle} title="Civil & Infrastructure Engineering">Civil</NavLink>
      <NavLink to="/Labs/mathematics" className={navLinkStyle} title="Mathematics">Mathematics</NavLink>
    </div>
  );
}

export default LabSubNavbar;
