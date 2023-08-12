import React from "react";
import "./barchart.scss";
import { Bar, ResponsiveContainer, Tooltip, BarChart } from "recharts";

type Props = {
  color: string;
  title: string;
  dataKey: string;
  chartData: object[];
};
// type Props = {
//   vals: { color: string; title: string; dataKey: string; chartData: object[] };
// };

function BarChartBox(props: Props) {
  return (
    <>
      <h1>{props.title}</h1>

      <div className="chart">
        <ResponsiveContainer width="99%" height="100%">
          <BarChart data={props.chartData}>
            <Tooltip
              cursor={{ fill: "none" }}
              contentStyle={{ borderRadius: "5px" }}
            ></Tooltip>
            <Bar dataKey={props.dataKey} fill={props.color} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </>
  );
}

export default BarChartBox;
