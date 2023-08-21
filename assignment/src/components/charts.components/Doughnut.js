import React from "react";
import { Chart } from "react-google-charts";

export default function Doughnut({ filteredData }) {
  const countData = {};
  if (filteredData) {
    filteredData.forEach((value) => {
      if (value !== null) {
        if (countData[value]) {
          countData[value]++;
        } else {
          countData[value] = 1;
        }
      }
    });
  }

  const chartData = [["Value", "Count"]];
  for (const value in countData) {
    chartData.push([value.toString(), countData[value]]);
  }

  const options = {
    title: "Pie Chart",
    pieHole: 0.4,
    is3D: false,
  };

  return (
    <Chart
      chartType="PieChart"
      width="100%"
      height="100%"
      data={chartData}
      options={options}
    />
  );
}
