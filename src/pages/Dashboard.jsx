import React from 'react';
import Kpi_Container from '../components/KPI_Cards/Kpi_Container';
import ChartContainer from '../components/charts/ChartContainer';
import Heatmap from '../components/Heatmap/Heatmap';
import InternshipTableContainer from '../components/Tables/InternshipTableContainer';

export default function Dashboard() {
  return (
    <div className="space-y-4">
      <Kpi_Container />
      <ChartContainer />
      <Heatmap />
      <InternshipTableContainer />
    </div>
  );
}
