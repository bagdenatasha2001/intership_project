import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);


export default function DonutChart() {

  const data = {
    labels: ['Applied', 'Shortlisted', 'Rejected'],
    datasets: [{
      label: 'poll',
      data: [40, 20, 40],
      backgroundColor: ['#006666', '#63ADAD', '#1B3434'],
      borderColor: 'transparent'
    }]
  }

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    cutout: '67%',
    plugins: {
      legend: {
        display: true,
        position: 'bottom',
        align: 'center',
        labels: {
          usePointStyle: true,
          pointStyle: 'rect',
          padding: 10,
          boxWidth: 20,
          boxHeight: 20,
          font: {
            weight: 'bold',
            size: 14
          }
        }
      },
      datalabels: {
        color: '#fff',
        font: { weight: 'bold', size: 18 },
        formatter: (value) => `${value}%`
      }
    }
  };

  return (
    <div className='w-full h-full p-2'>
      <Doughnut data={data} options={options} />
    </div>
  )
}
