import React, { useState } from 'react';

const fundingAgencies = [{'name': 'Bhabha Atomic Research Centre (BARC)',
  'link': 'http://www.barc.gov.in/'},
 {'name': 'Bill & Melinda Gates Foundation',
  'link': 'https://www.gatesfoundation.org/'},
 {'name': 'Board of Research & Nuclear Sciences (BRNS)',
  'link': 'https://brns.res.in/'},
 {'name': 'Central Pollution Control Board (CPCB)',
  'link': 'http://cpcb.nic.in/'},
 {'name': 'Indo French Centre for the Promotion of Advanced Research (IFCPAR)/ Centre Franco Indien Pourla Promotion Le La Recherche Avancee (CEFIIPR)',
  'link': 'http://www.cefipra.org/'},
 {'name': 'Council of Science & Technology (CST)',
  'link': 'http://www.cefipra.org/'},
 {'name': 'Council of Scientific & Industrial Research (CSIR)',
  'link': 'http://www.dstup.in/CST'},
 {'name': 'Defence Research & Development Organisation (DRDO)',
  'link': 'http://www.csir.res.in/'},
 {'name': 'Department of Atomic Energy (DAE)',
  'link': 'https://www.drdo.gov.in/drdo/English/index.jsp?pg=homebody.jsp'},
 {'name': 'Department of Biotechnology (DBT)', 'link': 'http://dae.gov.in/'},
 {'name': 'Indira Gandhi Center for Advanced Research (IGCAR)',
  'link': 'http://www.dbtindia.gov.in/'},
 {'name': 'Department of Science & Technology (DST)',
  'link': 'http://www.igcar.ernet.in/'},
 {'name': 'EURAXESS India', 'link': 'http://www.dst.gov.in/'},
 {'name': 'Gas Authority of India Ltd (GAIL)',
  'link': 'https://euraxess.ec.europa.eu/worldwide/india'},
 {'name': 'Hindustan Shipyard Ltd.', 'link': 'http://www.gailonline.com'},
 {'name': 'Science and Engineering Research Board (SERB)',
  'link': 'http://www.hslvizag.in/'},
 {'name': 'Indian Institute of Technology Bombay',
  'link': 'http://www.serb.gov.in/home.php'},
 {'name': 'Indian Institute of Tropical Meteorology (IITM)',
  'link': 'http://www.iitb.ac.in/'},
 {'name': 'Indo-German Science & Technology Centre',
  'link': 'http://www.tropmet.res.in/'},
 {'name': 'Indo-US Science and Technology Forum (IUSSTF)',
  'link': 'http://www.igstc.org/'},
 {'name': 'International Water Management Institute (IWMI)',
  'link': 'http://www.iusstf.org/'},
 {'name': 'Oil & Natural Gas Corporation Ltd (ONGC)',
  'link': 'http://www.iwmi.cgiar.org/'},
 {'name': 'Ministry of Coal & Mines (MoCM)', 'link': 'https://ongcindia.com/'},
 {'name': 'Ministry of Electronics & Information Technology (MEITY)',
  'link': 'http://coal.gov.in/'},
 {'name': 'Ministry of Earth Sciences (MoES)', 'link': 'http://meity.gov.in/'},
 {'name': 'Ministry of Education (MoE)', 'link': 'http://www.moes.gov.in/'},
 {'name': 'Ministry of Housing and Poverty Alleviation (MHPA)',
  'link': 'http://mhrd.gov.in/'},
 {'name': 'Indian Council for Social Research (ICSSR)',
  'link': 'http://mhupa.gov.in/Default.aspx?ReturnUrl=%2f'},
 {'name': 'Indian Council for Medical Research (ICMR)',
  'link': 'http://icssr.org/'},
 {'name': 'Ministry of New and Renewable Energy (MNRE)',
  'link': 'http://www.icmr.nic.in/'},
 {'name': 'Ministry of Road Transport & Highway',
  'link': 'http://www.mnre.gov.in/'},
 {'name': 'Ministry of Textiles (MoT)', 'link': 'http://morth.nic.in/'},
 {'name': 'Ministry of Jal Shakti', 'link': 'http://texmin.gov.in/'},
 {'name': 'Ministry of Defence', 'link': 'https://jalshakti-dowr.gov.in/'},
 {'name': 'Ministry of Environment & Forests (MoEF)',
  'link': 'http://www.mod.gov.in/'},
 {'name': 'Ministry of Health & Family Welfare',
  'link': 'http://envfor.nic.in/'},
 {'name': 'Ministry of Micro, Small and Medium Enterprises',
  'link': 'http://mohfw.nic.in/'},
 {'name': 'Ministry of Petroleum & Natural Gas',
  'link': 'http://msme.gov.in/'},
 {'name': 'Ministry of Rural Development', 'link': 'https://mopng.gov.in/en'},
 {'name': 'Ministry of Urban Development', 'link': 'http://www.rural.nic.in/'},
 {'name': 'Ministry of Food Processing Industries (MFPI)',
  'link': 'http://moud.gov.in/'},
 {'name': 'Ministry of Power (MoP)', 'link': 'http://mofpi.gov.in/'},
 {'name': 'Ministry of Social Justice & Empowerment (MoSJE)',
  'link': 'http://powermin.gov.in/'},
 {'name': 'Department of Ocean Development (DOD)',
  'link': 'http://socialjustice.gov.in/'},
 {'name': 'Department of Scientific and Industrial Research (DSIR)',
  'link': 'https://www.moes.gov.in/brief-extramural-support'},
 {'name': 'Department of AYUSH', 'link': 'http://www.dsir.gov.in/'},
 {'name': 'Department of Chemicals & Petrochemicals, Ministry of Chemicals & Fertilizers',
  'link': 'http://indianmedicine.nic.in/'},
 {'name': 'Department of Fertilizers, Ministry of Chemicals & Fertilizers',
  'link': 'http://chemicals.gov.in/'},
 {'name': 'Naval Research Board (NRB)', 'link': 'http://fert.nic.in/'},
 {'name': 'National Thermal Power Corporation(NTPC)',
  'link': 'https://www.drdo.gov.in/drdo/naval-research-board/submission-proposals'},
 {'name': 'National Aerospace Laboratory (NAL)',
  'link': 'http://www.ntpc.co.in/'},
 {'name': 'U.P. Small Industry Development Corporation (UPSIDC)',
  'link': 'http://www.nal.res.in/'},
 {'name': 'University Grants Commission (UGC)',
  'link': 'http://onlineupsidc.com/'},
 {'name': 'Wellcome Trust DBT', 'link': 'http://www.ugc.ac.in/'},
 {'name': 'Atomic Energy Regulatory Board (AERB)',
  'link': 'http://www.wellcomedbt.org/'},
 {'name': 'Centre for Development of Advanced Computing (CDAC)',
  'link': 'http://www.aerb.gov.in/'},
 {'name': 'Centre for Development of Telematics (C- DOT)',
  'link': 'http://www.cdac.in/'},
 {'name': 'Aeronautics Research & Development Board (ARDB)',
  'link': 'http://www.cdot.com/'},
 {'name': 'Advanced Research Centre for Powder Metallurgy and New Materials (ARCI)',
  'link': 'https://www.drdo.gov.in/drdo/aeronautics-research-development/rules-grants-introductions'},
 {'name': 'Central Power Research Institute (CPRI)',
  'link': 'https://www.arci.res.in/'},
 {'name': 'Indian Space Research Organization (ISRO)',
  'link': 'http://www.cpri.in/'},
 {'name': 'Indian Council for Historical Research (ICHR)',
  'link': 'http://www.isro.gov.in/'},
 {'name': 'Indian National Science Academy (INSA)',
  'link': 'https://brns.res.in/'},
 {'name': 'Indian Space Research Organisation (ISRO)',
  'link': 'http://insaindia.org/'},
 {'name': 'Indo-US Science & Technology Forum',
  'link': 'https://www.isro.gov.in/'},
 {'name': 'Coal India Ltd.', 'link': 'http://www.indousstf.org/'},
 {'name': 'National Science Foundation', 'link': 'http://www.coalindia.in/'},
 {'name': 'Deutsche Forschungsgemeinschaft (DFG – German Research Foundation)',
  'link': 'http://www.nsf.gov/'},
 {'name': 'Northern Indian Textile Research Association (NITRA)',
  'link': 'http://www.dfg.de/en/'},
 {'name': 'Petroleum Conservation Research Association (PCRA)',
  'link': 'http://www.nitratextile.org/'},
 {'name': 'Tata Institute of Fundamental Research',
  'link': 'http://www.pcra.org/'},
 {'name': 'Technology Information, Forecasting & Assessment Council (TIFAC)',
  'link': 'http://www.tifr.res.in/'},
 {'name': 'UK India Education and Research Initiative (UKIERI)',
  'link': 'http://www.tifac.org.in/'},
 {'name': 'University Grants Commission', 'link': 'http://www.ukieri.org/'}
 ];


export default function Funding_statistics() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDocLink, setSelectedDocLink] = useState('');
  const [rawDocLink, setRawDocLink] = useState('');

  // const handleViewClick = (link) => {
  //   const encodedLink = encodeURIComponent(link);
  //   const viewerURL = `https://docs.google.com/gview?url=${encodedLink}&embedded=true`;
  //   setSelectedDocLink(viewerURL);
  //   setRawDocLink(link);
  //   setShowModal(true);
  // };

  return (
  <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800">
    <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">
      Funding Agencies
    </h1>

    <div className="overflow-x-auto">
      <table className="min-w-full table-auto border border-gray-300 shadow-md bg-white">
        <thead className="bg-gray-300 text-sm sm:text-base">
          <tr>
            <th className="p-2 sm:p-3 border">Sl No.</th>
            <th className="p-2 sm:p-3 border text-left">Agency Name</th>
          </tr>
        </thead>
        <tbody className="text-sm sm:text-base">
          {fundingAgencies.map((agency, index) => (
            <tr
              key={index}
              className={`text-center ${index % 2 === 0 ? "bg-white" : "bg-gray-200"}`}
            >
              <td className="p-2 sm:p-3 border">{index + 1}</td>
              <td className="p-2 sm:p-3 border text-left">
                <a
                  href={agency.link}
                  className="text-blue-700 underline hover:text-blue-900"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {agency.name}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
  )
};