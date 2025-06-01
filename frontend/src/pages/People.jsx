import React from 'react';
import { Link } from 'react-scroll';
import { Mail, Globe } from "lucide-react";
import { useState,useEffect } from 'react';
import axios from 'axios';

const API_URL = "http://localhost:1337/api/people?sort=name"; // Change if deployed

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
        <p className="text-sm text-gray-600 mt-2">View Members</p>
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

// Faculty Card Component

const FacultyCard = ({ name, title, imageUrl, expertise, email, website }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full
                    hover:shadow-lg cursor-pointer transition-shadow duration-300 ease-in-out">
      {/* Image Section */}
      <div className="w-48 h-48 mx-auto mt-4 mb-2 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
        {imageUrl ? (
          <img
            src={imageUrl}
            alt={name}
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null;
              e.target.style.display = "none";
              e.target.parentNode.classList.add("flex", "items-center", "justify-center");
            }}
          />
        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" className="w-24 h-24 text-indigo-300" fill="currentColor" viewBox="0 0 24 24">
            <path
              fillRule="evenodd"
              d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 
              .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 
              0 01-.437-.695z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </div>

      {/* Text Section */}
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-indigo-600 font-medium whitespace-pre-line">{title}</p>

        {expertise && (
          <div className="mt-2">
            <p className="text-sm text-gray-700 font-medium">Research Areas</p>
            <p className="text-sm text-gray-600">{expertise}</p>
          </div>
        )}
      </div>

      {/* Contact Section */}
      <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-1">
        {email && (
          <div className="flex items-center text-sm text-gray-700">
            <Mail className="w-4 h-4 mr-2 text-gray-500" />
            <a href={`mailto:${email}`} className="text-indigo-600 hover:underline truncate">
              {email}
            </a>
          </div>
        )}

        {website && (
          <div className="flex items-center text-sm text-gray-700">
            <Globe className="w-4 h-4 mr-2 text-gray-500" />
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline truncate">
              Website
            </a>
          </div>
        )}
      </div>
    </div>
  );
};




// Staff Card Component
const StaffCard = ({ name, title, imageUrl, email }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full
                    hover:shadow-lg cursor-pointer transition-shadow duration-300 ease-in-out">
      <div className="p-4 flex items-start border-b border-gray-100">
        <div className="flex-shrink-0 mr-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            {imageUrl ? (
              <img
                src={imageUrl}
                alt={name}
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite fallback loop
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
            ) : null}
            <div className={`text-4xl text-indigo-200 ${imageUrl ? 'hidden' : ''}`}>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-10 h-10">
                <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>
        <div className="min-w-0">
          <h3 className="text-lg font-semibold text-gray-800 truncate">{name}</h3>
          <p className="text-indigo-600 truncate">{title}</p>
        </div>
      </div>
      <div className="p-4 bg-gray-50 text-sm flex-grow">
        {email && (
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <a href={`mailto:${email}`} className="text-indigo-600 hover:underline truncate">{email}</a>
          </div>
        )}
      </div>
    </div>
  );
};




// People Page Component
const People = () => {
  // Dean data
  // const Dean = [
  //   {
  //     name: "Prof Pratyasa Bhui",
  //     title: "Associate Professor, Electrical, Electronics and Communication Engineering\nDean, Research & Development (R&D)\nMember, Senate",
  //     expertise: "Power Systems,Smart Grid,Renewable Energy",
  //     email: "dean.rnd@iitdh.ac.in",
  //     website: "https://iitdh.ac.in/pbhui/",
  //     image: "https://www.iitdh.ac.in/sites/default/files/2024-05/Pratyasa%20Bhui.jpg"
  //   }
  // ];

  // // AssociateDean data
  // const AssociateDean = [
  //   {
  //     name: "Prof Sandeep R B",
  //     title: `Assistant Professor, Computer Science and Engineering\nAssociate Dean, Research & Development (R&D) - Projects`,
  //     expertise: "Algorithms, Graph Theory",
  //     email: "sandeeprb@iitdh.ac.in",
  //     website: "https://sites.google.com/site/homepagesandeeprb/",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2024-09/sandeep-photo%20-%20Sandeep%20Ramani%20Balakrishnan.jpg?h=5c7a6dd7&itok=qzsH3arM"
  //   },
  //   {
  //     name: "Prof Rajshekhar V Bhat",
  //     title: `Assistant Professor, Electrical, Electronics and Communication Engineering\nAssociate Dean, Research & Development (R&D)-  External Relations\nMember, Senate`,
  //     expertise: "Broad area of wireless communications and deep learning",
  //     email: "rajshekhar.bhat@iitdh.ac.in",
  //     website: "https://rajshekharvbhat.github.io/",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2023-09/rajbhatnew%20-%20Rajshekhar%20V%20Bhat.jpeg?h=9dceb2a7&itok=opOtZNq-"
  //   }
  // ];
  // // Faculty data
  // const facultyMembers = [
  //   {
  //     name: "Prof Kundan Kumar Singh Sagar",
  //     title: `Assistant Professor, Chemistry\nFaculty In-Charge, Outreach Research & Development - 2`,
  //     expertise: "Bioinorganic, nanocluster, catalysis, small molecule activation",
  //     email: "kksingh@iitdh.ac.in",
  //     website: "https://sites.google.com/iitdh.ac.in/kundan",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2025-02/121bd9c1-056f-4029-897a-e0b9ee873655.jpg?h=d74d5750&itok=kWyChg1k"
  //   },
  //   {
  //     name: "Prof Punnag Chatterjee",
  //     title: `Assistant Professor, Mechanical, Materials and Aerospace Engineering\nFaculty In-Charge, Outreach Research & Development - 1`,
  //     expertise: "Smart structures, vibration and dynamics, aeroelasticity, energy harvesting",
  //     email: "punnag.chatterjee@iitdh.ac.in",
  //     website: "https://sites.google.com/view/punnagchatterjee/home",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2023-09/Punnag_Chatterjee_Website_photo_IITDh_cropped%20-%20Punnag%20Chatterjee.jpg?h=a8890f14&itok=lD39UHv6"
  //   }
  // ];


  // // Staff data from staff.html
  // const staffMembers = [
  //   {
  //     name: "Chetan Basavaraj Totad",
  //     title: "Assistant Registrar",
  //     email: "chetan.totad@iitdh.ac.in",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2024-06/Chetan%20Basavaraj%20Totad_0.jpg?h=af0fce98&itok=mlWynFMO"
  //   },
  //   {
  //     name: "Harsha Chavan",
  //     title: "Executive Assistant",
  //     email: "harshachavan@iitdh.ac.in",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2025-02/harsha.jpeg?h=8538a345&itok=Rc315F6L"
  //   }, {
  //     name: "Mallanagoud S Patil",
  //     title: "Junior Assistant",
  //     email: "mallanagoud@iitdh.ac.in",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2023-09/b775356d-8a89-471b-b4f0-4754fb8b1ef5%20-%20Mallanagoud%20Somanagoud%20Patil.jpg?h=a657718e&itok=6SXlbzZL"
  //   },
  //   {
  //     name: "Monica A Kuri",
  //     title: "Executive Assistant",
  //     email: "monicakuri@iitdh.ac.in",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2024-11/WhatsApp%20Image%202024-10-18%20at%203.19.29%20PM%20-%20Manpower%20IITDh.jpeg?h=3d2982b5&itok=ixaQnflg"
  //   },
  //   {
  //     name: "Nanda Goudar",
  //     title: "Executive Assistant",
  //     email: "nanda.goudar@iitdh.ac.in",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2024-08/IMG-20240722-WA0023~2%20-%20Nanda%20Goudar.jpg?h=26da0c27&itok=rO5S8S9J"
  //   },
  //   {
  //     name: "Praveen M Hodlur",
  //     title: "Junior Superintendent",
  //     email: "praveenhodlur@iitdh.ac.in",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2024-02/Praveen%20Hodlur%20photo%20-%20Praveen%20Hodlur.jpg?itok=c8js0h5F"
  //   },
  //   {
  //     name: "Raksha Nagaling",
  //     title: "Executive Assistant",
  //     email: "raksha.n@iitdh.ac.in",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2024-08/WhatsApp%20Image%202024-08-19%20at%204.52.15%20PM%20%281%29%20-%20Dean%20RND%20Office.jpeg?h=f2ea0a24&itok=flPTSB4G"
  //   },
  //   {
  //     name: "Renuka G Tallur",
  //     title: "Executive Assistant",
  //     email: "renukagt@iitdh.ac.in",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2025-04/WhatsApp%20Image%202025-04-02%20at%201.28.33%20PM.jpeg?h=bcacaa9d&itok=Q7bNIC0y"
  //   },
  //   {
  //     name: "Soubhagyalaxmi Wagh",
  //     title: "Executive assistant",
  //     email: "soubhagyawagh@iitdh.ac.in",
  //     image: "https://www.iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2024-08/Soubhagyalaxmi%20wagh.png?itok=aNyI91S0"
  //   },
  // ];

  const [allPeople, setAllPeople] = useState([]);
  const [loading, setLoading] = useState(true);

  // Categorized lists (computed from allPeople)
  const Dean = allPeople.filter((p) => p.type === "dean");
  const AssociateDean = allPeople.filter((p) => p.type === "associateDean");
  const facultyMembers = allPeople.filter(
    (p) =>
      p.type === "faculty" ||
      (p.type === "facultyInCharge" || p.type === "faculty-in-charge") // support variants
  );
  const staffMembers = allPeople.filter((p) => p.type === "staff");

  // console.log("dean" + Dean);
  // console.log("staff" + staffMembers)
  
  useEffect(() => {
    // Try cache first
    const cached = localStorage.getItem("people_cache_v1");
    if (cached) {
      setAllPeople(JSON.parse(cached));
      setLoading(false);
    }

    // Always update in background
    axios
      .get(API_URL)
      .then((res) => {
        // Strapi v4 response: res.data.data is array of { id, attributes: { ...fields } }
        const fetched = res.data.data;
        setAllPeople(fetched);
        localStorage.setItem("people_cache_v1", JSON.stringify(fetched));
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
        if (!cached) setAllPeople([]); // No data at all
      });
  }, []);

  // Optional: show loading state
  if (loading && allPeople.length === 0)
    return (
      <div className="w-full py-12 text-center text-lg text-gray-500">
        Loading people...
      </div>
    );

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Title */}
      <div id="people-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">People</h1>
        <p className="text-gray-600">
          Meet the Dean, Associate Dean, faculty Incharge and staff of the Research and Development Section.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        <NavCard
          title="Dean"
          icon={<i className="fas fa-user-tie"></i>}
          targetId="Dean"
        />
        <NavCard
          title="Associate Dean"
          icon={<i className="fas fa-chalkboard-teacher"></i>}
          targetId="AssociateDean"
        />
        <NavCard
          title="Faculty In-Charge"
          icon={<i className="fas fa-users"></i>}
          targetId="Faculty-In-Charge"
        />
        <NavCard
          title="Staff"
          icon={<i className="fas fa-user-graduate"></i>}
          targetId="Staff"
        />
      </div>

      {/* Dean Section */}
      <Section id="Dean" title="Dean">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Dean.map((member) => (
            <FacultyCard key={member.id} {...member} />
          ))}
        </div>
      </Section>

      {/* AssociateDean Section */}
      <Section id="AssociateDean" title="Associate Dean">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {AssociateDean.map((member) => (
            <FacultyCard key={member.id} {...member} />
          ))}
        </div>
      </Section>

      {/* Faculty In-Charge Section */}
      <Section id="Faculty-In-Charge" title="Faculty In-Charge">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {facultyMembers.map((member) => (
            <FacultyCard key={member.id} {...member} />
          ))}
        </div>
      </Section>

      {/* Staff Section */}
      <Section id="Staff" title="Staff">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers.map((member) => (
            <StaffCard key={member.id} {...member} />
          ))}
        </div>
      </Section>

      {/* Back to Top Button */}
      <div className="cursor-pointer text-center mt-10">
        <Link
          to="people-top"
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

export default People; 