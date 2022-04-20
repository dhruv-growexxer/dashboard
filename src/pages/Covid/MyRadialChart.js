import { Row, Tooltip } from "antd";
import React, { useEffect } from "react";
import {
  Legend,
  RadialBar,
  RadialBarChart,
  ResponsiveContainer,
} from "recharts";

const MyRadialChart = ({ pdata }) => {
  return (
    <Row gutter={16} style={{ height: "350px", paddingTop: 20 }}>
      <ResponsiveContainer width="100%" aspect={3}>
        <RadialBarChart
          width={1000}
          height={450}
          innerRadius="30%"
          outerRadius="100%"
          data={pdata}
          startAngle={180}
          endAngle={0}
        >
          <RadialBar
            minAngle={100}
            label={{
              fill: "#000999",
              position: "insideStart",
              fontStyle: "bold",
            }}
            background
            clockWise={true}
            dataKey="value"
          />
          <Legend
            width={180}
            wrapperStyle={{
              top: 40,
              left: 45,
              backgroundColor: "#F0F0F0",
              border: "1px solid #000",
              borderRadius: 3,
              lineHeight: "40px",
              padding: 10,
              paddingLeft: 22,
            }}
            iconSize={15}
            height="auto"
            layout="vertical"
            verticalAlign="middle"
          />
          <Tooltip />
        </RadialBarChart>
      </ResponsiveContainer>
    </Row>
  );
};

export default MyRadialChart;
