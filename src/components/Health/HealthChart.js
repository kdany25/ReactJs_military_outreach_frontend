import React,{useState} from "react";
import Chart from "react-apexcharts";

export default function HealthChart() {
    const [state, setstate] = useState({
      options: {
        colors: ["#7380ec", "#ff7782", "#41f1b6"],
        chart: {
          id: "basic-bar",
        },
        xaxis: {
          categories: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        },
      },
      series: [
        {
          name: "Houses",
          data: [11, 25,7, 49, 39, 63,57]
        },
       
      ],
    });

    return (
      <div className="chart">
        <h2>Health Charts</h2>
        <div className="row">
          <div className="mixed-chart">
            <Chart options={state.options} series={state.series} type="area" />
          </div>
        </div>
      </div>
    );
  };

