import React from 'react';
import { Link } from 'react-scroll';

// Navigation Card Component
const NavCard = ({ title, icon, targetId }) => {
  return (
    <Link
      to={targetId}
      spy={true}
      smooth={true}
      offset={-100}
      duration={500}
      className="cursor-pointer"
    >
      <div className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition-shadow duration-300 hover:bg-indigo-50 h-full flex flex-col items-center justify-center">
        <div className="text-indigo-600 mb-3 text-3xl">
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600 mt-2">View Details</p>
      </div>
    </Link>
  );
};

// Section Component
const Section = ({ id, title, children }) => {
  return (
    <div id={id} className="py-10 scroll-mt-[100px]">
      <h2 className="text-2xl font-bold text-gray-800 mb-6 pb-2 border-b border-gray-200">{title}</h2>
      {children}
    </div>
  );
};

// Lab Card Component
const LabCard = ({ name, description, equipment, image }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <div className="relative h-[200px] bg-gray-100 flex items-center justify-center">
        {image ? (
          <img 
            src={image}
            alt={name} 
            className="absolute inset-0 w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = 'none';
              e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
            }}
          />
        ) : null}
        <div className={`text-6xl text-indigo-200 ${image ? 'hidden' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-16 h-16">
            <path d="M11.584 2.376a.75.75 0 01.832 0l9 6a.75.75 0 11-.832 1.248L12 3.901 3.416 9.624a.75.75 0 01-.832-1.248l9-6z" />
            <path fillRule="evenodd" d="M20.25 10.332v9.918H21a.75.75 0 010 1.5H3a.75.75 0 010-1.5h.75v-9.918a.75.75 0 01.634-.74A49.109 49.109 0 0112 9c2.59 0 5.134.202 7.616.592a.75.75 0 01.634.74zm-7.5 2.418a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75zm3-.75a.75.75 0 01.75.75v6.75a.75.75 0 01-1.5 0v-6.75a.75.75 0 01.75-.75zM9 12.75a.75.75 0 00-1.5 0v6.75a.75.75 0 001.5 0v-6.75z" clipRule="evenodd" />
            <path d="M12 7.875a1.125 1.125 0 100-2.25 1.125 1.125 0 000 2.25z" />
          </svg>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        {equipment && (
          <div className="mt-3">
            <p className="text-sm text-gray-700 font-medium">Key Equipment</p>
            <ul className="list-disc list-inside text-sm text-gray-600 mt-1">
              {equipment.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

// Publication Card Component
const PublicationCard = ({ title, authors, journal, year, doi }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-full">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">{authors}</p>
      <div className="mt-3 flex flex-wrap text-sm">
        <span className="bg-indigo-100 text-indigo-800 px-2 py-1 rounded mr-2 mb-2">{journal}</span>
        <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded mr-2 mb-2">{year}</span>
      </div>
      {doi && (
        <div className="mt-2">
          <a 
            href={`https://doi.org/${doi}`} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-indigo-600 hover:underline text-sm flex items-center"
          >
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z"></path>
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5z"></path>
            </svg>
            View Publication
          </a>
        </div>
      )}
    </div>
  );
};

// Research Area Card Component
const ResearchAreaCard = ({ title, description, faculty, keywords }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2 text-sm">{description}</p>
        {faculty && (
          <div className="mt-3">
            <p className="text-sm text-gray-700 font-medium">Faculty Involved</p>
            <p className="text-sm text-gray-600">{faculty}</p>
          </div>
        )}
      </div>
      {keywords && (
        <div className="p-3 bg-gray-50 border-t border-gray-100">
          <div className="flex flex-wrap gap-2">
            {keywords.map((keyword, index) => (
              <span key={index} className="px-2 py-1 bg-indigo-100 text-indigo-800 text-xs rounded-full">
                {keyword}
              </span>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// Patent Card Component
const PatentCard = ({ title, inventors, filingDate, patentNumber, status }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-full">
      <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      <p className="text-gray-600 text-sm mt-2">Inventors: {inventors}</p>
      <div className="mt-3 space-y-2 text-sm">
        <div className="flex justify-between">
          <span className="text-gray-700">Filing Date:</span>
          <span className="text-gray-800">{filingDate}</span>
        </div>
        {patentNumber && (
          <div className="flex justify-between">
            <span className="text-gray-700">Patent Number:</span>
            <span className="text-gray-800">{patentNumber}</span>
          </div>
        )}
        <div className="flex justify-between">
          <span className="text-gray-700">Status:</span>
          <span className={`${
            status === 'Granted' ? 'text-green-600' : 
            status === 'Pending' ? 'text-yellow-600' : 
            'text-gray-600'
          } font-medium`}>{status}</span>
        </div>
      </div>
    </div>
  );
};

// Research Page Component
const Research = () => {
  // Facilities data from facilities.html
  const instructionalLabs = [
    "Programming Laboratory",
    "Data Structures and Algorithms Laboratory",
    "Software Systems Laboratory",
    "Artificial Intelligence Laboratory",
    "Computer Architecture Laboratory",
    "Database Systems Laboratory",
    "Operating Systems Laboratory",
    "Computer Networks Laboratory",
    "Compilers Laboratory"
  ];
  const rndLabs = [
    { name: "AIML Lab" },
    { name: "FutureG Networks Lab", link: "https://futuregnetworks.iitdh.ac.in/" },
    { name: "Emerging Multimedia and AI (EMA) Lab", link: "http://ema.iitdh.ac.in/", img: "/sites/default/files/inline-images/EEMAA.jpg", imgWidth: 26, imgHeight: 17, hiring: true }
  ];

  // Sample publication data
  const publications = [
    {
      title: "Deep Learning for Resource Allocation in Next-Generation Wireless Networks",
      authors: "Kumar, A., Sharma, P., Patel, S.",
      journal: "IEEE Transactions on Communications",
      year: "2023",
      doi: "10.1109/TCOMM.2023.1234567"
    },
    {
      title: "Secure Multi-Party Computation for Privacy-Preserving Data Analysis",
      authors: "Venkat, R., Desai, N., Kumar, A.",
      journal: "ACM Conference on Computer and Communications Security",
      year: "2022",
      doi: "10.1145/3548606.3560598"
    },
    {
      title: "Efficient Graph Algorithms for Large-Scale Network Analysis",
      authors: "Sharma, P., Iyer, M., Kumar, A.",
      journal: "SIAM Journal on Computing",
      year: "2022",
      doi: "10.1137/21M1409536"
    },
    {
      title: "User Experience Design Patterns for Accessible Mobile Applications",
      authors: "Desai, N., Patel, S.",
      journal: "International Journal of Human-Computer Studies",
      year: "2023",
      doi: "10.1016/j.ijhcs.2023.102812"
    },
    {
      title: "Quantum-Resistant Cryptographic Protocols for IoT Networks",
      authors: "Venkat, R., Kumar, A., Patel, S.",
      journal: "USENIX Security Symposium",
      year: "2022",
      doi: "10.1145/3489517.3530577"
    },
    {
      title: "Machine Learning Approaches for Automated Database Tuning",
      authors: "Iyer, M., Sharma, P.",
      journal: "International Conference on Very Large Data Bases",
      year: "2023",
      doi: "10.14778/3583140.3583145"
    }
  ];

  // Sample research areas data
  const researchAreas = [
    {
      title: "Artificial Intelligence and Machine Learning",
      description: "Research on deep learning, reinforcement learning, computer vision, natural language processing, and AI ethics.",
      faculty: "Dr. Anand Kumar, Dr. Neha Desai",
      keywords: ["Deep Learning", "Computer Vision", "NLP", "Reinforcement Learning", "AI Ethics"]
    },
    {
      title: "Algorithms and Theoretical Computer Science",
      description: "Work on algorithm design, complexity theory, graph theory, and computational geometry.",
      faculty: "Dr. Priya Sharma, Dr. Meena Iyer",
      keywords: ["Algorithms", "Complexity Theory", "Graph Theory", "Computational Geometry"]
    },
    {
      title: "Computer Security and Privacy",
      description: "Research on network security, cryptography, privacy-preserving technologies, and secure systems design.",
      faculty: "Dr. Rajesh Venkat, Dr. Sanjay Patel",
      keywords: ["Cybersecurity", "Cryptography", "Network Security", "Privacy"]
    },
    {
      title: "Human-Computer Interaction",
      description: "Investigating novel user interfaces, user experience, and interaction paradigms for future computing systems.",
      faculty: "Dr. Neha Desai, Dr. Anand Kumar",
      keywords: ["UI/UX", "Accessibility", "Interaction Design", "VR/AR"]
    },
    {
      title: "Systems and Networking",
      description: "Work on distributed systems, cloud computing, and next-generation networking protocols.",
      faculty: "Dr. Sanjay Patel, Dr. Meena Iyer",
      keywords: ["Distributed Systems", "Cloud Computing", "IoT", "5G/6G Networks"]
    },
    {
      title: "Data Science and Databases",
      description: "Research on database systems, data mining, big data analytics, and knowledge discovery.",
      faculty: "Dr. Meena Iyer, Dr. Priya Sharma",
      keywords: ["Big Data", "Data Mining", "Database Systems", "Knowledge Discovery"]
    }
  ];

  // Sample patent data
  const patents = [
    {
      title: "Method and System for Privacy-Preserving Federated Learning",
      inventors: "Kumar, A., Venkat, R., Sharma, P.",
      filingDate: "June 15, 2022",
      patentNumber: "US 11,576,834 B2",
      status: "Granted"
    },
    {
      title: "Energy-Efficient Resource Allocation Framework for Edge Computing Networks",
      inventors: "Patel, S., Kumar, A.",
      filingDate: "March 8, 2023",
      patentNumber: null,
      status: "Pending"
    },
    {
      title: "Adaptive User Interface System for Cross-Platform Applications",
      inventors: "Desai, N., Iyer, M.",
      filingDate: "October 22, 2022",
      patentNumber: null,
      status: "Pending"
    },
    {
      title: "Quantum-Resistant Authentication Protocol for IoT Devices",
      inventors: "Venkat, R., Patel, S.",
      filingDate: "January 30, 2022",
      patentNumber: "US 11,712,456 B2",
      status: "Granted"
    }
  ];

  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div id="research-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Research</h1>
        <p className="text-gray-600">
          Explore research activities, publications, patents, and laboratories of the Department of Computer Science and Engineering.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        <NavCard 
          title="Research Labs" 
          icon={<i className="fas fa-flask"></i>}
          targetId="labs" 
        />
        <NavCard 
          title="Research-Projects" 
          icon={<i className="fas fa-flask"></i>}
          targetId="research-projects" 
        />
       
        {/* <NavCard 
          title="Publications" 
          icon={<i className="fas fa-book"></i>}
          targetId="publications" 
        />
        <NavCard 
          title="Research Areas" 
          icon={<i className="fas fa-project-diagram"></i>}
          targetId="research-areas" 
        />
        <NavCard 
          title="Patents" 
          icon={<i className="fas fa-certificate"></i>}
          targetId="patents" 
        /> */}
        </div>

      {/* Labs Section */}
      <Section id="labs" title="Department Facilities">
        <div className="mb-8">
          <h3 className="text-xl font-bold text-gray-800 mb-4">Instructional Labs</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700">
            {instructionalLabs.map((lab, idx) => (
              <li key={idx}>{lab}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-bold text-gray-800 mb-4">Research & Development Labs</h3>
          <ul className="list-disc list-inside ml-6 text-gray-700">
            {rndLabs.map((lab, idx) => (
              <li key={idx} className="mb-2">
                {lab.link ? (
                  <a href={lab.link} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline">
                    {lab.name}
                    {lab.img && (
                      <img src={lab.img} alt="EMA" width={lab.imgWidth} height={lab.imgHeight} className="inline ml-2 align-middle" />
                    )}
                  </a>
                ) : lab.name}
                {lab.hiring && (
                  <span className="ml-2 text-xs text-green-700 font-semibold">(EMA Lab is hiring now! <a href="https://www.iitdh.ac.in/emerging-multimedia-and-ai-lab-ema-lab-hiring-were-looking-passionate-researchers-join-us-ms-phd" target="_blank" className="underline">Click Here to know more</a>)</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      </Section>

    
<section id="research-projects" title ="Research-Projects">
 <div className="mb-8">
  <h3 className="text-xl font-bold text-gray-800 mb-4">Research-Projects</h3>
    <div class="row justify-content-center mb-4">
      <div class="col-lg-8 text-center">
        <h2 class="section-title mt-6">R&D Sponsored Projects in the Past Five Years</h2>
      </div>
    </div>

    <div class="table-responsive">
      <table class="table table-bordered table-striped table-hover">
        <thead class="thead-dark">
          <tr>
            <th  class="border border-gray-400 px-4 py-2">S. No.</th>
            <th class="border border-gray-400 px-4 py-2">Project Title</th>
            <th class="border border-gray-400 px-4 py-2">Project Area</th>
            <th class="border border-gray-400 px-4 py-2">Duration</th>
            <th class="border border-gray-400 px-4 py-2">PI</th>
            <th class="border border-gray-400 px-4 py-2">Co-PI</th>
            <th class="border border-gray-400 px-4 py-2">Status</th>
          </tr>
        </thead>
        <tbody>
        <tr>
            <td class="border border-gray-400">1</td>
            <td class="border border-gray-400">Exponential Ethical Affairs Concerning Autonomous Vehicles and Code of Ethics for Data Acquisition</td>
            <td class="border border-gray-400">AI Application to Autonomous Vehicles</td>
            <td class="border border-gray-400">2021–24</td>
            <td class="border border-gray-400">Jolly Thomas</td>
            <td class="border border-gray-400">Kedar Khandeparkar</td>
            <td class="border border-gray-400">Completed</td>
          </tr>
          <tr>
            <td class="border border-gray-400">2</td>
            <td class="border border-gray-400">Cyber Physical Modelling and Detection of Cyber Attacks in WADC in Smart Grids</td>
            <td class="border border-gray-400">AI for Cyber Security in Smart Grids</td>
            <td class="border border-gray-400">2022–23</td>
            <td class="border border-gray-400">Pratyasa Bhui</td>
            <td class="border border-gray-400">Kedar Khandeparkar</td>
            <td class="border border-gray-400">Completed</td>
          </tr>
          <tr>
            <td class="border border-gray-400">3</td>
            <td class="border border-gray-400">Detection of Cyber Attacks in Wide Area Damping Control in Smart Grids</td>
            <td class="border border-gray-400">AI for Cyber Security in Smart Grids</td>
            <td class="border border-gray-400">2021–24</td>
            <td class="border border-gray-400">Pratyasa Bhui</td>
            <td class="border border-gray-400">Kedar Khandeparkar</td>
            <td class="border border-gray-400">Completed</td>
          </tr>
          <tr>
            <td class="border border-gray-400">4</td>
            <td class="border border-gray-400">Development and Demonstration of AI-enabled FARWM-DS for Sustainable Farm Productivity & Profitability</td>
            <td class="border border-gray-400">AI in Agriculture</td>
            <td class="border border-gray-400">2023–26</td>
            <td class="border border-gray-400">Kedar Khandeparkar</td>
            <td class="border border-gray-400">–</td>
            <td class="border border-gray-400">Ongoing</td>
          </tr>
          <tr>
            <td class="border border-gray-400">5</td>
            <td class="border border-gray-400">Algorithmic study on hereditary graph properties</td>
            <td class="border border-gray-400">Theoretical computer science</td>
            <td class="border border-gray-400">2023–26</td>
            <td class="border border-gray-400">Sandeep R. B.</td>
            <td class="border border-gray-400">–</td>
            <td class="border border-gray-400">Ongoing</td>
          </tr>
          <tr>
            <td class="border border-gray-400">6</td>
            <td class="border border-gray-400">Complexity dichotomies for graph modification problems</td>
            <td class="border border-gray-400">Theoretical computer science</td>
            <td class="border border-gray-400">2019–22</td>
            <td class="border border-gray-400">Sandeep R. B.</td>
            <td class="border border-gray-400">–</td>
            <td class="border border-gray-400">Completed</td>
          </tr>
          <tr>
            <td class="border border-gray-400">7</td>
            <td class="border border-gray-400">AI-Enhanced Non-Invasive Wearable Patch for Early Heart Attack Prediction</td>
            <td class="border border-gray-400">Biomedical + Artificial Intelligence</td>
            <td class="border border-gray-400">3 Years</td>
            <td class="border border-gray-400">Dr. Naveen Singh</td>
            <td class="border border-gray-400">Dr. Achyut Mani Tripathi</td>
            <td class="border border-gray-400">–</td>
          </tr>
          <tr>
            <td class="border border-gray-400">8</td>
            <td class="border border-gray-400">Digital Preservation and Linguistic Technology Development of Manipuri Language</td>
            <td class="border border-gray-400">NLP, MT, Digital Preservation</td>
            <td class="border border-gray-400">3 Years</td>
            <td class="border border-gray-400">Konjengbam Anand</td>
            <td class="border border-gray-400">–</td>
            <td class="border border-gray-400">Ongoing</td>
          </tr>
          <tr>
            <td class="border border-gray-400">9</td>
            <td class="border border-gray-400">AI Translation Software from English to Meitei Mayek and Roman Script</td>
            <td class="border border-gray-400">NLP, MT</td>
            <td class="border border-gray-400">15 months</td>
            <td class="border border-gray-400">Dr. Khelchandra Thongam</td>
            <td class="border border-gray-400">Multiple Co-PIs</td>
            <td class="border border-gray-400">Completed</td>
          </tr>
          <tr>
            <td class="border border-gray-400">10</td>
            <td class="border border-gray-400">AxTRADE: Approximation-aware training of DNNs for Edge-AI</td>
            <td class="border border-gray-400">Edge Computing</td>
            <td class="border border-gray-400">3 Years</td>
            <td class="border border-gray-400">Dr. Marcello Triaola</td>
            <td class="border border-gray-400">Dr. Gayathri</td>
            <td class="border border-gray-400">–</td>
          </tr>
          <tr>
            <td class="border border-gray-400">11</td>
            <td class="border border-gray-400">NeuroOpt4Dev: AI/ML on Heterogeneous Hardware in Developing Regions</td>
            <td class="border border-gray-400">Heterogeneous Computing</td>
            <td class="border border-gray-400">3 Years</td>
            <td class="border border-gray-400">Dr. Gayathri</td>
            <td class="border border-gray-400">Dr. Rijurekha Sen</td>
            <td class="border border-gray-400">–</td>
          </tr>
          <tr>
            <td class="border border-gray-400">12</td>
            <td class="border border-gray-400">Reliability & Security Analysis of AI Workloads</td>
            <td class="border border-gray-400">AI + Safety-critical systems</td>
            <td class="border border-gray-400">2 Years</td>
            <td class="border border-gray-400">Dr. Gayathri</td>
            <td class="border border-gray-400">–</td>
            <td class="border border-gray-400">–</td>
          </tr>
          <tr>
            <td class="border border-gray-400">13</td>
            <td class="border border-gray-400">Crop classification and disease identification using edge neural networks</td>
            <td class="border border-gray-400">AgriTech</td>
            <td class="border border-gray-400">1.5 Years</td>
            <td class="border border-gray-400">Dr. Gayathri</td>
            <td class="border border-gray-400">–</td>
            <td class="border border-gray-400">–</td>
          </tr>
          <tr>
            <td class="border border-gray-400">14</td>
            <td class="border border-gray-400">Synergy: Openness in 6G Networks</td>
            <td class="border border-gray-400">6G</td>
            <td class="border border-gray-400">2025–28</td>
            <td class="border border-gray-400">Prof Antony Franklin</td>
            <td class="border border-gray-400">Dr. Koteswararao Kondepu</td>
            <td class="border border-gray-400">–</td>
          </tr>
          <tr>
            <td class="border border-gray-400">15</td>
            <td class="border border-gray-400">Real-Time Predictive Modeling for Meteorological and Earthquake Forecasting</td>
            <td class="border border-gray-400">Deep Learning for Environmental Science</td>
            <td class="border border-gray-400">3 Years</td>
            <td class="border border-gray-400">Dr. Gayathri</td>
            <td class="border border-gray-400">–</td>
            <td class="border border-gray-400">–</td>
            </tr>
            <tr><td class="border border-gray-400">16</td><td class="border border-gray-400">Erasmus+ Extra Europa</td><td class="border border-gray-400">Hardware Acceleration</td><td class="border border-gray-400">2024–27</td><td class="border border-gray-400">Prof. Valcarenghi</td><td class="border border-gray-400">Dr. Koteswararao Kondepu</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">17</td><td class="border border-gray-400">IMPACT: 5G vRAN Functions in Accelerated Edge Cloud</td><td class="border border-gray-400">Hardware Acceleration for RAN</td><td class="border border-gray-400">2021–23</td><td class="border border-gray-400">Dr. Koteswararao Kondepu</td><td class="border border-gray-400">–</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">18</td><td class="border border-gray-400">ReliEVE5G: Reliability Evaluation of Virtualised 5G</td><td class="border border-gray-400">5G RAN Reliability</td><td class="border border-gray-400">2021–23</td><td class="border border-gray-400">Koteswararao Kondepu</td><td class="border border-gray-400">–</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">19</td><td class="border border-gray-400">Fast Eigensolvers for Hierarchical Matrices</td><td class="border border-gray-400">Scientific Computing</td><td class="border border-gray-400">2 Years</td><td class="border border-gray-400">Nikhil D Hegde</td><td class="border border-gray-400">Multiple Co-PIs</td><td class="border border-gray-400">Completed</td></tr>
<tr><td class="border border-gray-400">20</td><td class="border border-gray-400">Autoprogramming Framework for Recursive Irregular Algorithms</td><td class="border border-gray-400">Programming Languages</td><td class="border border-gray-400">2 Years</td><td class="border border-gray-400">Nikhil D Hegde</td><td class="border border-gray-400">–</td><td class="border border-gray-400">Completed</td></tr>
<tr><td class="border border-gray-400">21</td><td class="border border-gray-400">Place Reduction in Petri Nets</td><td class="border border-gray-400">Theoretical Computer Science</td><td class="border border-gray-400">3 Years</td><td class="border border-gray-400">Ramchandra Phawade</td><td class="border border-gray-400">–</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">22</td><td class="border border-gray-400">Center for Trusted Systems</td><td class="border border-gray-400">System Design</td><td class="border border-gray-400">2 Years</td><td class="border border-gray-400">Rajshekar K</td><td class="border border-gray-400">–</td><td class="border border-gray-400">Completed</td></tr>
<tr><td class="border border-gray-400">23</td><td class="border border-gray-400">Harnessing Evolutionary Computation for Image Segmentation</td><td class="border border-gray-400">Computer Vision, AI</td><td class="border border-gray-400">2 Years</td><td class="border border-gray-400">Vandana Bharti</td><td class="border border-gray-400">–</td><td class="border border-gray-400">Ongoing</td></tr>
<tr><td class="border border-gray-400">24</td><td class="border border-gray-400">Criticality-aware Hybrid Cache Hierarchy</td><td class="border border-gray-400">Computer Architecture</td><td class="border border-gray-400">2 Years</td><td class="border border-gray-400">Rajshekar K</td><td class="border border-gray-400">–</td><td class="border border-gray-400">Completed</td></tr>
<tr><td class="border border-gray-400">25</td><td class="border border-gray-400">Improve Math Competency Through Digital Tools</td><td class="border border-gray-400">Education</td><td class="border border-gray-400">1 Year</td><td class="border border-gray-400">Prof. Mahadev Prasanna</td><td class="border border-gray-400">Vijeth J Kotagi</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">26</td><td class="border border-gray-400">InDyslexiCare: Assistive Tech for Dyslexic Children</td><td class="border border-gray-400">Medical Speech</td><td class="border border-gray-400">2 Years</td><td class="border border-gray-400">Dileep A D</td><td class="border border-gray-400">Konjengbam Anand</td><td class="border border-gray-400">Ongoing</td></tr>
<tr><td class="border border-gray-400">27</td><td class="border border-gray-400">Automated Covid-19 Pre-Vaccination Process</td><td class="border border-gray-400">Healthcare Software Systems</td><td class="border border-gray-400">1 Year</td><td class="border border-gray-400">Siba Narayan Swain</td><td class="border border-gray-400">–</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">28</td><td class="border border-gray-400">Investigate Privacy Issues in 6G</td><td class="border border-gray-400">Network Security</td><td class="border border-gray-400">2 Months</td><td class="border border-gray-400">Siba Narayan Swain</td><td class="border border-gray-400">–</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">29</td><td class="border border-gray-400">AI and Blockchain for Privacy in 5G+</td><td class="border border-gray-400">Network Security</td><td class="border border-gray-400">2 Years</td><td class="border border-gray-400">Siba Narayan Swain</td><td class="border border-gray-400">–</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">30</td><td class="border border-gray-400">Secure, Intelligent RACH/Resource Allocation in 6G</td><td class="border border-gray-400">6G and Beyond</td><td class="border border-gray-400">6 Months</td><td class="border border-gray-400">Siba Narayan Swain</td><td class="border border-gray-400">–</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">31</td><td class="border border-gray-400">SAFE DNS: Securing Domain Name System</td><td class="border border-gray-400">Network Security</td><td class="border border-gray-400">2024–27</td><td class="border border-gray-400">Tamal Das</td><td class="border border-gray-400">–</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">32</td><td class="border border-gray-400">IP Address Analyser</td><td class="border border-gray-400">Network Security</td><td class="border border-gray-400">2024–25</td><td class="border border-gray-400">Manjesh Hanawal</td><td class="border border-gray-400">Tamal Das, Sameer Kulkarni</td><td class="border border-gray-400">–</td></tr>
<tr><td class="border border-gray-400">33</td><td class="border border-gray-400">RELEVANCE: Predictive Analytics for Zero-touch Networks</td><td class="border border-gray-400">Edge & Cloud Computing</td><td class="border border-gray-400">2021–23</td><td class="border border-gray-400">Tamal Das</td><td class="border border-gray-400">Multiple Co-PIs</td><td class="border border-gray-400">–</td></tr>
        </tbody>
      </table>
    </div>

    <div class="row justify-content-center mb-4">
      <div class="col-lg-8 text-center">
        <h2 class="section-title mt-14 ">Consultancy/Testing Projects in the past five years</h2>
      </div>
    </div>

<div class="table-responsive">
  <table class="table table-bordered table-striped">
    <thead class="thead-dark">
      <tr>
        <th class="border border-gray-400 px-4 py-2">Title</th>
        <th class="border border-gray-400 px-4 py-2">Area</th>
        <th class="border border-gray-400 px-4 py-2">Duration</th>
        <th class="border border-gray-400 px-4 py-2">PI</th>
        <th class="border border-gray-400 px-4 py-2">Co-PI</th>
        <th class="border border-gray-400 px-4 py-2">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="border border-gray-400 px-4 py-2">Automatic Diarization of Multiple Speakers in Audio Recordings Using AI/ML Algorithms for Mandarin Language</td>
        <td class="border border-gray-400 px-4 py-2">Deep Learning</td>
        <td class="border border-gray-400 px-4 py-2">6 Months</td>
        <td class="border border-gray-400 px-4 py-2">Dr. Achyut Mani Tripathi</td>
        <td class="border border-gray-400 px-4 py-2">Dr. K. Anand</td>
        <td class="border border-gray-400 px-4 py-2">Ongoing</td>
      </tr>
      <tr class="border border-gray-400 px-4 py-2">
        <td class="border border-gray-400 px-4 py-2">AI for Financial Inclusion</td>
        <td class="border border-gray-400 px-4 py-2">Multi-modal AI applications</td>
        <td class="border border-gray-400 px-4 py-2">2023-2025</td>
\        <td class="border border-gray-400 px-4 py-2">Konjengbam Anand</td>
        <td class="border border-gray-400 px-4 py-2">Ongoing</td>
      </tr>
      <tr class="border border-gray-400 px-4 py-2">
        <td class="border border-gray-400 px-4 py-2">Development of Domain-Specific Language (DSL) for Radio Access Network (RAN) Software</td>
        <td class="border border-gray-400 px-4 py-2">Compilers</td>
        <td class="border border-gray-400 px-4 py-2">5 months (Sep 2024 - Apr 2025)</td>
        <td class="border border-gray-400 px-4 py-2">Dr. Nikhil D Hegde</td>
        <td class="border border-gray-400 px-4 py-2">-</td>
        <td class="border border-gray-400 px-4 py-2">Ongoing</td>
      </tr>
      <tr class="border border-gray-400 px-4 py-2">
        <td class="border border-gray-400 px-4 py-2">Compiler Optimizations in LLVM-Context</td>
        <td class="border border-gray-400 px-4 py-2">Compilers</td>
        <td class="border border-gray-400 px-4 py-2">5 months (Apr 2025 - July 2025)</td>
        <td class="border border-gray-400 px-4 py-2">Dr. Nikhil D Hegde</td>
        <td class="border border-gray-400 px-4 py-2">-</td>
        <td class="border border-gray-400 px-4 py-2">Ongoing</td>
      </tr>
      <tr class="border border-gray-400 px-4 py-2">
        <td class="border border-gray-400 px-4 py-2">Executive Training</td>
        <td class="border border-gray-400 px-4 py-2">Cloud Computing</td>
        <td class="border border-gray-400 px-4 py-2">Aug - Oct 2020</td>
        <td class="border border-gray-400 px-4 py-2">Tamal Das</td>
        <td class="border border-gray-400 px-4 py-2">Rajshekhar Bhatt</td>
        <td class="border border-gray-400 px-4 py-2">Completed</td>
      </tr>
    </tbody>
  </table>
</div>

  </div>
</section>


      {/* Publications Section */}
      {/* <Section id="publications" title="Publications">
        <div className="mb-6 bg-gray-50 border border-gray-200 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Recent Publications</h3>
          <p className="text-sm text-gray-600">
            Below is a selection of recent publications from our faculty. For a complete list, please visit individual faculty profiles.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {publications.map((publication, index) => (
            <PublicationCard 
              key={index}
              title={publication.title}
              authors={publication.authors}
              journal={publication.journal}
              year={publication.year}
              doi={publication.doi}
            />
          ))}
        </div>
      </Section> */}

      {/* Research Areas Section */}
      {/* <Section id="research-areas" title="Research Areas">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchAreas.map((area, index) => (
            <ResearchAreaCard 
              key={index}
              title={area.title}
              description={area.description}
              faculty={area.faculty}
              keywords={area.keywords}
            />
          ))}
        </div>
      </Section> */}

      {/* Patents Section */}
      {/* <Section id="patents" title="Patents">
        <div className="mb-6 bg-gray-50 border border-gray-200 p-4 rounded-md">
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Intellectual Property</h3>
          <p className="text-sm text-gray-600">
            The patents and intellectual property developed by our faculty members demonstrate our commitment to innovative research with real-world applications.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {patents.map((patent, index) => (
            <PatentCard 
              key={index}
              title={patent.title}
              inventors={patent.inventors}
              filingDate={patent.filingDate}
              patentNumber={patent.patentNumber}
              status={patent.status}
            />
          ))}
        </div>
      </Section> */}
      
      {/* Back to Top Button */}
      <div className="text-center mt-10">
        <Link
          to="research-top"
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
};

export default Research; 