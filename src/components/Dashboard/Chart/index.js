import React, { useState } from "react";
import Chart from "react-apexcharts";

const Charts = () => {
  const [state, setstate] = useState({
    options: {
      colors: ["#7380ec", "#ff7782", "#41f1b6"],
      chart: {
        id: "basic-bar",
      },
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    },
    series: [
      {
        name: "Houses",
        data: [21, 35, 43, 49, 54, 63, 73, 91],
      },
      {
        name: "medical",
        data: [30, 40, 45, 50, 49, 60, 70, 91],
      },
      {
        name: "Roads",
        data: [11, 23, 31, 47, 56, 63, 82, 91],
      },
    ],
  });
  return (
    <div className="chart">
      <h1>Actions Charts</h1>
      <div className="row">
        <div className="mixed-chart">
          <Chart options={state.options} series={state.series} type="area" />
        </div>
      </div>
    </div>
  );
};
export default Charts;
