import React, { Component } from "react";
import { Doughnut } from "react-chartjs-2";

const data = {
  labels: ["Blue", "Green"],
  datasets: [
    {
      data: [75, 25],
      backgroundColor: ["#36A2EB", "green"],
      hoverBackgroundColor: ["#36A2EB", "#FFFFFF"]
    }
  ]
};
const options = {
  rotation: -Math.PI,
  circumference: Math.PI
};

export default class PlantGraph extends Component {
  render() {
    return (
      <div>
        <h2>Doughnut Example</h2>
        <Doughnut data={data} options={options} />
      </div>
    );
  }
}
