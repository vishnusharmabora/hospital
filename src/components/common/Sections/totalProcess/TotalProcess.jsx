import React from "react";
import "./totalProcess.css";
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
      label: "Patient",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
      borderColor: "#ed8d2f",
      backgroundColor: "rgba(159 159 159 / 17%)",
    },
    {
      fill: true,
      label: "Appointment",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
      borderColor: "#019999",
      backgroundColor: "rgba(159 159 159 / 17%)",
    },
    {
      fill: true,
      label: "Prescription",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 40 })),
      borderColor: "#019999",
      backgroundColor: "rgba(159 159 159 / 17%)",
    },
  ],
};

export const TotalProcess = () => {
  return (
    <div className="panel total_process_chart">
      <div className="panel-heading pb-0">
        <div className="panel-title">
          <h4>Total Process</h4>
          <small>Showing status from the last year</small>
        </div>
      </div>
      <div className="panel-body">
        <Line options={options} data={data} />
      </div>
    </div>
  );
};
