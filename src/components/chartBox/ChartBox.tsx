import React from "react";
import { Link } from "react-router-dom";
import "./chartbox.scss";
import { Line, LineChart, ResponsiveContainer, Tooltip } from "recharts";

type Props = {
  color: string;
  icon: string;
  title: string;
  dataKey: string;
  number: number | string;
  percentage: number;
  chartData: object[];
};

function ChartBox(props: Props) {
  // const data = [
  //   {
  //     name: "Page A",
  //     uv: 4000,
  //     pv: 2400,
  //     amt: 2400,
  //   },
  //   {
  //     name: "Page B",
  //     uv: 3000,
  //     pv: 1398,
  //     amt: 2210,
  //   },
  //   {
  //     name: "Page C",
  //     uv: 2000,
  //     pv: 9800,
  //     amt: 2290,
  //   },
  //   {
  //     name: "Page D",
  //     uv: 2780,
  //     pv: 3908,
  //     amt: 2000,
  //   },
  //   {
  //     name: "Page E",
  //     uv: 1890,
  //     pv: 4800,
  //     amt: 2181,
  //   },
  //   {
  //     name: "Page F",
  //     uv: 2390,
  //     pv: 3800,
  //     amt: 2500,
  //   },
  //   {
  //     name: "Page G",
  //     uv: 3490,
  //     pv: 4300,
  //     amt: 2100,
  //   },
  // ];

  return (
    <div className="chartbox">
      <div className="boxinfo">
        <div className="title">
          <img src={props.icon} alt="" />
          <span>{props.title}</span>
        </div>
        <h1>{props.number}</h1>
        <Link to="/">View All</Link>
      </div>
      <div className="chartinfo">
        <div className="chart">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={props.chartData}>
              <Line
                type="monotone"
                dataKey={props.dataKey}
                stroke="#8884d8"
                // dot={false}
                strokeWidth={2}
              />
              <Tooltip
                // position={{ x: 10, y: 60 }}
                contentStyle={{
                  backgroundColor: "transparent",
                  border: "none",
                }}
                labelStyle={{ display: "none" }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
        <div className="text">
          <span
            className="percentage"
            style={{ color: props.percentage > 0 ? "limegreen" : "tomato" }}
          >
            {props.percentage}
          </span>
          <span className="duration">This month</span>
        </div>
      </div>
    </div>
  );
}

export default ChartBox;
