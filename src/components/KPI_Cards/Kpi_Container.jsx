import React from 'react'
import Kpi_card from './Kpi_card'

import { HiOutlineUserGroup } from "react-icons/hi2";  
import { CgMenuBoxed } from "react-icons/cg";
import { HiOutlineUser } from "react-icons/hi";
import { BiBarChartSquare } from "react-icons/bi";

export default function Kpi_Container() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 py-6 px-6">
      <Kpi_card
        title="ACTIVE INTERNSHIP LISTING" 
        value={10} 
        icon={HiOutlineUserGroup} 
      />
      <Kpi_card
        title="TOTAL APPLICANTS" 
        value={1050} 
        icon={CgMenuBoxed} 
      />
      <Kpi_card 
        title="TOTAL HIRED STUDENTS" 
        value={230} 
        icon={HiOutlineUser} 
      />
      <Kpi_card
        title="CONVERSION RATE" 
        value="2.3%" 
        icon={BiBarChartSquare} 
      />
    </div>
  )
}
