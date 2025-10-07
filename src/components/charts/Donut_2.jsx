import React from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

export default function Donut_2() {
  const data = {
    labels: ['Open', 'Closed', 'On Hold', 'Inactive'],
    datasets: [{
      label: 'poll',
      data: [30, 40, 20, 10],
      backgroundColor: ['#00AF50', '#FF0000', '#FFBE05', '#C9C8C8'],
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
          padding: 5,
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
        font: { weight: 'bold', size: 16 },
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

