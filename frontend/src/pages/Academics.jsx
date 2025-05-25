import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import PDFViewer from '../components/PDFViewer/PDFViewer';

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

// Helper function to render description content
const renderDescription = (description) => {
  if (!description) return null;
  
  return description.map((item, index) => {
    if (item.type === 'paragraph') {
      return (
        <p key={index} className="text-gray-700 mb-2">
          {item.children[0].text}
        </p>
      );
    } else if (item.type === 'list') {
      return (
        <ul key={index} className="list-disc list-inside text-gray-700 mb-2">
          {item.children.map((listItem, listIndex) => (
            <li key={listIndex}>{listItem.children[0].text}</li>
          ))}
        </ul>
      );
    }
    return null;
  });
};

// Helper function to render grading table
const renderGradingTable = (grading) => {
  if (!grading) return null;

  // Split the markdown table into rows
  const rows = grading.trim().split('\n').filter(row => row.includes('|'));
  
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {rows[0].split('|').filter(cell => cell.trim()).map((header, index) => (
              <th
                key={index}
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header.trim()}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {rows.slice(2).map((row, rowIndex) => (
            <tr key={rowIndex}>
              {row.split('|').filter(cell => cell.trim()).map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-500"
                >
                  {cell.trim()}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Helper function to render course content
const renderCourseContent = (about) => {
  if (!about) return null;

  const courses = [];
  let currentCourse = null;

  about.forEach((item) => {
    if (item.type === 'paragraph' && item.children) {
      const text = item.children.map(child => child.text).join('');
      if (text.trim()) {
        // Check if this is a course title (contains a course code pattern like CS3XX or CS4XX)
        if (text.match(/CS[34]\d{2}/)) {
          if (currentCourse) {
            courses.push(currentCourse);
          }
          const [title, ...descParts] = text.split('\n').filter(line => line.trim());
          currentCourse = {
            title: title.trim(),
            description: descParts.join(' ').trim()
          };
        } else if (currentCourse) {
          // This is additional description
          currentCourse.description += ' ' + text.trim();
        }
      }
    } else if (item.type === 'heading' && item.children) {
      const title = item.children[0].text;
      if (title.match(/CS[34]\d{2}/)) {
        if (currentCourse) {
          courses.push(currentCourse);
        }
        currentCourse = {
          title: title.trim(),
          description: ''
        };
      }
    }
  });

  if (currentCourse) {
    courses.push(currentCourse);
  }

  return courses.map((course, index) => (
    <div key={index} className="pb-2 border-b border-gray-100 last:border-b-0">
      <div className="font-medium">{course.title}</div>
      <div className="text-sm text-gray-600">{course.description}</div>
    </div>
  ));
};

// Academics Page
const Academics = () => {
  const [academicRules, setAcademicRules] = useState([]);
  const [courses, setCourses] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        setError(null);

        // Fetch academic rules
        const rulesResponse = await fetch("https://cse.iitdh.ac.in/strapi/api/academicrules");
        if (!rulesResponse.ok) {
          throw new Error('Failed to fetch academic rules');
        }
        const rulesJson = await rulesResponse.json();

        // Fetch courses
        const coursesResponse = await fetch("https://cse.iitdh.ac.in/strapi/api/courses");
        if (!coursesResponse.ok) {
          throw new Error('Failed to fetch courses');
        }
        const coursesJson = await coursesResponse.json();
        
        console.log('Courses data:', coursesJson.data);
        console.log('Core courses:', coursesJson.data.filter(course => course.coursetype === 'core course'));
        console.log('Elective courses:', coursesJson.data.filter(course => course.coursetype === 'elective courses'));

        // Cache the data
        localStorage.setItem('cachedAcademicRules', JSON.stringify(rulesJson.data));
        localStorage.setItem('cachedCourses', JSON.stringify(coursesJson.data));
        localStorage.setItem('academicDataCacheTimestamp', Date.now().toString());

        setAcademicRules(rulesJson.data);
        setCourses(coursesJson.data);
      } catch (err) {
        setError(err.message);
        console.error('Error fetching data:', err);
      } finally {
        setIsLoading(false);
      }
    };

    // Check cache first
    const cachedRules = localStorage.getItem('cachedAcademicRules');
    const cachedCourses = localStorage.getItem('cachedCourses');
    const cacheTimestamp = localStorage.getItem('academicDataCacheTimestamp');
    const now = Date.now();

    if (cachedRules && cachedCourses && cacheTimestamp && (now - parseInt(cacheTimestamp)) < 300000) {
      setAcademicRules(JSON.parse(cachedRules));
      setCourses(JSON.parse(cachedCourses));
      setIsLoading(false);
    } else {
      fetchData();
    }
  }, []);

  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div id="academics-top" className="mb-10">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Academics</h1>
        <p className="text-gray-600">
          Learn about our academic programs, courses, and resources for computer science and engineering students.
        </p>
      </div>

      {/* Navigation Cards */}
      <div className="mb-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-6">
          <NavCard 
            title="Time Table" 
            icon={<i className="far fa-clock"></i>}
            targetId="timetable" 
          />
          <NavCard 
            title="Courses" 
            icon={<i className="fas fa-book"></i>}
            targetId="courses" 
          />
          <NavCard 
            title="Curriculum" 
            icon={<i className="fas fa-graduation-cap"></i>}
            targetId="curriculum" 
          />
          <NavCard 
            title="Rules" 
            icon={<i className="fas fa-gavel"></i>}
            targetId="rules" 
          />
          <NavCard 
            title="FAQs" 
            icon={<i className="fas fa-question-circle"></i>}
            targetId="faq" 
          />
        </div>
      </div>

      {/* Time Table Section */}
      <Section id="timetable" title="Time Table">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">Current Semester Schedule</h3>
          <div className="mb-4">
            <p className="text-gray-600">
              Below is the timetable for the current semester. You can navigate through the pages, 
              view details, and download the complete schedule.
            </p>
          </div>
          
          {/* PDF Viewer Component */}
          <div className="mt-6">
            <PDFViewer pdfFile="/timetable.pdf" />
          </div>
          
          {/* Fallback direct link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-500 mb-2">
              If you're having trouble viewing the PDF, you can access it directly:
            </p>
            <a 
              href="/timetable.pdf" 
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-800 font-medium inline-flex items-center"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              Open Timetable PDF
            </a>
          </div>
        </div>
      </Section>

      {/* Courses Section */}
      <Section id="courses" title="Courses">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Core Courses</h3>
            {isLoading ? (
              <div className="animate-pulse space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="pb-2 border-b border-gray-100">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-red-500 p-4 bg-red-50 rounded-lg">
                <p>Error loading courses: {error}</p>
                <p className="text-sm mt-2">Please try refreshing the page.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {courses
                  .filter(course => course.coursetype === 'core course')
                  .map(course => (
                    <div key={course.id}>
                      {renderCourseContent(course.about)}
                    </div>
                  ))}
              </div>
            )}
          </div>
          
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h3 className="text-xl font-semibold mb-4">Elective Courses</h3>
            {isLoading ? (
              <div className="animate-pulse space-y-4">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="pb-2 border-b border-gray-100">
                    <div className="h-4 bg-gray-200 rounded w-3/4 mb-2"></div>
                    <div className="h-3 bg-gray-200 rounded w-5/6"></div>
                  </div>
                ))}
              </div>
            ) : error ? (
              <div className="text-red-500 p-4 bg-red-50 rounded-lg">
                <p>Error loading courses: {error}</p>
                <p className="text-sm mt-2">Please try refreshing the page.</p>
              </div>
            ) : (
              <div className="space-y-3">
                {courses
                  .filter(course => course.coursetype === 'elective courses')
                  .map(course => (
                    <div key={course.id}>
                      {renderCourseContent(course.about)}
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* Curriculum Section */}
      <Section id="curriculum" title="Curriculum">
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h3 className="text-xl font-semibold mb-4">B.Tech Program Structure</h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-lg font-medium mb-2">First Year</h4>
              <p className="text-gray-700 mb-3">Foundation courses in mathematics, programming, and engineering principles.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium">Semester 1</div>
                  <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                    <li>Calculus and Linear Algebra</li>
                    <li>Introduction to Programming</li>
                    <li>Digital Logic Design</li>
                    <li>Physics for Computing</li>
                    <li>Technical Communication</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium">Semester 2</div>
                  <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                    <li>Discrete Mathematics</li>
                    <li>Data Structures</li>
                    <li>Computer Organization</li>
                    <li>Probability and Statistics</li>
                    <li>Engineering Ethics</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-medium mb-2">Second Year</h4>
              <p className="text-gray-700 mb-3">Core computer science subjects and fundamental theory.</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium">Semester 3</div>
                  <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                    <li>Design and Analysis of Algorithms</li>
                    <li>Object Oriented Programming</li>
                    <li>Computer Architecture</li>
                    <li>Formal Languages and Automata</li>
                    <li>Economics for Engineers</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-3 rounded-md">
                  <div className="font-medium">Semester 4</div>
                  <ul className="text-sm text-gray-600 mt-1 list-disc list-inside">
                    <li>Operating Systems</li>
                    <li>Database Management Systems</li>
                    <li>Computer Networks</li>
                    <li>Software Engineering</li>
                    <li>Technical Writing</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center mt-8">
              <a href="#" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition duration-300">
                Download Complete Curriculum PDF
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Rules Section */}
      <Section id="rules" title="Academic Rules">
        <div className="bg-white rounded-lg shadow-sm p-6">
          {isLoading ? (
            <div className="animate-pulse space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i}>
                  <div className="h-8 bg-gray-200 rounded w-3/4 mb-4"></div>
                  <div className="space-y-3">
                    <div className="h-4 bg-gray-200 rounded"></div>
                    <div className="h-4 bg-gray-200 rounded w-5/6"></div>
                    <div className="h-4 bg-gray-200 rounded w-4/6"></div>
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-red-500 p-4 bg-red-50 rounded-lg">
              <p>Error loading academic rules: {error}</p>
              <p className="text-sm mt-2">Please try refreshing the page.</p>
            </div>
          ) : (
            <div className="space-y-8">
              {academicRules.map((rule) => (
                <div key={rule.id} className="border-b border-gray-200 pb-6 last:border-b-0 last:pb-0">
                  <h3 className="text-xl font-semibold mb-4">{rule.Title}</h3>
                  {renderDescription(rule.description)}
                  {renderGradingTable(rule.grading)}
                </div>
              ))}
            </div>
          )}
        </div>
      </Section>

      {/* FAQs Section */}
      <Section id="faq" title="Frequently Asked Questions">
        <div className="space-y-8">
          <div className="bg-white rounded-lg shadow-sm p-6">
            <div className="space-y-6">
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-800">How do I register for courses?</h3>
                <p className="mt-2 text-gray-600">
                  Course registration is done through the online student portal at the beginning of each semester. The registration window is typically open for two weeks, and students must consult with their academic advisor before finalizing their course selection.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-800">What is the process for adding/dropping courses?</h3>
                <p className="mt-2 text-gray-600">
                  Students can add or drop courses during the first two weeks of the semester without any penalty. After this period, dropping a course will result in a 'W' (Withdrawal) grade on the transcript. No course changes are permitted after the fourth week.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-800">How is the CGPA calculated?</h3>
                <p className="mt-2 text-gray-600">
                  The Cumulative Grade Point Average (CGPA) is calculated by multiplying the grade point value of each course by its credit hours, summing these values, and dividing by the total number of credit hours attempted. The result is rounded to two decimal places.
                </p>
              </div>
              
              <div className="border-b border-gray-200 pb-4">
                <h3 className="text-lg font-medium text-gray-800">What resources are available for academic support?</h3>
                <p className="mt-2 text-gray-600">
                  The department offers various support resources including faculty office hours, teaching assistants, peer tutoring programs, and the academic learning center. Additionally, the library provides access to study spaces, reference materials, and online resources.
                </p>
              </div>
              
              <div>
                <h3 className="text-lg font-medium text-gray-800">What is the minimum CGPA required to avoid academic probation?</h3>
                <p className="mt-2 text-gray-600">
                  Students must maintain a minimum CGPA of 5.0 to remain in good academic standing. Those falling below this threshold will be placed on academic probation and will need to meet with an academic advisor to develop an improvement plan.
                </p>
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 p-4 rounded-lg">
              <h3 className="text-lg font-medium text-gray-800">Still have questions?</h3>
              <p className="mt-2 text-gray-600">
                Contact the Academic Office at <a href="mailto:academics@cs.iitdh.ac.in" className="text-indigo-600 hover:underline">academics@cs.iitdh.ac.in</a> or visit during office hours (Monday-Friday, 9:00 AM - 5:00 PM).
              </p>
            </div>
          </div>
        </div>
      </Section>
      
      {/* Back to Top Button */}
      <div className="text-center mt-10">
        <Link
          to="academics-top"
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

export default Academics;