import React , {useState} from 'react'
import Chart from "react-apexcharts";

export default function Hcharts() {
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
            data: [4, 7,7,9,10,8,11]
          },
         
        ],
      });
  
      return (
        <div className="chart">
          <h2>Building  Charts</h2>
          <div className="row">
            <div className="mixed-chart">
              <Chart options={state.options} series={state.series} type="area" />
            </div>
          </div>
        </div>
      );
}
