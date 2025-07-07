// src/data/searchData.js

const searchData = [
  // Home Page
  {
    page: 'Home',
    title: 'Welcome to R&D Section',
    content: 'Welcome to the Resource and Development(rnd) Section of IIT Dharwad.',
    displaycontent: 'Welcome to the Resource and Development Section of IIT Dharwad.',
    link: '/'
  },
  {
    page: 'Home',
    title: 'Latest Proposals',
    content: 'Explore the latest research proposals and projects.',
    displaycontent: 'Latest research proposals',
    link: '/'
  },
  {
    page: 'Home',
    title: 'Latest Proposals',
    content: 'Stay updated with the latest news and announcements.',
    displaycontent: 'Latest news and announcements',
    link: '/'
  },

  // People Page
  {
    page: 'People',
    title: 'Faculty',
    content: 'Meet the Dean,Associate Dean,faculty Incharge and staff of the Research and Development Section with their research areas ans expertise.',
    displaycontent: 'Faculty and staff profiles',
    link: '/people'
  },
  {
    page: 'People',
    title: 'Staff',
    content: 'Department staff and administrative team.',
    displaycontent: 'Administrative staff',
    link: '/people'
  },
  {
    page: 'People',
    title: 'Dean',
    content: 'research and development section dean and asscoiate dean.',
    displaycontent: 'Dean and Associate Dean',
    link: '/people'
  },

  // OM and Documents Page
  {
    page: 'OM',
    title: 'Office Memorandums',
    content: 'Official office memorandums and circulars.',
    displaycontent: 'Office memorandums',
    link: '/Documents'
  },
  {
    page: 'OM',
    title: 'Manpower',
    content: 'OM for Engagement of Manpower, JRF/SRF/RA Positions,Other than JRF/SRF/RA Positions,Other than JRF/SRF/RA Positions for ANRF Sponsored Projects',
    displaycontent: 'Manpower engagement OMs',
    link: '/Documents'
  },
  {
    page: 'OM',
    title: 'Circulars and Office Orders',
    content: 'Circulars and Office Orders,Special provisions in amended GFRs 2017 - Enhancement in ceilings for procurement,Committee for allocation of Research Labs in Permanent Campus,Relaxation from obtaining prior approval for procurement of consumable, expenditures on contingency of sponsored projects,PPT for Generation of GeM Non availability report,General Financial Rules 2017 with latest updates till 31.07.2024,TA/DA rates for students and project staffs,Revision of Intellectual Property Rights (IPR) Policy guidelines,Circulation of R&D Procurement Referencer,Streamlining of Manpower Recruitment Process for Sponsored Research and Consultancy Projects,Provision for Temporary Loan for Payment of Project Staff Salaries during Fund Release Delays,Implementation of Distribution of charges collected from testing services by SCIF/DCIF,Formation of Department level Standing committees (DLSC) for Authorization of Proprietary Article Certificate (PAC),Implementation of revised Overhead charges for consultancy projects',
    displaycontent: 'Circulars and office orders',
    link: '/Documents'
  },

  // Documents Page
  {
    page: 'Documents',
    title: 'Academic Documents',
    content: 'Syllabi, curriculum, and academic regulations.',
    displaycontent: 'Academic documents',
    link: '/Documents'
  },
  {
    page: 'Documents',
    title: 'Administrative Documents',
    content: 'Forms, guidelines, and administrative notices.',
    displaycontent: 'Administrative documents',
    link: '/Documents'
  },

  // Funding Page
  {
    page: 'Funding',
    title: 'Research Funding',
    content: 'Information about research grants and funding opportunities. and  funding Agency',
    displaycontent: 'Research funding info',
    link: '/FundingStatistics'
  },
  {
    page: 'Funding',
    title: 'Student Scholarships',
    content: 'Agency	Link,Bhabha Atomic Research Centre (BARC),Bill & Melinda Gates Foundation,Board of Research & Nuclear Sciences (BRNS),Central Pollution Control Board (CPCB),Indo French Centre for Advanced Research (IFCPAR),Council of Science & Technology (CST),Council of Scientific & Industrial Research (CSIR),Defence Research & Development Organisation (DRDO),Department of Atomic Energy (DAE),Department of Biotechnology (DBT),Indira Gandhi Center for Advanced Research (IGCAR),Department of Science & Technology (DST),EURAXESS India,Gas Authority of India Ltd (GAIL),Hindustan Shipyard Ltd.,Science and Engineering Research Board (SERB),Indian Institute of Technology Bombay,Indian Institute of Tropical Meteorology (IITM) vist',
    displaycontent: 'Student scholarships and agencies',
    link: '/FundingStatistics'
  },


  // Office Page
  {
    page: 'Office',
    title: 'Department Office',
    content: 'Contact information and office hours.',
    displaycontent: 'Department office info',
    link: '/OfficeStatistics'
  },
  {
    page: 'Office',
    title: 'Staff Directory',
    content: 'Directory of office staff.',
    displaycontent: 'Office staff directory',
    link: '/OfficeStatistics'
  },



  // Forms Page
  {
    page: 'Forms',
    title: 'Forms',
    content: 'Download	View',
    displaycontent: 'Downloadable forms',
    link: '/forms'
  },
  {
    page: 'Forms',
    title: 'Forms',
    content: 'Form Name	Word Format	PDF,Request for the Extension of Duration of Project Staff,Disbursal Form for Consultancy Project/Course	,Asset Retention / Return Form,Form to be submitted for Projects involving extended Foreign Travel	,Project Proposal Submission Form	,Reimbursement Form	,Advance Form	,Settlement Form	,TA Form	,Indent form A - For direct purchases of value up to ₹ 50,000	,Indent form B - For purchases between ₹ 50,001 to ₹ 10 Lakhs	,Indent form C - For purchases above ₹ 10 lakhs	,Verification Report Form	,Project Completion Report,Bank Mandate Form with PFMS details	,IIT Dharwad PAN	,IIT Dharwad GST registration,Consumable Stock Form',
    displaycontent: 'Project and admin forms',
    link: '/forms'
  },

  // CSR Page
  {
    page: 'CSR',
    title: 'Corporate Social Responsibility',
    content: 'CSR initiatives and activities by the department.',
    displaycontent: 'CSR initiatives',
    link: '/csr'
  },
  {
    page: 'CSR',
    title: 'CSR Reports',
    content: 'Annual CSR reports and documentation.',
    displaycontent: 'CSR reports',
    link: '/csr'
  },
  {
    page: 'CSR',
    title: 'CSR Reports',
    content: 'IIT Dharwad CSR Brochure	View,CSR Eligibility Cover Letter	View,	CSR Amendments	View,DSIR Recognition	View,Exemption Certificate',
    displaycontent: 'CSR brochures and certificates',
    link: '/csr'
  },

  //Committee

  //ethics Committee
  {
    page:'Ethics Committee',
    title: 'Institutional Ethics Committee',
    content: 'Institutional Ethics Committee (IEC) Information about the department committee and its members. The Institutional Ethics Committee (IEC) is responsible for ensuring that all research involving human participants is conducted ethically and in compliance with relevant regulations. This includes reviewing research proposals, monitoring ongoing studies, and ensuring the rights and welfare of participants are protected.Name Current OrganizationRole',
    displaycontent: 'Institutional Ethics Committee (IEC) info',
    link: '/Committees/ethicscommittee'
  },
  //intellectual Property Rights Committee
  {
    page:'Institutes Intellectual Property Committee',
    title: 'Institutes Intellectual Property Committee',
    content: 'Institutional Ethics Committee (IEC) Information about the department committee and its members.The existing Intellectual Property (IP) policy of IIT Dharwad plays a crucial role in safeguarding and managing innovations, research outcomes, and intellectual assets generated by faculty, students, and staff. However, with evolving research landscapes, emerging technologies, and changing regulatory frameworks, it is essential to periodically review and update the IP policy to align with best practices and institutional needs.Name Faculty	Role',
    displaycontent: 'Institutes Intellectual Property (IPR) info',
    link: '/Committees/ipr'
  },
  //biosafety Committee
  {
    page:'Biosafety Committee',
    title: 'biosafety Committee',
    content: 'biosafety Committee Information about the department committee and its members. Name Faculty	Role',
    displaycontent: 'Biosafety Committee info',
    link: '/Committees/biosafety '
  },


  //message from dean
  {
    page:'Message from Dean',
    title: 'Message from Dean',
    content: 'Message from the Dean regarding important updates and announcements.',
    displaycontent: 'Message from Dean',
    link: '/message'
  },

  //Research Areas
  {
    page: 'Research Areas',
    title: 'Research Areas',
    content: 'Information about the various research areas within the department. Department. Name	Areas of Interest research projects, and collaborations.',
    displaycontent: 'Academics and Research Areas',
    link: '/research-areas'
  }

  
];

export default searchData;