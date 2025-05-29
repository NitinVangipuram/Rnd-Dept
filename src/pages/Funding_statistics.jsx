import React from 'react';
import './funding_statistics.css'
import { Link } from 'react-scroll';

export default function Funding_statistics() {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-800">
      
      <div className="bg-[#8B008B] shadow-sm py-2" id="top">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex-grow">
              <ul className="flex list-none p-0 m-0">
              </ul>
            </div>
          </div>
        </div>
      </div>

      
      <div className="inner_page py-8">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-xl shadow-xl border border-gray-200 p-6 sm:p-8 text-justify leading-relaxed">
            <h2 className="text-3xl font-extrabold text-[#8B008B] mb-4 ">R&amp;D Section</h2>
            <hr className="border border-[#D8BFD8] mb-6" /> 

            
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody className='table1'>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/3">D&amp;B D-U-N-S Number :</th>
                    <td className="px-4 py-3 bg-white text-gray-900 font-medium">860438471</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/3">Company Name :</th>
                    <td className="px-4 py-3 bg-white text-gray-900 font-medium">INDIAN INSTITUTE OF TECHNOLOGY DHARWAD</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/3">NIRF INST ID :</th>
                    <td className="px-4 py-3 bg-white text-gray-900 font-medium">IR-E-U-0899</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/3">Address Line1 :</th>
                    <td className="px-4 py-3 bg-white text-gray-900 font-medium">PERMANENT CAMPUS</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/3">Address Line2 :</th>
                    <td className="px-4 py-3 bg-white text-gray-900 font-medium">CHIKKAMALLIGAWAD</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/3">City :</th>
                    <td className="px-4 py-3 bg-white text-gray-900 font-medium">DHARWAD</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/3">State :</th>
                    <td className="px-4 py-3 bg-white text-gray-900 font-medium">KARNATAKA</td>
                  </tr>
                  <tr className="border-b border-gray-300">
                    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/3">Pincode :</th>
                    <td className="px-4 py-3 bg-white text-gray-900 font-medium">580007</td>
                  </tr>
                  <tr>
                    <th className="px-4 py-3 bg-gray-100 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider w-1/3">Country :</th>
                    <td className="px-4 py-3 bg-white text-gray-900 font-medium">INDIA</td>
                  </tr>
                </tbody>
              </table>
            </div>

            
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> 
                    <th colSpan="3" className="px-4 py-3 text-left text-gray-800 font-semibold text-lg">Status of the Work Requests</th>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <a
                        href="https://docs.google.com/spreadsheets/d/1l026Cj8Ux2MKWOxFh9ej7_ZRUxEWAmElEfH-vfg0l8o/edit?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B008B] hover:text-[black] font-semibold text-base transition duration-300 ease-in-out" // Darker violet for links
                      >
                        Click here to view the status of the Work Requests
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Calls for Proposals */}
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> {/* Header background based on image */}
                    <th colSpan="3" className="px-4 py-3 text-left text-gray-800 font-semibold text-lg">Calls for proposals</th>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <a
                        href="https://docs.google.com/spreadsheets/d/1t352KbG0gFpu_QK7BVjBrcwLy5Kthq4JmHRy_AtVHUM/edit?gid=0#gid=0"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B008B] hover:text-[black] font-semibold text-base transition duration-300 ease-in-out"
                      >
                        Click here to view various calls for proposals
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* WebLinks of Funding Agencies */}
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> {/* Header background based on image */}
                    <th colSpan="3" className="px-4 py-3 text-left text-gray-800 font-semibold text-lg">WebLinks of Funding Agencies</th>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <a
                        href="https://docs.google.com/document/d/15wwENmZ7uIr7O2R1R_WaDXJBulPyYaIO/edit?usp=drive_link&amp;ouid=117111000594155137945&amp;rtpof=true&amp;sd=true"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B008B] hover:text-[black] font-semibold text-base transition duration-300 ease-in-out"
                      >
                        Click here to view WebLinks of Funding Agencies
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Circulars and Office Orders */}
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> {/* Header background based on image */}
                    <th colSpan="3" className="px-4 py-3 text-left text-gray-800 font-semibold text-lg">Circulars and Office Orders</th>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1lpmr_Rzlw3G3c9fRGCsh-P38IYZrxx6R/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Special provisions in amended GFRs 2017 - Enhancement in ceilings for procurement
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1NeW3dvSkfXmQQBIkUToG6ARn96KSxSqi/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Committee for allocation of Research Labs in Permanent Campus
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1hwbDjShxpCkOiqRZIQyfSR_oOHCz1xB_/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Relaxation from obtaining prior approval for procurement of consumable, expenditures on
                            contingency of sponsored projects
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1pRBiFCStqQm6NsmFAsvWPBFYkKfTL3F6/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            PPT for Generation of GeM Non availability report
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1bvhOGo4oGfvv_LosHwc_3wWNFiJTv4Ek/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            General Financial Rules 2017 with latest updates till 31.07.2024
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1j1Yu8og4TCOz1NM24R9iQAcjhYEKWoDi/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            TA/DA rates for students and project staffs
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1BnoKynjZdLozy0PgEOXZKgJP2fdilQ1L/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Revision of Intellectual Property Rights (IPR) Policy guidelines
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1b3oSH_oB2Rq5cPImSgYUv4wIIlHSjUu0/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Circulation of R&amp;D Procurement Referencer
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1pLWRgZlYgxogXy5195trxqTB-oucdSui/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Streamlining of Manpower Recruitment Process for Sponsored Research and Consultancy
                            Projects
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/10LYl1TNcoHiesF0iTLDkou-ZjNRJdKQF/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Provision for Temporary Loan for Payment of Project Staff Salaries during Fund Release
                            Delays
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1LZjf4Isc0yWD4fLQUgGEQGAigHlfJBOs/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Implementation of Distribution of charges collected from testing services by SCIF/DCIF
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1t98ESKUEscasP7bfGDGAlqFSt6s2s7kp/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Formation of Department level Standing committees (DLSC) for Authorization of Proprietary
                            Article Certificate (PAC)
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1-kEHmWqM-Cdn56EkwPgj1ZkQMdaFbj3w/view?usp=drive_link"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Implementation of revised Overhead charges for consultancy projects
                          </a>
                        </li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Projects/Course Guidelines */}
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> {/* Header background based on image */}
                    <th className="px-4 py-3 text-left text-gray-800 font-semibold text-lg">Projects/Course Guidelines</th>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <ol type="a" className="list-lower-alpha list-inside space-y-2 text-gray-700">
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1jkKrvUaZve3nKSdkAFuk6eFg1miS6FV2/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            General Information on Consultancy Projects
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1SA5BjEp1cNSq0D9ouYt1v377npcK08x2/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            General Information on Sponsored Projects
                          </a>
                        </li>
                        <li>
                          <a
                            href="https://drive.google.com/file/d/1E1nfVfqj9xgm6iryTAg5MFUyOq6QOGyb/view?usp=sharing"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Proposal for CEP/QIP Courses
                          </a>
                        </li>
                        <li>
                          OM for engagement of manpower
                          <ol type="1" className="list-decimal list-inside ml-6 space-y-1 mt-2">
                            <li>
                              <a href="pdf/OM_JRF_SRF_RA_2023.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out">
                                JRF/SRF/RA Positions
                              </a>
                            </li>
                            <li>
                              <a
                                href="pdf/OM-3 R&amp;D Manpower Others-modified 28.10.2021.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                              >
                                Other than JRF/SRF/RA Positions
                              </a>
                            </li>
                            <li>
                              <a
                                href="pdf/OM for Revised emoluments for Manpower recruitemnt (Other than JRF SRF RA)_updated.pdf"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                              >
                                Other than JRF/SRF/RA Positions for ANRF Sponsored Projects
                              </a>
                            </li>
                          </ol>
                        </li>
                        <li>
                          <a
                            href="pdf/PMRF_PhD_InstituteRules_IIT_Dharwad_v01.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            PMRF Fellowship Research Fund Guidelines
                          </a>
                        </li>
                        <li>
                          <a
                            href="pdf/DIA_PhD_InstituteRules_IIT_Dharwad_v01.pdf"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out"
                          >
                            Doctoral fellowship in India for ASEAN(DIA-ASEAN) Guidelines
                          </a>
                        </li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* MOUs Table */}
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> {/* Header background based on image */}
                    <th colSpan="3" className="px-4 py-3 text-left text-gray-800 font-semibold text-lg">MOUs</th>
                  </tr>
                  <tr>
                    <td colSpan="3" className="p-2"></td>
                  </tr> {/*blank line*/}
                  <tr className="bg-gray-100"> {/* Sub-header background based on image */}
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Institute Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Coordinator at IIT Dharwad</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">MoU Link</th>
                  </tr>
                  <tr>
                    <td colSpan="3" className="p-2"></td>
                  </tr> {/*blank line*/}

                  <tr className="bg-gray-100"> {/* Category header */}
                    <th colSpan="3" className="px-4 py-3 text-left text-base font-semibold text-gray-800">Indian Academic and R&amp;D Institutes</th>
                  </tr>

                  {/* Indian Academic and R&D Institutes */}
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">SDM University Dharwad</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Nilkamal Mahanta</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1yxOn6inCj-ALZz7VCaAVcdaw36EgKisi/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">ITI Limited</td>
                    <td className="px-4 py-2 border-t border-gray-300">Rajshekhar V Bhat</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1_7yhTcirtTtfkeRUSXjK8LnVeoMQm2Vm/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">Antrix</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof. Rajshekhar Bhat</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1WqaHH9sqfld7Uqc5KnCBFfsYCmY0o927/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">KIMS Hubballi</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof. Somashekara M A</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1MKLdMFo04X1Tis9HgPx8sBiVF-I8xdCh/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">CSIR-CMERI, Durgapur</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Sangamesh Deepak R</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1nSqeNrGsaxbhT79WQd922wjZZqn6bPXo/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">CSIR-4PI, Bengaluru</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Dhiraj Patil</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1DfSyqrjnv7kN2iRv9gwjBTtQhus9QQWb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">CSIR-CEERI, Pilani</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Ruma Ghosh</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/165oGSz3nJfWt7AiOuKfiGrRiGwmQa5jU/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">Raja Ramanna Centre for Advanced Technology</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof R Prabhu</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1O1bIQ0aNJ_2wpUdIt4jVn33dcq-s3qrk/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">University of Agricultural Sciences, Dharwad</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof SRM Prasanna</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1uOxBEgSUVGQuv71fMvCefY2RWtHXLSUD/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">CSIR-IIP, Dehradun</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Dhiral Patil</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1orDEBFSMv4e9uZaXYcGtHrL9Vb1uc1i9/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">Bharat Electronics Limited, Bengaluru</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Rajshekhar Bhat</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/18T5yYUo1GLhRg8Wh5M-_v6yOC19W1xyp/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="p-2"></td>
                  </tr> {/*blank line*/}

                  <tr className="bg-gray-100"> {/* Category header */}
                    <th colSpan="3" className="px-4 py-3 text-left text-base font-semibold text-gray-800">International Universities</th>
                  </tr>

                  {/* International Universities */}
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">Consortium of Finnish Universities, Finland</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Rakesh Lingam</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1sMR_GvxC6-wAFN6qWhSzx2l9j9HJHQGC/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">National Cheng Kung University, Taiwan, Dept of EE</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Naveen Kadayinti</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1Rkj_EPxxAq6pqU27rufbcFbsfYeDD0UI/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">The University of New Brunswick, Canada</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Rajeswara Rao M and Prof Ruma Ghosh</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1leKveImsG1WwAgvHtu8XFPkoy0izwfOP/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">University of Saskatchewan, Canada</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Neelkamal and Prof Sridevi</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1D2jdZmTupWY9Bd4AOcN3ZpVw5x1-3n1X/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">TU9 German Universities of Technology e. V.</td>
                    <td className="px-4 py-2 border-t border-gray-300"></td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1FtGN_DOdqJScYA0nZa9frvl4sWaMWR5f/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">Carleton University, Canada</td>
                    <td className="px-4 py-2 border-t border-gray-300">Rajshekhar V Bhat</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1rJwkPP7q_JG_Rtjdo54v-bjA6uoKSb3q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">École de technologie supérieure (ÉTS), Canada</td>
                    <td className="px-4 py-2 border-t border-gray-300">Pratyasa Bhui</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1UkufJYlyRpgRT_Bg4_MXaFhN96p5zxwd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">ROMA TRE University, ROME</td>
                    <td className="px-4 py-2 border-t border-gray-300">Satish Naik</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1uV7GnqLqecedSemYuNnElYrGcELyUA3O/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan="3" className="p-2"></td>
                  </tr> {/*blank line*/}

                  <tr className="bg-gray-100"> {/* Category header */}
                    <th colSpan="3" className="px-4 py-3 text-left text-base font-semibold text-gray-800">Private Organizations/Industries</th>
                  </tr>

                  {/* Private Organizations/Industries */}
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">Centre for Adivasi Research and Development, Odisha</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof S R M Prasanna</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1E9DATRfy4XZHqYJrOeYLOjf-O8UydCAn/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">Deshpande Startups</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Amar Gaonkar and Prof Dhiraj Patil</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1LocfquVYnIkrPkvfdaZ-NUBZEEJ9vbfd/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">JCB India</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Abhijit K</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1qLYCrIYw1UlgXlAXjL5miTYyq1v-pUcb/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">Zeus Numerix Pvt Ltd, Pune</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Amar Gaonkar</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1-pOxfBKahN9g0GcYMjwOdRjarZ_IY98Q/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">McAfee, Bengaluru</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Naveen M B</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="pdf/MOU - Mcafee - IITd.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">Altair Engineering</td>
                    <td className="px-4 py-2 border-t border-gray-300">Prof Gayathri A</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="https://drive.google.com/file/d/1nyK50pXyoYNZ3IWfquBFj1DZMXh5TdK5/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Link</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Statuses of MoUs at IIT Dharwad */}
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> {/* Header background based on image */}
                    <th colSpan="3" className="px-4 py-3 text-left text-gray-800 font-semibold text-lg">Statuses of MoUs at IIT Dharwad</th>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      The statuses of the MoUs under processes can be found here:{' '}
                      <a
                        href="https://drive.google.com/file/d/1GVQxPlDrqlLzlkEbIGwxUxp1ciGdLbUd/view?usp=sharing"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#8B008B] hover:text-[black] font-semibold text-base transition duration-300 ease-in-out"
                      >
                        Link
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* R&D Forms */}
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> {/* Header background based on image */}
                    <th colSpan="4" className="px-4 py-3 text-left text-gray-800 font-bold text-lg">R&amp;D Forms</th>
                  </tr>
                  <tr className="bg-gray-100 text-left"> {/* Sub-header background based on image */}
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Sl No.</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Form Name</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">Word Format</th>
                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-700 uppercase tracking-wider">PDF</th>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">1</td>
                    <td className="px-4 py-2 border-t border-gray-300">Request for the Extension of Duration of Project Staff</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Request_for_the_Extension_of_Duration_of_Project_Staff.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">2</td>
                    <td className="px-4 py-2 border-t border-gray-300">Disbursal Form for Consultancy Project/Course</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Consultancy_Amt_Disbursal_Form.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">3</td>
                    <td className="px-4 py-2 border-t border-gray-300">Asset Retention / Return Form</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Asset_Retention - Return Form.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">4</td>
                    <td className="px-4 py-2 border-t border-gray-300">Form to be submitted for Projects involving extended Foreign Travel</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Form-For_Projects_involving_Foreign_Travel.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">5</td>
                    <td className="px-4 py-2 border-t border-gray-300">Project Proposal Submission Form</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Project_Proposal_Submission_Form.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">6</td>
                    <td className="px-4 py-2 border-t border-gray-300">Reimbursement Form</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Reimbursement_Form.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">7</td>
                    <td className="px-4 py-2 border-t border-gray-300">Advance Form</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Advance_Form.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">8</td>
                    <td className="px-4 py-2 border-t border-gray-300">Settlement Form</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Settlement_form.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">9</td>
                    <td className="px-4 py-2 border-t border-gray-300">TA Form</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/TA_Form.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">10</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      Indent from A <br className="hidden sm:inline" />For direct purchases of value up to ₹ 50,000
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300 align-middle">
                      <a href="rnd/forms/Indent from A_For direct purchases of value up to ₹ 50,000.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300 align-middle">
                      <a href="rnd/forms/Indent from A_For direct purchases of value up to ₹ 50,000.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">11</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      Indent form B <br className="hidden sm:inline" />For purchases between ₹ 50,001- to ₹ 10 Lakhs
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300 align-middle">
                      <a href="rnd/forms/Indent form B_ For purchases between ₹ 50,001- to ₹ 10 Lakhs.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300 align-middle">
                      <a href="rnd/forms/Indent form B_ For purchases between ₹ 50,001- to ₹ 10 Lakhs.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">12</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      Indent form C <br className="hidden sm:inline" />For purchases above ₹ 10 lakhs
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300 align-middle">
                      <a href="rnd/forms/Indent form C_ For purchases above ₹ 10 lakhs.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300 align-middle">
                      <a href="rnd/forms/Indent form C_ For purchases above ₹ 10 lakhs.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">13</td>
                    <td className="px-4 py-2 border-t border-gray-300">Verification Report Form</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Verification_Report.docx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View</td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">14</td>
                    <td className="px-4 py-2 border-t border-gray-300">Project Completion Report</td>
                    <td className="px-4 py-2 border-t border-gray-300">Download</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Project_Completion_Report_IITDh.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">15</td>
                    <td className="px-4 py-2 border-t border-gray-300">Bank Mandate Form with PFMS details</td>
                    <td className="px-4 py-2 border-t border-gray-300">Download </td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/IITDh_Bank_mandate_SERB.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">16</td>
                    <td className="px-4 py-2 border-t border-gray-300">IIT Dharwad PAN</td>
                    <td className="px-4 py-2 border-t border-gray-300">Download</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/IIT Dharwad Pan card_201221.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">17</td>
                    <td className="px-4 py-2 border-t border-gray-300">IIT Dharwad GST registration</td>
                    <td className="px-4 py-2 border-t border-gray-300">Download</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/IIT Dharwad GSTIN_201221.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">View</a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border-t border-gray-300">18</td>
                    <td className="px-4 py-2 border-t border-gray-300">Consumable Stock Form</td>
                    <td className="px-4 py-2 border-t border-gray-300">
                      <a href="rnd/forms/Consumables stock register format_v3.xlsx" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:underline">Download</a>
                    </td>
                    <td className="px-4 py-2 border-t border-gray-300">View </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* R&D Project Details */}
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> {/* Header background based on image */}
                    <th className="px-4 py-3 text-left text-gray-800 font-semibold text-lg">R&amp;D Project Details</th>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      You can find the details of the ongoing, completed and approved projects here:{' '}
                      <a href="https://docs.google.com/spreadsheets/d/1inLgmfHyZSGRarws74M_R-eTyAh04JivJB0iYCG9jfQ/edit?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:text-[black] font-semibold text-base transition duration-300 ease-in-out">Link</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Link to CSR Cell */}
            <div className="overflow-x-auto mb-8 shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> {/* Header background based on image */}
                    <th className="px-4 py-3 text-left text-gray-800 font-semibold text-lg">Link to CSR Cell</th>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      Link to the CSR Cell intranet page can be found here:{' '}
                      <a href="csr.php" className="text-[#8B008B] hover:text-[black] font-semibold text-base transition duration-300 ease-in-out">Link</a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Notifications */}
            <div className="overflow-x-auto shadow-md rounded-lg">
              <table className="min-w-full bg-white border border-gray-300 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="bg-gray-200"> {/* Header background based on image */}
                    <th className="px-4 py-3 text-left text-gray-800 font-semibold text-lg">Notifications</th>
                  </tr>
                  <tr>
                    <td className="px-4 py-4">
                      <ol className="list-decimal list-inside space-y-2 text-gray-700">
                        <li className="list_links">
                          Delegation of Financial Powers to Associate Dean (R&amp;D):{' '}
                          <a href="rnd/notifications/Delegation of Financial Powers Associate Dean RnD.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out">Link</a>
                        </li>
                        <li className="list_links">
                          R&amp;D Section Time Limits:{' '}
                          <a href="rnd/R&amp;D Circular_030122.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out">Link</a>
                        </li>
                        <li className="list_links">
                          Patents (Amendment) Rules, 2021:{' '}
                          <a href="rnd/PIB1757202.pdf" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out">Link</a>
                        </li>
                        <li className="list_links">
                          UNMANNED AIRCRAFT SYSTEMS (UAS) RULES 2021 - GAZETTE NOTIFICATION:{' '}
                          <a href="https://drive.google.com/file/d/1G9QrCAXqp5sh9tzhuZHfmLZQI4fMQgpF/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="text-[#8B008B] hover:text-[black] transition duration-300 ease-in-out">Link</a>.
                        </li>
                      </ol>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Back to Top Link at the bottom */}
             <div className="text-center mt-10">
                  <Link
                    to="top"
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
        </div>
      </div>
    </div>
  );
}