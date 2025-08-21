import React from 'react';
import Header from '../Components/Header/header';
import Sideheader from '../components/sideheade/Sideheader';
import Kpi_Container from '../components/KPI_Cards/Kpi_Container';
import ChartContainer from '../components/charts/ChartContainer';
import IntershipTableContainer from '../components/Tables/IntershipTableContainer';
import Heatmap from '../components/Heatmap/Heatmap';

export default function Dashboard() {
  return (
    <div className="flex w-full  font-['Inter']">

      <div className="sm:hidden md:flex bg-[#D1DDDD] w-[20%] h-screen sticky top-0">
        <Sideheader />
      </div>

     
      <div className="w-[80%] flex flex-col">

       
        <div className="sticky top-0 z-50">
          <Header />
        </div>

        
        <div
          className="overflow-y-auto "
          style={{ maxHeight: 'calc(100vh - 53px)' }} 
        >
          <Kpi_Container />
          <ChartContainer />
          <Heatmap />
          <IntershipTableContainer />
        </div>

      </div>
    </div>
  );
}
