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
const FacultyCard = ({ name, title, image, expertise, email, phone, website }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <div className="w-48 h-48 mx-auto mt-4 mb-2 bg-gray-100 flex items-center justify-center rounded-lg overflow-hidden">
        {image ? (
          <img 
            src={image}
            alt={name} 
            className="w-full h-full object-cover"
            onError={(e) => {
              e.target.onerror = null; // Prevent infinite fallback loop
              e.target.style.display = 'none';
              e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
            }}
          />
        ) : null}
        <div className={`text-8xl text-indigo-200 ${image ? 'hidden' : ''}`}>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-24 h-24">
            <path fillRule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clipRule="evenodd" />
          </svg>
        </div>
      </div>
      <div className="p-4 flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
        <p className="text-indigo-600 font-medium">{title}</p>
        {expertise && (
          <div className="mt-2">
            <p className="text-sm text-gray-700 font-medium">Research Areas</p>
            <p className="text-sm text-gray-600">{expertise}</p>
          </div>
        )}
      </div>
      <div className="p-4 bg-gray-50 border-t border-gray-100">
        {email && (
          <div className="flex items-center text-sm mb-1">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
            </svg>
            <a href={`mailto:${email}`} className="text-indigo-600 hover:underline truncate">{email}</a>
          </div>
        )}
        {phone && (
          <div className="flex items-center text-sm mb-1">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="text-gray-600 truncate">{phone}</span>
          </div>
        )}
        {website && (
          <div className="flex items-center text-sm">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M12.586 4.586a2 2 0 112.828 2.828l-3 3a2 2 0 01-2.828 0 1 1 0 00-1.414 1.414 4 4 0 005.656 0l3-3a4 4 0 00-5.656-5.656l-1.5 1.5a1 1 0 101.414 1.414l1.5-1.5zm-5 5a2 2 0 012.828 0 1 1 0 101.414-1.414 4 4 0 00-5.656 0l-3 3a4 4 0 105.656 5.656l1.5-1.5a1 1 0 10-1.414-1.414l-1.5 1.5a2 2 0 11-2.828-2.828l3-3z" clipRule="evenodd"></path>
            </svg>
            <a href={website} target="_blank" rel="noopener noreferrer" className="text-indigo-600 hover:underline truncate">Website</a>
          </div>
        )}
      </div>
    </div>
  );
};

// Staff Card Component
const StaffCard = ({ name, title, image, email, phone, office }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden flex flex-col h-full">
      <div className="p-4 flex items-start border-b border-gray-100">
        <div className="flex-shrink-0 mr-4">
          <div className="w-20 h-20 rounded-full overflow-hidden bg-gray-100 flex items-center justify-center">
            {image ? (
              <img 
                src={image}
                alt={name} 
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.target.onerror = null; // Prevent infinite fallback loop
                  e.target.style.display = 'none';
                  e.target.parentNode.classList.add('flex', 'items-center', 'justify-center');
                }}
              />
            ) : null}
            <div className={`text-4xl text-indigo-200 ${image ? 'hidden' : ''}`}>
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
        {phone && (
          <div className="flex items-center mb-2">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"></path>
            </svg>
            <span className="text-gray-600 truncate">{phone}</span>
          </div>
        )}
        {office && (
          <div className="flex items-center">
            <svg className="w-4 h-4 mr-2 text-gray-500 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 01-1 1H5a1 1 0 01-1-1V4zm3 1h6v4H7V5zm8 8v2h1v1H4v-1h1v-2a1 1 0 011-1h8a1 1 0 011 1z" clipRule="evenodd"></path>
            </svg>
            <span className="text-gray-600 truncate">{office}</span>
          </div>
        )}
      </div>
    </div>
  );
};

// Former Member Card Component
const FormerMemberCard = ({ name, title, period, currentAffiliation }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 h-full">
      <h3 className="text-lg font-semibold text-gray-800">{name}</h3>
      <p className="text-indigo-600 text-sm">{title}</p>
      {period && <p className="text-sm text-gray-600 mt-1">Period: {period}</p>}
      {currentAffiliation && (
        <div className="mt-2 text-sm">
          <p className="text-gray-700 font-medium">Current Affiliation</p>
          <p className="text-gray-600">{currentAffiliation}</p>
        </div>
      )}
    </div>
  );
};

// People Page Component
const People = () => {
  // HOD and Associate Head data
  const leadership = [
    {
      name: "Dr. Ramchandra Phawade",
      title: "Assistant Professor and Head of Department",
      expertise: "Computer Science and Engineering",
      email: "prb@iitdh.ac.in",
      phone: "+91-836-2212-001",
      website: "https://iitdh.ac.in/prb/",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/phawade.jpg"
    },
    {
      name: "Dr. Vandana Bharti",
      title: "Assistant Professor and Associate Head",
      expertise: "Computer Science and Engineering",
      email: "vandana@iitdh.ac.in",
      phone: "+91-836-2212-002",
      website: "https://sites.google.com/iitdh.ac.in/vandana",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/VB_iitdh%20-%20Vandana%20Bharti.png"
    }
  ];

  // Faculty data
  const facultyMembers = [
    {
      name: "Dr. Dileep A D",
      title: "Professor and Dean Administration",
      expertise: "Computer Science and Engineering",
      email: "addileep@iitdh.ac.in",
      phone: "+91-836-2212-003",
      website: "https://faculty.iitmandi.ac.in/~addileep/",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/Dileep%20-%20Dileep%20A%20D.jpg"
    },
    {
      name: "Dr. Achyut Mani Tripathi",
      title: "Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "t.achyut@iitdh.ac.in",
      phone: "+91-836-2212-004",
      website: "https://achyutmani.github.io/",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/Achyut%20-%20Achyut%20Mani%20Tripathi%20-%20Achyut%20Mani%20Tripathi.jpeg"
    },
    {
      name: "Dr. Gayathri Ananthanarayanan",
      title: "Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "gayathri@iitdh.ac.in",
      phone: "+91-836-2212-005",
      website: "https://homepages.iitdh.ac.in/~gayathri/",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/recent-photo%20-%20Gayathri%20Ananthanarayanan.jpg"
    },
    {
      name: "Dr. Jivnesh Balasaheb Sandhan",
      title: "Visiting Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "jivnesh@iitdh.ac.in",
      phone: "+91-836-2212-006",
      website: "https://jivnesh.github.io/",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/Jivnesh_500%20-%20Jivnesh%20Balasaheb%20Sandhan_0.png"
    },
    {
      name: "Dr. Kedar Vithal Khandeparkar",
      title: "Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "kedark@iitdh.ac.in",
      phone: "+91-836-2212-007",
      website: "https://iitdh.ac.in/~kedark/",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/kedar2%20-%20Kedar%20Vithal%20Khandeparkar.jpeg"
    },
    {
      name: "Dr. Konjengbam Anand",
      title: "Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "konjengbam.anand@iitdh.ac.in",
      phone: "+91-836-2212-008",
      website: "https://sites.google.com/view/drkonjengbamanand?pli=1",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/anand%20profile23c%20-%20Konjengbam%20Anand_0.jpg"
    },
    {
      name: "Dr. Koteswararao Kondepu",
      title: "Associate Professor and Associate Dean IPS Network",
      expertise: "Computer Science and Engineering",
      email: "k.kondepu@iitdh.ac.in",
      phone: "+91-836-2212-009",
      website: "https://scholar.google.com/citations?user=X-yZFQkAAAAJ&hl=en",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/kondepu.jpeg"
    },
    {
      name: "Dr. Nikhil D Hegde",
      title: "Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "nikhilh@iitdh.ac.in",
      phone: "+91-836-2212-010",
      website: "https://hegden.github.io/",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/IMG_0847%20-%20Copy%20-%20Nikhil%20Hegde.jpg"
    },
    {
      name: "Dr. Rajshekar K",
      title: "Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "rajshekar.k@iitdh.ac.in",
      phone: "+91-836-2212-011",
      website: "https://www.iitdh.ac.in/rajshekar.k/",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/self%20-%20Rajshekar%20K.jpg"
    },
    {
      name: "Dr. Sandeep R B",
      title: "Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "sandeeprb@iitdh.ac.in",
      phone: "+91-836-2212-012",
      website: "https://sites.google.com/site/homepagesandeeprb/",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/IMG_0599_2%20-%20Sandeep%20Ramani%20Balakrishnan.jpg"
    },
    {
      name: "Dr. Siba Narayan Swain",
      title: "Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "sibaswain@iitdh.ac.in",
      phone: "+91-836-2212-013",
      website: "https://shivanarayan06.wixsite.com/website",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/siba-.png"
    },
    {
      name: "Dr. Tamal Das",
      title: "Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "tamal@iitdh.ac.in",
      phone: "+91-836-2212-014",
      website: "https://sites.google.com/view/dtamal",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/Dec%2016%2C%202018%20%282%29%20-%20Tamal%20Das.jpg"
    },
    {
      name: "Dr. Vijeth J Kotagi",
      title: "Assistant Professor",
      expertise: "Computer Science and Engineering",
      email: "vijethjk@iitdh.ac.in",
      phone: "+91-836-2212-015",
      website: "https://scholar.google.com/citations?user=2d8W5cYAAAAJ",
      image: "https://iitdh.ac.in/sites/default/files/2024-02/Photo%20-%20Vijeth%20Jinachandra%20Kotagi%20-%20Vijeth%20Jinachandra%20Kotagi.jpg"
    }
  ];

  // Staff data from staff.html
  const staffMembers = [
    {
      name: "Abhishek Kumar",
      title: "Junior Assistant",
      email: "abhishekkumar.m@iitdh.ac.in",
      office: "Computer Science and Engineering, Electrical, Electronics and Communication Engineering",
      image: "https://iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2023-10/abhishek.png?h=c683bfe4&itok=voTsqWPU"
    },
    {
      name: "Arunkumar Dindalakoppa",
      title: "Executive Assistant",
      email: "arunkumard@iitdh.ac.in",
      office: "Computer Science and Engineering, Electrical, Electronics and Communication Engineering",
      image: "https://iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2025-02/arunkumar.jpeg?h=0bc399ec&itok=1s2MxsS9"
    },
    {
      name: "Chandrashekar S",
      title: "Junior Technical Superintendent",
      email: "chandrashekar.s@iitdh.ac.in",
      office: "Computer Science and Engineering",
      image: "https://iitdh.ac.in/sites/default/files/styles/profile_picture_crop/public/2024-01/Chandrashekar_S%20-%20Chandrashekar%20S_0.png?itok=06-F4itV"
    }
  ];

  // Sample former members data
  const formerMembers = [
    {
      name: "Dr. Prabuchandran K J",
      title: "Former Assistant Professor",
      // period: "2016-2021",
    },
    {
      name: "Dr. Anantha Padmanabha",
      title: "Former Assistant Professor",
      // period: "2017-2022",
    },
    // {
    //   name: "Dr. Vikram Singh",
    //   title: "Former Professor",
    //   period: "2016-2020",
    //   currentAffiliation: "Indian Institute of Science, Bangalore"
    // },
    
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      {/* Page Title */}
      <div id="people-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">People</h1>
        <p className="text-gray-600">
          Meet the faculty, staff, and former members of the Department of Computer Science and Engineering.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-12">
        <NavCard 
          title="Department Leadership" 
          icon={<i className="fas fa-user-tie"></i>}
          targetId="leadership" 
        />
        <NavCard 
          title="Faculty" 
          icon={<i className="fas fa-chalkboard-teacher"></i>}
          targetId="faculty" 
        />
        <NavCard 
          title="Staff" 
          icon={<i className="fas fa-users"></i>}
          targetId="staff" 
        />
        <NavCard 
          title="Former Members" 
          icon={<i className="fas fa-user-graduate"></i>}
          targetId="former-members" 
        />
      </div>
      
      {/* Leadership Section */}
      <Section id="leadership" title="Department Leadership">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {leadership.map((member, index) => (
            <FacultyCard key={index} {...member} />
          ))}
        </div>
      </Section>

      {/* Faculty Section */}
      <Section id="faculty" title="Faculty Members">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {facultyMembers.map((member, index) => (
            <FacultyCard key={index} {...member} />
          ))}
        </div>
      </Section>

      {/* Staff Section */}
      <Section id="staff" title="Staff Members">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {staffMembers.map((member, index) => (
            <StaffCard key={index} {...member} />
          ))}
        </div>
      </Section>

      {/* Former Members Section */}
      <Section id="former-members" title="Former Members">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {formerMembers.map((member, index) => (
            <FormerMemberCard key={index} {...member} />
          ))}
        </div>
      </Section>
      
      {/* Back to Top Button */}
      <div className="text-center mt-10">
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