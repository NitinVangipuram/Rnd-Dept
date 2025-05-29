import React, { useState } from 'react';

const formData = [
{
    name: 'Request for the Extension of Duration of Project Staff',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Request_for_the_Extension_of_Duration_of_Project_Staff.docx',
  },
  {
    name: 'Disbursal Form for Consultancy Project/Course',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Consultancy_Amt_Disbursal_Form.docx',
  },
  {
    name: 'Asset Retention / Return Form',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Asset_Retention%20-%20Return%20Form.docx',
  },
  {
    name: 'Form to be submitted for Projects involving extended Foreign Travel',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Foreign_Travel_Project_Form.docx', // Assuming link format, you can replace with actual if available
  },
  {
    name: 'Project Proposal Submission Form',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Project_Proposal_Submission_Form.docx',
  },
  {
    name: 'Reimbursement Form',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Reimbursement_Form.docx',
  },
  {
    name: 'Advance Form',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Advance_Form.docx',
  },
  {
    name: 'Settlement Form',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Settlement_Form.docx',
  },
  {
    name: 'TA Form',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/TA_Form.docx',
  },
  {
    name: 'Indent form A - For direct purchases of value up to ₹ 50,000',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Indent_Form_A.docx',
  },
  {
    name: 'Indent form B - For purchases between ₹ 50,001 to ₹ 10 Lakhs',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Indent_Form_B.docx',
  },
  {
    name: 'Indent form C - For purchases above ₹ 10 lakhs',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Indent_Form_C.docx',
  },
  {
    name: 'Verification Report Form',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Verification_Report_Form.docx',
  },
  {
    name: 'Project Completion Report',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Project_Completion_Report.docx',
  },
  {
    name: 'Bank Mandate Form with PFMS details',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Bank_Mandate_Form_PFMS.docx',
  },
  {
    name: 'IIT Dharwad PAN',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/IIT_Dharwad_PAN.docx',
  },
  {
    name: 'IIT Dharwad GST registration',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/IIT_Dharwad_GST_Registration.docx',
  },
  {
    name: 'Consumable Stock Form',
    wordLink: 'https://intranet.iitdh.ac.in:444/rnd/forms/Consumable_Stock_Form.docx',
  }
];


export default function Forms() {
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
      <h1 className="text-2xl sm:text-3xl font-bold mb-6 text-center">R&D Forms</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-gray-300 shadow-md bg-white">
          <thead className="bg-gray-200 text-sm sm:text-base">
            <tr>
              <th className="p-2 sm:p-3 border">Sl No.</th>
              <th className="p-2 sm:p-3 border text-left">Form Name</th>
              <th className="p-2 sm:p-3 border">Word Format</th>
              <th className="p-2 sm:p-3 border">PDF</th>
            </tr>
          </thead>
          <tbody className="text-sm sm:text-base">
            {formData.map((form, index) => (
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
                    Download
                  </a>
                </td>
                <td className="p-2 sm:p-3 border">
                  <button
                    onClick={() => handleViewClick(form.wordLink)}
                    className="text-blue-600 underline hover:text-blue-800 cursor-pointer"
                  >
                    View
                  </button>
                </td>
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
