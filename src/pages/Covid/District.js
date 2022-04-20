import { Card, Col, Row, Statistic } from "antd";
import React, { useEffect } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
const District = ({ states }) => {
  useEffect(() => {
    console.log(states);
  }, []);
  return (
    <>
      {states.map((item, index) => (
        <Row gutter={16} key={index}>
          <Col span={4}>
            <Card>
              <Statistic title={item.name}></Statistic>
              <h1>"Confirmed cases" {item.confirmed}</h1>
              <h1>"Recovered cases" {item.recovered}</h1>
            </Card>
          </Col>
        </Row>
      ))}
      {/* <Row gutter={16}>
        <Col span={4}>
          <Card>
            <Statistic
              title="Idle"
              value={9.3}
              precision={2}
              valueStyle={{ color: "#cf1322" }}
              prefix={<ArrowDownOutlined />}
              suffix="%"
            />
          </Card>
        </Col>
      </Row> */}
    </>
  );
};

export default District;
