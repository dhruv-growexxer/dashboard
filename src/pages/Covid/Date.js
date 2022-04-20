import { Card, Col, Statistic } from "antd";
import React from "react";
import { getCurrentDate } from "./constants";

const Date = () => {
  return (
    <>
      <Col span={3}></Col>
      <Col span={6}>
        <Card>
          <Statistic title={"Date"} value={getCurrentDate("-")} />
        </Card>
      </Col>
      <Col span={3}></Col>
    </>
  );
};

export default Date;
