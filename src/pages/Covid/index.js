import React, { useEffect, useState } from "react";

import axios from "axios";

import { Content } from "antd/lib/layout/layout";
import { Card, Col, Row, Statistic } from "antd";
import {
  createItem,
  NameStateDropDown,
  NAME_STATE_OPTIONS,
  getCurrentDate,
} from "./constants";

import {
  LoadingOutlined,
  ArrowUpOutlined,
  ArrowDownOutlined,
} from "@ant-design/icons";

import MyRadialChart from "./MyRadialChart";
import Date from "./Date";

const Covid = () => {
  const [nameState, setNameState] = useState(NAME_STATE_OPTIONS[0].value);
  const [dataState, setDataState] = useState([]);
  const [loader, setLoader] = useState(false);
  const [statisticTitle, setStatisticTitle] = useState("Andhra Pradesh");

  const [pdata, setPData] = useState([]);

  useEffect(() => {
    setLoader(true);
    fetchNameState();
  }, []);

  const fetchNameState = async () => {
    try {
      const { data } = await axios.get(
        "https://data.covid19india.org/v4/min/data.min.json"
      );
      setDataState(data);

      setPData(createItem(data[NAME_STATE_OPTIONS[0].value].delta));
    } catch (error) {
      console.log("error from fetchNameState", error);
    } finally {
      setLoader(false);
    }
  };

  const onNameStateChange = async (nameState) => {
    for (let key in NAME_STATE_OPTIONS) {
      if (NAME_STATE_OPTIONS.hasOwnProperty(key)) {
        var { value, label } = NAME_STATE_OPTIONS[key];
        if (nameState === value) {
          setStatisticTitle(label);
        }
      }
    }
    const tempNameState = await nameState;
    // console.log(tempNameState, "tempNameState from onNameStateChange");
    setNameState(nameState);
    setPData(createItem(dataState[tempNameState].delta));
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
      {loader ? (
        <LoadingOutlined style={{ fontSize: 24 }} spin />
      ) : (
        <>
          <Row gutter={16}>
            <Col span={6}>
              <Card>
                <Statistic
                  title={`Total Cases in ${statisticTitle}`}
                  value={dataState[nameState]?.total.confirmed}
                />
              </Card>
            </Col>
            <Date />
            <Col span={6}>
              <NameStateDropDown
                placeholder="NameState"
                onChange={onNameStateChange}
                options={NAME_STATE_OPTIONS}
                value={nameState}
              />
            </Col>
          </Row>
          <MyRadialChart pdata={pdata} />
          <div className="site-statistic-demo-card">
            <Row gutter={16}>
              <Col span={3}>
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

              <Col span={3}>
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

              <Col span={3}>
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

              <Col span={4}>
                <Card>
                  <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>

              <Col span={3}>
                <Card>
                  <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{ color: "#cf1322" }}
                    prefix={<ArrowUpOutlined />}
                    suffix="%"
                  />
                </Card>
              </Col>
            </Row>
          </div>
        </>
      )}
    </Content>
  );
};

export default Covid;
