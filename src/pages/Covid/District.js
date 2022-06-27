import { Card, List } from "antd";
import React from "react";
const District = ({ states }) => {
  return (
    <>
      <List
        className="wrapper"
        dataSource={states}
        renderItem={(item) => (
          <Card bordered={true} title={item.name}>
            {item.recovered}
          </Card>
        )}
      />
    </>
  );
};

export default District;
