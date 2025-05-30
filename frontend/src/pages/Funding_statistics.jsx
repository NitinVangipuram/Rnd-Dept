import React from 'react';
import { Link } from 'react-scroll';

const fundingAgencies = [
  { name: 'Bhabha Atomic Research Centre (BARC)', link: 'http://www.barc.gov.in/' },
  { name: 'Bill & Melinda Gates Foundation', link: 'https://www.gatesfoundation.org/' },
  { name: 'Board of Research & Nuclear Sciences (BRNS)', link: 'https://brns.res.in/' },
  { name: 'Central Pollution Control Board (CPCB)', link: 'http://cpcb.nic.in/' },
  { name: 'Indo French Centre for Advanced Research (IFCPAR)', link: 'http://www.cefipra.org/' },
  { name: 'Council of Science & Technology (CST)', link: 'http://www.dstup.in/CST' },
  { name: 'Council of Scientific & Industrial Research (CSIR)', link: 'http://www.csir.res.in/' },
  { name: 'Defence Research & Development Organisation (DRDO)', link: 'https://www.drdo.gov.in/' },
  { name: 'Department of Atomic Energy (DAE)', link: 'http://dae.gov.in/' },
  { name: 'Department of Biotechnology (DBT)', link: 'http://www.dbtindia.gov.in/' },
  { name: 'Indira Gandhi Center for Advanced Research (IGCAR)', link: 'http://www.igcar.ernet.in/' },
  { name: 'Department of Science & Technology (DST)', link: 'http://www.dst.gov.in/' },
  { name: 'EURAXESS India', link: 'https://euraxess.ec.europa.eu/worldwide/india' },
  { name: 'Gas Authority of India Ltd (GAIL)', link: 'http://www.gailonline.com' },
  { name: 'Hindustan Shipyard Ltd.', link: 'http://www.hslvizag.in/' },
  { name: 'Science and Engineering Research Board (SERB)', link: 'http://www.serb.gov.in/home.php' },
  { name: 'Indian Institute of Technology Bombay', link: 'http://www.iitb.ac.in/' },
  { name: 'Indian Institute of Tropical Meteorology (IITM)', link: 'https://www.tropmet.res.in/' },
];

export default function FundingTable() {
  return (
    <div id= "funding-top" className="min-h-screen bg-gray-100 py-12 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto bg-white p-6 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold text-center mb-6 text-gray-800">Funding Agencies</h1>

        <div className="overflow-x-auto">
          <table className="min-w-full border border-gray-300">
            <thead className="bg-gray-200">
              <tr>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-300">S.No</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-300">Agency</th>
                <th className="text-left py-3 px-4 font-semibold text-gray-700 border border-gray-300">Link</th>
              </tr>
            </thead>
            <tbody>
              {fundingAgencies.map((agency, index) => (
                <tr key={index} className="border-t border-gray-200">
                  <td className="py-3 px-4 border border-gray-300 text-gray-800">{index + 1}</td>
                  <td className="py-3 px-4 border border-gray-300 text-gray-800">{agency.name}</td>
                  <td className="py-3 px-4 border border-gray-300">
                    <a
                      href={agency.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:underline"
                    >
                      Visit
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
            {/* Back to Top Button */}
                  <div className="cursor-pointer text-center mt-10">
                    <Link
                      to="funding-top"
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
  );
}
