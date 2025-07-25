import React from 'react'



export default function Ipr() {



   const data=[
  {
    "sl_no": 1,
    "Name": "Dr. Pratyasa Bhui",
    "current": "Dean (R&D)",
    "role": "Chairman"
  },
  {
    "sl_no": 2,
    "Name": "Prof. Ramjee Repaka",
    "current": "Dean (SW)",
    "role": "Member"
  },
  {
    "sl_no": 3,
    "Name": "Dr. RajeswaraRao M.",
    "current": "Associate Dean, SW (Gymkhana, Sports & Clubs & Technology)",
    "role": "Member"
  },
  {
    "sl_no": 4,
    "Name": "Dr. Somashekara M. A.",
    "current": "HoD, MMAE",
    "role": "Member"
  },
  {
    "sl_no": 5,
    "Name": "Dr. Amar Gaonkar",
    "current": "Associate Dean (Entrepreneurship, Incubation)",
    "role": "Member"
  },
  {
    "sl_no": 6,
    "Name": "Dr. Sandeep R. B.",
    "current": "Associate Dean R&D Projects",
    "role": "Member"
  },
  {
    "sl_no": 7,
    "Name": "Dr. Kedar Khandeparkar",
    "current": "FiC(Intellectual Property Rights and Patent Cell)",
    "role": "Convenor"
  }
]


  return (
  <div className="p-6" id="research-and-documents-table">
            <h1 className='text-3xl font-bold text-center text-gray-800 mb-8'>
               Institute's Intellectual Property (IPR)</h1>
                <br />
            <p className="text-lg text-gray-700 mb-6 text-left">
                 The existing Intellectual Property (IP) policy of IIT Dharwad plays a crucial role in
safeguarding and managing innovations, research outcomes, and intellectual assets
generated by faculty, students, and staff. However, with evolving research landscapes,
emerging technologies, and changing regulatory frameworks, it is essential to
periodically review and update the IP policy to align with best practices and institutional
needs.</p>
<br />
<p className="text-lg text-gray-700 mb-6 text-left">
               To ensure a comprehensive and structured revision of the Institute's IP policy, it is
proposed to constitute a Committee for Intellectual Property Policy Review:</p>

            <div className="overflow-x-auto shadow-lg rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-purple-800">
                        <tr>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                S.No
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                                Name
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                              Faculty
                            </th>
                            <th scope="col" className="px-3 py-3 text-left text-m font-medium text-white uppercase tracking-wider">
                            Role
                            </th>
                                            
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {data.map((item) => (
                            <tr key={item.id}>
                                 <td className="px-3 py-4 whitespace-normal text-sm font-medium text-gray-900">
                                    {item.sl_no}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm font-medium text-gray-900">
                                    {item.Name}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.current}
                                </td>
                                <td className="px-3 py-4 whitespace-normal text-sm text-gray-700">
                                    {item.role}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
 
