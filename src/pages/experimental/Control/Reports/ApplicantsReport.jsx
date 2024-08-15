import React from 'react'
import Sidebar from '../../../../components/Experimental/Sidebar'
import Navbar from '../../../../components/Experimental/Navbar'
import ApplicantReportTable from '../../../../components/ApplicantsReportTable'

const ApplicantsReport = () => {
  return (
    <div className="flex min-h-screen">
    <Sidebar />
    <div className="flex-[6]">
      <Navbar/> {/* Pass props */}
      <div className="p-4 flex bg-gray-300 flex-col lg:flex-row w-min">
          <div className="ml-5 bg-white rounded-md flex-1 lg:mr-5 h-full m-1 shadow-gray-500 shadow-md w-min">
            <ApplicantReportTable />
          </div>
      </div>
    </div>
  </div>
  )
}

export default ApplicantsReport