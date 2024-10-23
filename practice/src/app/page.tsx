"use client";

import BarChart from "@/components/chart/bar";
import DoughnutChart from "@/components/chart/doughnut";
import HorizontalBarChart from "@/components/chart/horizontalBar";
import LineChart from "@/components/chart/line";
import PieChart from "@/components/chart/pie";
import RadarChart from "@/components/chart/radar";
import styled from "styled-components";

const Home: React.FC = () => {
  return (
    <>
      <ChartBox>
        <LineChart />
        <BarChart />
      </ChartBox>
      <ChartBox>
        <DoughnutChart />
        <RadarChart />
      </ChartBox>
      <ChartBox>
        <HorizontalBarChart />
        <PieChart />
      </ChartBox>
    </>
  );
};

export default Home;

const ChartBox = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  height: 400px;
  margin: 10px;
`;
