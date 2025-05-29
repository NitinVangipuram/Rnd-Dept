import React from 'react';
import { Link } from 'react-scroll';

export default function Funding_statistics() {
  const fundingAgencyNames = [
    "Bhabha Atomic Research Centre (BARC)",
    "Bill & Melinda Gates Foundation",
    "Board of Research & Nuclear Sciences (BRNS)",
    "Central Pollution Control Board (CPCB)",
    "Indo French Centre for the Promotion of Advanced Research (IFCPAR)/ Centre Franco Indien Pourla Promotion Le La Recherche Avancee (CEFIIPR)",
    "Council of Science & Technology (CST)",
    "Council of Scientific & Industrial Research (CSIR)",
    "Defence Research & Development Organisation (DRDO)",
    "Department of Atomic Energy (DAE)",
    "Department of Biotechnology (DBT)",
    "Indira Gandhi Center for Advanced Research (IGCAR)",
    "Department of Science & Technology (DST)",
    "EURAXESS India",
    "Gas Authority of India Ltd (GAIL)",
    "Hindustan Shipyard Ltd.",
    "Science and Engineering Research Board (SERB)",
    "Indian Institute of Technology Bombay",
    "Indian Institute of Tropical Meteorology (IITM)",
    "Indo-German Science & Technology Centre",
    "Indo-US Science and Technology Forum (IUSSTF)",
    "International Water Management Institute (IWMI)",
    "Oil & Natural Gas Corporation Ltd (ONGC)",
    "Ministry of Coal & Mines (MoCM)",
    "Ministry of Electronics & Information Technology (MEITY)",
    "Ministry of Earth Sciences (MoES)",
    "Ministry of Education (MoE)",
    "Ministry of Housing and Poverty Alleviation (MHPA)",
    "Indian Council for Social Research (ICSSR)",
    "Indian Council for Medical Research (ICMR)",
    "Ministry of New and Renewable Energy (MNRE)",
    "Ministry of Road Transport & Highway",
    "Ministry of Textiles (MoT)",
    "Ministry of Jal Shakti",
    "Ministry of Defence",
    "Ministry of Environment & Forests (MoEF)",
    "Ministry of Health & Family Welfare",
    "Ministry of Micro, Small and Medium Enterprises",
    "Ministry of Petroleum & Natural Gas",
    "Ministry of Rural Development",
    "Ministry of Urban Development",
    "Ministry of Food Processing Industries (MFPI)",
    "Ministry of Power (MoP)",
    "Ministry of Social Justice & Empowerment (MoSJE)",
    "Department of Ocean Development (DOD)",
    "Department of Scientific and Industrial Research (DSIR)",
    "Department of AYUSH",
    "Department of Chemicals & Petrochemicals, Ministry of Chemicals & Fertilizers",
    "Department of Fertilizers, Ministry of Chemicals & Fertilizers",
    "Naval Research Board (NRB)",
    "National Thermal Power Corporation(NTPC)",
    "National Aerospace Laboratory (NAL)",
    "U.P. Small Industry Development Corporation (UPSIDC)",
    "University Grants Commission (UGC)",
    "Wellcome Trust DBT",
    "Atomic Energy Regulatory Board (AERB)",
    "Centre for Development of Advanced Computing (CDAC)",
    "Centre for Development of Telematics (C- DOT)",
    "Aeronautics Research & Development Board (ARDB)",
    "Advanced Research Centre for Powder Metallurgy and New Materials (ARCI)",
    "Central Power Research Institute (CPRI)",
    "Indian Space Research Organization (ISRO)",
    "Indian Council for Historical Research (ICHR)",
    "Bhabha Atomic Research Centre (BARC)", // Duplicate, but keeping as per image
    "Bill & Melinda Gates Foundation", // Duplicate, but keeping as per image
    "Board of Research & Nuclear Sciences (BRNS)", // Duplicate, but keeping as per image
    "Indian National Science Academy (INSA)",
    "Indian Space Research Organisation (ISRO)", // Duplicate, but keeping as per image
    "Indo-US Science & Technology Forum", // Duplicate, but keeping as per image
    "Coal India Ltd.",
    "National Science Foundation",
    "Deutsche Forschungsgemeinschaft (DFG – German Research Foundation)",
    "Northern Indian Textile Research Association (NITRA)",
    "Petroleum Conservation Research Association (PCRA)",
    "Tata Institute of Fundamental Research",
    "Technology Information, Forecasting & Assessment Council (TIFAC)",
    "UK India Education and Research Initiative (UKIERI)",
    "University Grants Commission" // This seems to be a duplicate from above (index 53), keeping for exact match to provided list if intentional.
  ];

  // The URLs provided in your last message.
  const fundingAgencyUrls = [
    "http://www.barc.gov.in/",
    "https://www.gatesfoundation.org/",
    "https://brns.res.in/",
    "http://cpcb.nic.in/",
    "http://www.cefipra.org/",
    "http://www.cefipra.org/", // Duplicate URL for CST (index 5) - confirmed from your provided URL list
    "http://www.dstup.in/CST",
    "http://www.csir.res.in/",
    "https://www.drdo.gov.in/drdo/English/index.jsp?pg=homebody.jsp",
    "http://dae.gov.in/",
    "http://www.dbtindia.gov.in/",
    "http://www.igcar.ernet.in/",
    "http://www.dst.gov.in/",
    "https://euraxess.ec.europa.eu/worldwide/india",
    "http://www.gailonline.com",
    "http://www.hslvizag.in/",
    "http://www.serb.gov.in/home.php",
    "http://www.iitb.ac.in/",
    "http://www.tropmet.res.in/",
    "http://www.igstc.org/",
    "http://www.iusstf.org/",
    "http://www.iwmi.cgiar.org/",
    "https://ongcindia.com/",
    "http://coal.gov.in/",
    "http://meity.gov.in/",
    "http://www.moes.gov.in/",
    "http://mhrd.gov.in/",
    "http://mhupa.gov.in/Default.aspx?ReturnUrl=%2f",
    "http://icssr.org/",
    "http://www.icmr.nic.in/",
    "http://www.mnre.gov.in/",
    "http://morth.nic.in/",
    "http://texmin.gov.in/",
    "https://jalshakti-dowr.gov.in/",
    "http://www.mod.gov.in/",
    "http://envfor.nic.in/",
    "http://mohfw.nic.in/",
    "http://msme.gov.in/",
    "https://mopng.gov.in/en",
    "http://www.rural.nic.in/",
    "http://moud.gov.in/",
    "http://mofpi.gov.in/",
    "http://powermin.gov.in/",
    "http://socialjustice.gov.in/",
    "https://www.moes.gov.in/brief-extramural-support",
    "http://www.dsir.gov.in/",
    "http://indianmedicine.nic.in/",
    "http://chemicals.gov.in/",
    "http://fert.nic.in/",
    "https://www.drdo.gov.in/drdo/naval-research-board/submission-proposals",
    "http://www.ntpc.co.in/",
    "http://www.nal.res.in/",
    "http://onlineupsidc.com/",
    "http://www.ugc.ac.in/",
    "http://www.wellcomedbt.org/",
    "http://www.aerb.gov.in/",
    "http://www.cdac.in/",
    "http://www.cdot.com/",
    "https://www.drdo.gov.in/drdo/aeronautics-research-development/rules-grants-introductions",
    "https://www.arci.res.in/",
    "http://www.cpri.in/",
    "http://www.isro.gov.in/",
    "http://ichr.ac.in/",
    "http://www.barc.gov.in/", // Duplicate URL
    "https://www.gatesfoundation.org/", // Duplicate URL
    "https://brns.res.in/", // Duplicate URL
    "http://insaindia.org/",
    "https://www.isro.gov.in/", // Duplicate URL
    "http://www.indousstf.org/", // Duplicate URL
    "http://www.coalindia.in/",
    "http://www.nsf.gov/",
    "http://www.dfg.de/en/",
    "http://www.nitratextile.org/",
    "http://www.pcra.org/",
    "http://www.tifr.res.in/",
    "http://www.tifac.org.in/",
    "http://www.ukieri.org/",
    "http://www.ugc.ac.in/" // URL for the duplicate "University Grants Commission"
  ];


  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">


      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="bg-white shadow-lg rounded-lg overflow-hidden">
          <div className="bg-gray-100 px-6 py-4 border-b border-gray-200">
            <h1 id="here"className="text-xl font-bold text-gray-800 text-center">Web-Links of Various Funding Agencies Sponsoring Research Projects</h1>
          </div>
          <div className="p-0">
            <table className="min-w-full leading-normal">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-200">
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-1/12">
                    Sl No
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider w-11/12">
                    Funding Agencies
                  </th>
                </tr>
              </thead>
              <tbody>
                {fundingAgencyNames.map((agencyName, index) => (
                  <tr key={index} className={`${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'} border-b border-gray-200 hover:bg-gray-100 transition-colors duration-200`}>
                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 w-1/12">
                      {index + 1}.
                    </td>
                    <td className="px-6 py-4 text-sm w-11/12">
                      {/* Check if a URL exists for the current index before creating a link */}
                      {fundingAgencyUrls[index] ? (
                        <a
                          href={fundingAgencyUrls[index]}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-[#8B008B] hover:underline hover:text-black" // Tailwind classes for link styling
                        >
                          {agencyName}
                        </a>
                      ) : (
                        // If no URL, display text without a link, using plain text styling
                        <span className="text-gray-900">
                          {agencyName}
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Back to Top Link at the bottom */}
        <div className="text-center mt-10">
          <Link
            to="here"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            className="inline-block bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300 cursor-pointer"
          >
            Back to Top
          </Link>
        </div>
      </div>
    </div>
  );
}