import { Card, Col, List, Row, Statistic } from "antd";
import React, { useEffect } from "react";
import { ArrowDownOutlined } from "@ant-design/icons";
const District = ({ states }) => {
  useEffect(() => {
    console.log(states);
  }, []);
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
    // <Row className="scroll">
    //   <List
    //     grid={{
    //       gutter: 16,
    //       column: 4,
    //     }}
    //     dataSource={states}
    //     renderItem={(item) => (
    //       <Col>
    //         <List.Item>
    //           <Card bordered={true} title={item.name}>
    //             {item.recovered}
    //           </Card>
    //         </List.Item>
    //       </Col>
    //     )}
    //   />
    // {/* {states.map((item, index) => (
    //     <Col span={6} key={index}>
    //       <Card>
    //         <h1>{item.name}</h1>
    //         <h1>Confirmed cases - {item.confirmed}</h1>
    //         <h1>Recovered cases - {item.recovered}</h1>
    //       </Card>
    //     </Col>
    //   ))} */}
    // </Row>
  );
};

export default District;
