import React, { useState, useMemo } from 'react';
import {
  Chart as ChartJS,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { MatrixController, MatrixElement } from "chartjs-chart-matrix";
import ChartDataLabels from "chartjs-plugin-datalabels";
import { Chart } from "react-chartjs-2";

ChartJS.register(
  MatrixController,
  MatrixElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  ChartDataLabels
);

const cities = [
  "Al Kharj",
  "Al Majma'ah",
  "Al Muzahimiyah",
  "Az Zulfi",
  "Shaqra",
  "Rumah",
  "Dawadmi"
];

const ranges = [
  "<10", "11-20", "21-30", "31-40", "41-50", "51-60", "61-70",
  "71-80", "81-90", "91-100", "101-110", "111-120", "121-130",
  "131-140", "140+"
];

const values = [
  [5, 20, 35, 40, 50, 25, 30, 40, 45, 35, 60, 55, 50, 45, 60],
  [60, 15, 25, 35, 40, 10, 25, 40, 45, 35, 20, 40, 45, 50, 55],
  [10, 25, 35, 40, 50, 20, 35, 45, 30, 25, 45, 50, 55, 60, 65],
  [35, 50, 25, 15, 30, 55, 40, 45, 50, 15, 20, 45, 50, 55, 60],
  [30, 35, 50, 55, 15, 20, 35, 45, 40, 25, 35, 40, 45, 50, 55],
  [50, 15, 25, 35, 40, 50, 45, 40, 35, 55, 60, 50, 45, 50, 55],
  [30, 35, 40, 50, 15, 25, 35, 45, 50, 25, 35, 40, 45, 55, 50]
];

const colorScale = [
  "#e0f3f8",
  "#c7e7e5",
  "#8ec3c8",
  "#62a7b4",
  "#4a90b2",
  "#357ca1",
  "#2b6f94",
  "#1f5c7f"
];

export default function Heatmap() {
  const [selectedCity, setSelectedCity] = useState("");

  const heatmapData = useMemo(() => {
    let filteredCities = selectedCity ? [selectedCity] : cities;
    let data = [];
    filteredCities.forEach((city) => {
      const cityIdx = cities.indexOf(city);
      ranges.forEach((range, rangeIndex) => {
        data.push({
          x: range,
          y: city,
          v: values[cityIdx][rangeIndex]
        });
      });
    });
    return data;
  }, [selectedCity]);

  const data = {
    datasets: [
      {
        label: "Applicants Footprints",
        data: heatmapData,
        backgroundColor(ctx) {
          const value = ctx.dataset.data[ctx.dataIndex].v;
          const step = Math.floor((value / 100) * (colorScale.length - 1));
          return colorScale[Math.min(step, colorScale.length - 1)];
        },
        borderWidth: 1,
        borderColor: 'transparent',
        width: ({ chart }) => (chart.chartArea || {}).width / ranges.length,
        height: ({ chart }) => (chart.chartArea || {}).height / (selectedCity ? 1 : cities.length)
      }
    ]
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    layout: { padding: { bottom: 20 } },
    plugins: {
      tooltip: {
        callbacks: {
          title: (ctx) => `${ctx[0].raw.y} - ${ctx[0].raw.x}`,
          label: (ctx) => ctx.raw.v
        }
      },
      legend: { display: false },
      datalabels: { display: false }
    },
    scales: {
      x: {
        type: "category",
        labels: ranges,
        position: "bottom",
        grid: {
          drawBorder: false,
          drawOnChartArea: false
        },
        offset: true,
        ticks: { padding: 10 }
      },
      y: {
        type: "category",
        labels: selectedCity ? [selectedCity] : cities,
        grid: {
          drawBorder: false,
          drawOnChartArea: false
        },
        offset: true
      }
    }
  };

  return (
    <div className='h-[500px] p-2 mb-4 w-full shadow rounded-2xl  mt-4 border border-gray-33'>
      <div className='flex justify-between items-center mb-3'>
        <h3 className='font-bold text-lg'>Applicants Footprints By Location</h3>
        <select
          className='border px-3 py-1 rounded'
          value={selectedCity}
          onChange={(e) => setSelectedCity(e.target.value)}>
          <option value="">Select City</option>
          {cities.map((city) => (
            <option key={city} value={city}>{city}</option>
          ))}
        </select>
      </div>
      <div className='h-[400px] w-full'>
        <Chart type="matrix" data={data} options={options} />
      </div>
    </div>
  );
}

