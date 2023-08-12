import React from "react";
import "./piechartbox.scss";
import { Cell, Pie, PieChart, ResponsiveContainer, Tooltip } from "recharts";

const data = [
  { name: "Mobile", value: 400, color: "#F94C10" },
  { name: "Mobile", value: 400, color: "#6F61C0" },
  { name: "Mobile", value: 400, color: "#F11A7B" },
  { name: "Mobile", value: 400, color: "#F6FA70" },
];

function PieChartBox() {
  return (
    <div className="piechartbox">
      <h1>Leads by Source</h1>

      <div className="chart">
        <ResponsiveContainer width="99%" height={300}>
          <PieChart>
            <Tooltip
              contentStyle={{ background: "white", borderRadius: "5px" }}
            ></Tooltip>
            <Pie
              data={data}
              innerRadius={"70%"}
              outerRadius={"90%"}
              // fill="#8884d8"
              paddingAngle={5}
              dataKey="value"
            >
              {data.map((e) => (
                <Cell key={e.name} fill={e.color} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="options">
        {data.map((e) => (
          <div className="option" key={e.name}>
            <div className="title">
              <div className="dot" style={{ backgroundColor: e.color }}></div>
              <span>{e.name}</span>
            </div>
            <span className="number">{e.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PieChartBox;
