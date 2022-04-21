import { Card, Col, List, Row, Statistic } from "antd";
import React, { useEffect } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
const District = ({ states }) => {
  useEffect(() => {
    console.log(states);
  }, []);
  return (
    <Row gutter={16}>
      <List
        grid={{
          gutter: 16,
          xs: 1,
          sm: 2,
          md: 4,
          lg: 4,
          xl: 6,
          xxl: 3,
        }}
        dataSource={states}
        renderItem={(item) => (
          <List.Item>
            <Card title={item.name}>Card content</Card>
          </List.Item>
        )}
      />
      {/* {states.map((item, index) => (
        <Col span={6} key={index}>
          <Card>
            <h1>{item.name}</h1>
            <h1>Confirmed cases - {item.confirmed}</h1>
            <h1>Recovered cases - {item.recovered}</h1>
          </Card>
        </Col>
      ))} */}
    </Row>
  );
};

export default District;
