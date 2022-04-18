import React, { useState } from "react";

import { Content } from "antd/lib/layout/layout";
import { Col, Row, Select, Statistic } from "antd";
import { PeriodDropDown, PERIOD_OPTIONS } from "./constants";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  AreaChart,
  Area,
  BarChart,
  Bar,
} from "recharts";
const { Option } = Select;

const Covid = () => {
  const [period, setPeriod] = useState(PERIOD_OPTIONS[0].value);

  const pdata = [
    {
      name: period,
      value: "value from api",
    },
  ];
  console.log(period, "current peroid");

  const onPeriodChange = (period) => {
    console.log(period, "period from onPeriodChange");
    setPeriod(period);
  };

  return (
    <Content
      className="site-layout-background"
      style={{
        margin: "24px 16px",
        padding: 24,
        minHeight: 280,
      }}
    >
      <Row gutter={16}>
        <Col span={12}>
          <Statistic title="Total Cases" value={112893} />
        </Col>
        <Col span={12}>
          <PeriodDropDown
            placeholder="Period"
            onChange={onPeriodChange}
            options={PERIOD_OPTIONS}
            value={period}
          />
        </Col>
      </Row>
    </Content>
  );
};

export default Covid;
