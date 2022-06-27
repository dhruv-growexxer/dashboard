import React, { useEffect, useState } from "react";

import axios from "axios";

import { Content } from "antd/lib/layout/layout";
import { Card, Col, Row, Statistic, Select } from "antd";
import {
  createItem,
  NameStateDropDown,
  NAME_STATE_OPTIONS,
  createState,
} from "./constants";

import { LoadingOutlined } from "@ant-design/icons";

import MyRadialChart from "./MyRadialChart";
import Date from "./Date";
import District from "./District";

const { Option } = Select;
const Covid = () => {
  const [nameState, setNameState] = useState(NAME_STATE_OPTIONS[0].value);
  const [dataState, setDataState] = useState([]);
  const [states, setStates] = useState([]);
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
      setStates(createState(data[NAME_STATE_OPTIONS[0].value].districts));
      setPData(createItem(data[NAME_STATE_OPTIONS[0].value].delta));
    } catch (error) {
      // console.log("error from fetchNameState", error);
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
    setStates(createState(dataState[nameState].districts));
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
                // options={NAME_STATE_OPTIONS}
                defaultValue={nameState}
                data-testid="state-name"
              >
                {NAME_STATE_OPTIONS.map((sName) => (
                  <Option key={sName.value} value={sName.value}>
                    {sName.label}
                  </Option>
                ))}
              </NameStateDropDown>
            </Col>
          </Row>
          <MyRadialChart pdata={pdata} />
          <div className="site-statistic-demo-card">
            <District states={states} />
          </div>
        </>
      )}
    </Content>
  );
};

export default Covid;
