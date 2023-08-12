import React from "react";
import "./home.scss";
import TopBox from "../../components/topBox/TopBox";
import ChartBox from "../../components/chartBox/ChartBox";
import BarChartBox from "../../components/BarChartBox/BarChartBox.tsx";
import PieChartBox from "../../components/PieChartBox/PieChartBox.tsx";
import BigChartBox from "../../components/BigChart/BigChartBox.tsx";
import {
  barChartBoxRevenue,
  barChartBoxVisit,
  chartBoxConversion,
  chartBoxProduct,
  chartBoxRevenue,
  chartBoxUser,
} from "../../data.ts";

function Home() {
  return (
    <div className="home">
      <div className="box box1">
        <TopBox></TopBox>
      </div>
      <div className="box box2">
        <ChartBox {...chartBoxUser}></ChartBox>
      </div>
      <div className="box box3">
        <ChartBox {...chartBoxProduct}></ChartBox>
      </div>
      <div className="box box4">
        <PieChartBox></PieChartBox>
      </div>
      <div className="box box8">
        <ChartBox {...chartBoxRevenue}></ChartBox>{" "}
      </div>
      <div className="box">
        <ChartBox {...chartBoxConversion}></ChartBox>
      </div>
      <div className="box box5">
        <BigChartBox></BigChartBox>
      </div>
      <div className="box box7">
        <BarChartBox {...barChartBoxVisit}></BarChartBox>
      </div>

      <div className="box">
        <BarChartBox {...barChartBoxRevenue}></BarChartBox>
      </div>
    </div>
  );
}

export default Home;
