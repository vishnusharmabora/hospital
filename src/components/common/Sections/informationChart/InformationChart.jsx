import React from "react";
import "./informationChart.css";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from "chart.js";
import { Line } from "react-chartjs-2";
import faker from "faker";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: true,
      text: "",
    },
  },
};

const labels = [
  "May 2022",
  "Jun 2022",
  "July 2022",
  "Aug 2022",
  "Sep 2022",
  "Oct 2022",
  "Nov 2022",
  "Dec 2022",
  "Jan 2023",
  "Feb 2023",
  "Mar 2023",
  "Apr 2023",
];

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Debits",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800000 })),
      borderColor: "rgba(159 159 159 / 40%)",
      backgroundColor: "rgba(159 159 159 / 17%)",
    },
    {
      fill: true,
      label: "Credit",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 800000 })),
      borderColor: "rgba(55 160 0 / 50%)",
      backgroundColor: "rgba(55 160 0 / 50%)",
    },
  ],
};

export const InformationChart = () => {
  return (
    <div className="panel information_chart">
      <div className="panel-heading top_corner">
        <div className="panel-title">
          <h4>Account Information</h4>
        </div>
      </div>
      <div className="panel-body">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
