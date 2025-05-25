import React from 'react';

const Contact = () => {
  return (
    <div className="py-6 px-4 md:px-8">
      {/* Page Title */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Contact Us</h1>
        <p className="text-gray-600 mt-2">
          Get in touch with the Department of Computer Science and Engineering at IIT Dharwad
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Left Column - Address and General Contact */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 h-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Department Address</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Department of Computer Science & Engineering</h3>
                <p className="text-gray-700">
                  Indian Institute of Technology Dharwad<br />
                  Permanent Campus, Chikkamalligawad<br />
                  Dharwad - 580 011, Karnataka, India
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Department Head</h3>
                <p className="text-gray-700">
                  A1 - 501, Head of Computer Science and Engineering<br />
                  Prof Ramchandra Phawade<br />
                  Phone: +91 8362309624
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Middle Column - Specific Contact Points */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 h-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Contact Points</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Department Office</h3>
                <p className="text-gray-700">
                  Email: <a href="mailto:cse.office@iitdh.ac.in" className="text-indigo-600 hover:underline">cse.office@iitdh.ac.in</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Head CSE</h3>
                <p className="text-gray-700">
                  Email: <a href="mailto:head.cse@iitdh.ac.in" className="text-indigo-600 hover:underline">head.cse@iitdh.ac.in</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">PG Admissions (CSE)</h3>
                <p className="text-gray-700">
                  Email: <a href="mailto:pgadmissions.cse@iitdh.ac.in" className="text-indigo-600 hover:underline">pgadmissions.cse@iitdh.ac.in</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Faculty Recruitment (CS)</h3>
                <p className="text-gray-700">
                  Email: <a href="mailto:facrec.cs@iitdh.ac.in" className="text-indigo-600 hover:underline">facrec.cs@iitdh.ac.in</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Training and Placement Officer (TPO)</h3>
                <p className="text-gray-700">
                  Email: <a href="mailto:tpo@iitdh.ac.in" className="text-indigo-600 hover:underline">tpo@iitdh.ac.in</a>
                </p>
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">Associate Dean R&D, Projects</h3>
                <p className="text-gray-700">
                  Email: <a href="mailto:adean.rnd@iitdh.ac.in" className="text-indigo-600 hover:underline">adean.rnd@iitdh.ac.in</a>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column - Map and Directions */}
        <div className="md:col-span-1">
          <div className="bg-white rounded-lg shadow-sm p-6 h-full">
            <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Location & Directions</h2>
            <div className="space-y-4">
              <div className="bg-gray-100 rounded-md h-56 flex items-center justify-center">
                <p className="text-gray-500 text-center p-4">
                  {/* This is a placeholder for the map - in production, you would integrate Google Maps or similar */}
                  Interactive map would be displayed here
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-gray-800 mb-2">How to Reach</h3>
                <div className="space-y-2">
                  <div>
                    <p className="font-medium text-gray-700">By Air</p>
                    <p className="text-sm text-gray-600">The nearest airport is Hubli Airport (HBX), approximately 30 km from campus. Taxis are available from the airport.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">By Train</p>
                    <p className="text-sm text-gray-600">Dharwad Railway Station is well-connected to major cities. The campus is about 5 km from the station.</p>
                  </div>
                  <div>
                    <p className="font-medium text-gray-700">By Road</p>
                    <p className="text-sm text-gray-600">IIT Dharwad is located on the Pune-Bangalore Highway (NH 48), easily accessible by bus or car.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div>
            <h3 className="font-semibold text-gray-800">What are the office hours of the CSE department?</h3>
            <p className="text-gray-700 mt-1">The department office is open Monday to Friday from 9:00 AM to 5:30 PM. The office remains closed on weekends and public holidays.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How can I schedule a visit to the department?</h3>
            <p className="text-gray-700 mt-1">To schedule a visit, please email <a href="mailto:office.cse@iitdh.ac.in" className="text-indigo-600 hover:underline">office.cse@iitdh.ac.in</a> with your details and purpose of visit at least one week in advance.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">Is there accommodation available for visitors?</h3>
            <p className="text-gray-700 mt-1">IIT Dharwad has a guest house facility for official visitors. For booking inquiries, please contact <a href="mailto:guesthouse@iitdh.ac.in" className="text-indigo-600 hover:underline">guesthouse@iitdh.ac.in</a>.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-800">How do I contact a specific faculty member?</h3>
            <p className="text-gray-700 mt-1">Faculty contact information is available on the People section of our website. You can directly email the faculty member using their individual email addresses.</p>
          </div>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Send Us a Message</h2>
        <div className="mt-4">
          <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="md:col-span-1">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input 
                type="text" 
                id="name" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your name"
              />
            </div>
            <div className="md:col-span-1">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your email"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
              <input 
                type="text" 
                id="subject" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Subject of your message"
              />
            </div>
            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Message</label>
              <textarea 
                id="message" 
                rows="4" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                placeholder="Your message"
              ></textarea>
            </div>
            <div className="md:col-span-2 text-right">
              <button 
                type="submit" 
                className="px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="mt-10 bg-white rounded-lg shadow-sm p-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4 pb-2 border-b border-gray-200">Connect With Us</h2>
        <div className="flex justify-center space-x-6 mt-4">
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            <span className="sr-only">Facebook</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            <span className="sr-only">Twitter</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            <span className="sr-only">LinkedIn</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
            </svg>
          </a>
          <a href="#" className="text-gray-600 hover:text-indigo-600 transition-colors duration-300">
            <span className="sr-only">YouTube</span>
            <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Contact; 