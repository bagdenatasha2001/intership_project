import React from 'react';
import Kpi_Container from '../components/KPI_Cards/Kpi_Container';
import ChartContainer from '../components/charts/ChartContainer';
import Heatmap from '../components/Heatmap/Heatmap';
import IntershipTableContainer from '../components/Tables/IntershipTableContainer';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <Kpi_Container />
      <ChartContainer />
      <Heatmap />
      <IntershipTableContainer />
    </div>
  );
}
