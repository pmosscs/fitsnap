import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChart = ({ posts }) => {
  console.log("from chart ", posts);

  let data;

  if (posts.length > 1) {
    const label = ["november", "december", "january"];

    const nov = posts.filter((ele) => ele.month === "november");
    const novPushUps = nov.map((x) => x.push_ups);

    const dec = posts.filter((ele) => ele.month === "december");
    const decPushUps = dec.map((x) => x.push_ups);

    const jan = posts.filter((ele) => ele.month === "january");
    const janPushUps = jan.map((x) => x.push_ups);

    const dataArr = [];

    const novAvg = dataArr.push(
      novPushUps.reduce((a, b) => a + b) / novPushUps.length
    );
    const decAvg = dataArr.push(
      decPushUps.reduce((a, b) => a + b) / decPushUps.length
    );
    const janAvg = dataArr.push(
      janPushUps.reduce((a, b) => a + b) / janPushUps.length
    );

    const novPull = posts.filter((ele) => ele.month === "november");
    const novPullUps = nov.map((x) => x.pull_ups);

    const decPull = posts.filter((ele) => ele.month === "december");
    const decPullUps = dec.map((x) => x.pull_ups);

    const janPull = posts.filter((ele) => ele.month === "january");
    const janPullUps = jan.map((x) => x.pull_ups);

    const dataArrPull = [];

    const novAvgPull = dataArrPull.push(
      novPullUps.reduce((a, b) => a + b) / novPullUps.length
    );
    const decAvgPull = dataArrPull.push(
      decPullUps.reduce((a, b) => a + b) / decPullUps.length
    );
    const janAvgPull = dataArrPull.push(
      janPullUps.reduce((a, b) => a + b) / janPullUps.length
    );

    data = {
      labels: label,
      datasets: [
        {
          label: "Push-Ups",
          backgroundColor: "#209CEE",
          borderColor: "#209CEE",
          data: dataArr,
        },
        {
          label: "Pull-Ups",
          backgroundColor: "#91D3FF",
          borderColor: "#91D3FF",
          data: dataArrPull,
        },
      ],
    };
  }

  return (
    <div className="chart-wrapper">
      {posts.length > 1 ? <Line data={data} /> : null}
    </div>
  );
};

export default LineChart;
