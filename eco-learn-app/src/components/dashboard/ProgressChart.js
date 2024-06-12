import React, { Component } from "react";
import Chart from "react-apexcharts";

class ProgressChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        chart: {
          id: "basic-bar",
          toolbar: {
            show: false,
          },
          width: '100%',
          heigt: '100%',
        },
        xaxis: {
          categories: [
            "May 24",
            "May 25",
            "May 26",
            "May 27",
            "May 28",
            "May 29",
            "May 30",
            "May 31",
          ],
        },
        yaxis: {
          min: 0,
          max: 100,
          tickAmount: 5,
          labels: {
            formatter: function (val) {
              if (val % 20 === 0) {
                return val;
              }
              return "";
            },
          },
        },
        stroke: {
          width: 2,
          curve: "smooth",
        },
        colors: ["#4C7317"],
        fill: {
          type: "solid",
        },
      },
      series: [
        {
          name: "series-1",
          data: [65, 82, 48, 70, 60, 90, 75, 60, 80],
        },
      ],
    };
  }

  render() {
    return (
      <div className="app">
        <div className="row">
          <div className="mixed-chart">
            <Chart
              options={this.state.options}
              series={this.state.series}
              type="line"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default ProgressChart;
