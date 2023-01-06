import React from "react";
import { Chart } from "chart.js/auto";
import { Line } from "react-chartjs-2";

const LineChartPush = ({ posts }) => {
  console.log("from chart ", posts);

  let data;

  if (posts.length > 0) {
    const label = ["november", "december", "january"];

    const nov = posts.filter((ele) => ele.month === "november");
    const novPullUps = nov.map((x) => x.pull_ups);

    const dec = posts.filter((ele) => ele.month === "december");
    const decPullUps = dec.map((x) => x.pull_ups);

    const jan = posts.filter((ele) => ele.month === "january");
    const janPullUps = jan.map((x) => x.pull_ups);

    const dataArr = [];

    const novAvg = dataArr.push(
      novPullUps.reduce((a, b) => a + b) / novPullUps.length
    );
    const decAvg = dataArr.push(
      decPullUps.reduce((a, b) => a + b) / decPullUps.length
    );
    const janAvg = dataArr.push(
      janPullUps.reduce((a, b) => a + b) / janPullUps.length
    );

    data = {
      labels: label,
      datasets: [
        {
          label: "Pull-Ups",
          backgroundColor: "#209CEE",
          borderColor: "#209CEE",
          data: dataArr,
        },
      ],
    };
  }

  return (
    <div className="chart-wrapper">
      {posts.length > 0 ? <Line data={data} /> : null}
    </div>
  );
};

export default LineChartPush;
