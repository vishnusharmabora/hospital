import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
  labels: ["Patient", "Appointment", "Prescription"],
  datasets: [
    {
      label: "# of Votes",
      data: [28.57, 28.56, 42.16],
      backgroundColor: ["#ff9933", "#019999", "#009900"],
      borderColor: ["#ff9933", "#019999", "#009900"],
      borderWidth: 1,
    },
  ],
};

export function PiChart() {
  return <Pie data={data} />;
}
