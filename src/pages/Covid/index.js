import React, { useEffect, useState } from "react";

import axios from "axios";

import { Content } from "antd/lib/layout/layout";
import { Col, Row, Statistic } from "antd";
import { createItem, NameStateDropDown, NAME_STATE_OPTIONS } from "./constants";

import { LoadingOutlined } from "@ant-design/icons";

import {
  Tooltip,
  Legend,
  ResponsiveContainer,
  RadialBar,
  RadialBarChart,
} from "recharts";
import MyRadialChart from "./MyRadialChart";

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
    console.log(tempNameState, "tempNameState from onNameStateChange");
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
            <Col span={12}>
              <Statistic
                title={`Total Cases in ${statisticTitle}`}
                value={dataState[nameState]?.total.confirmed}
              />
            </Col>
            <Col span={12}>
              <NameStateDropDown
                placeholder="NameState"
                onChange={onNameStateChange}
                options={NAME_STATE_OPTIONS}
                value={nameState}
              />
            </Col>
          </Row>
          <MyRadialChart pdata={pdata} />
        </>
      )}
    </Content>
  );
};

export default Covid;
