import React, { useState } from 'react';

const csrData = [
{
    name: 'IIT Dharwad CSR Brochure',
    wordLink: 'https://intranet.iitdh.ac.in:444/CSR/IIT%20Dharwad%20-%20CSR%20Brochure.pdf',
  },
  {
    name: 'CSR Eligibility Cover Letter',
    wordLink: 'https://intranet.iitdh.ac.in:444/CSR/3%20CSR%20Eligibility%20Cover%20Letter.pdf',
  },
  {
    name: 'CSR Amendments',
    wordLink: 'https://intranet.iitdh.ac.in:444/CSR/3a%20CSR%20Amendments.pdf',
  },
  {
    name: 'DSIR Recognition',
    wordLink: 'https://intranet.iitdh.ac.in:444/CSR/3b%20DSIR%20Recognition.pdf', // Assuming link format, you can replace with actual if available
  },
  {
    name: 'Exemption Certificate',
    wordLink: 'https://intranet.iitdh.ac.in:444/CSR/3c%2080G%20Exemption%20Certificate.pdf',
  }
];


export default function Csr() {
  const [showModal, setShowModal] = useState(false);
  const [selectedDocLink, setSelectedDocLink] = useState('');
  const [rawDocLink, setRawDocLink] = useState('');

  const handleViewClick = (link) => {
    const encodedLink = encodeURIComponent(link);
    const viewerURL = `https://docs.google.com/gview?url=${encodedLink}&embedded=true`;
    setSelectedDocLink(viewerURL);
    setRawDocLink(link);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-6 lg:p-8 text-gray-800">
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">CSR Information</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 shadow-md bg-white">
          <thead className="bg-gray-200 text-sm sm:text-base">
            <tr>
              <th className="p-2 sm:p-3 border">Sl No.</th>
              <th className="p-2 sm:p-3 border text-left">Form Name</th>
              <th className="p-2 sm:p-3 border">View PDF</th>
              {/* <th className="p-2 sm:p-3 border">PDF</th> */}
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base">
            {csrData.map((form, index) => (
              <tr key={index} className="text-center hover:bg-gray-50">
                <td className="p-2 sm:p-3 border">{index + 1}</td>
                <td className="p-2 sm:p-3 border text-left">{form.name}</td>
                <td className="p-2 sm:p-3 border">
                  <a
                    href={form.wordLink}
                    className="text-purple-600 underline hover:text-purple-800"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </td>
                {/* <td className="p-2 sm:p-3 border">
                  <button
                    onClick={() => handleViewClick(form.wordLink)}
                    className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
                  >
                    View
                  </button>
                </td> */}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-2 sm:px-4">
          <div className="bg-white w-full max-w-5xl rounded-xl shadow-2xl overflow-hidden relative">
            <div className="flex justify-between items-center px-4 py-3 border-b">
              <h2 className="text-lg sm:text-xl font-semibold">Document Preview</h2>
              <button
                onClick={() => setShowModal(false)}
                className="text-2xl font-bold text-red-600 hover:text-red-800"
              >
                &times;
              </button>
            </div>
            <div className="w-full h-[60vh] sm:h-[70vh]">
              <iframe
                src={selectedDocLink}
                className="w-full h-full"
                title="Document Viewer"
              ></iframe>
            </div>
            <div className="flex flex-wrap justify-end gap-2 p-4 border-t bg-gray-50">
              <a
                href={rawDocLink}
                download
                className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 text-sm sm:text-base"
              >
                Download Word
              </a>
              <button
                onClick={() => window.print()}
                className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 text-sm sm:text-base"
              >
                Save as PDF
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
