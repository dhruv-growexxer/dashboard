import React, { useEffect, useState } from "react";

import axios from "axios";

import { Content } from "antd/lib/layout/layout";
import { Col, Row, Select, Statistic } from "antd";
import { NameStateDropDown, NAME_STATE_OPTIONS } from "./constants";

import { Spin } from "antd";
import { LoadingOutlined } from "@ant-design/icons";

import { useDispatch, useSelector } from "react-redux";
import { bindActionCreators } from "redux";

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
  RadialBar,
  RadialBarChart,
} from "recharts";

const { Option } = Select;

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

  // console.log(
  //   dataState[nameState]?.delta,
  //   "dataState from outside of use effect"
  // );

  const fetchNameState = async () => {
    try {
      const { data } = await axios.get(
        "https://data.covid19india.org/v4/min/data.min.json"
      );
      setDataState(data);
    } catch (error) {
      console.log("error from fetchNameState", error);
    } finally {
      console.log(
        dataState[NAME_STATE_OPTIONS[0].value],
        "dataState from inside of fetchNameState"
      );
      const item = [
        {
          name: "confirmed",
          value: dataState[NAME_STATE_OPTIONS[0].value]?.delta.confirmed,
        },
        {
          name: "deceased",
          value: dataState[NAME_STATE_OPTIONS[0].value]?.delta.deceased,
        },
        {
          name: "recovered",
          value: dataState[NAME_STATE_OPTIONS[0].value]?.delta.recovered,
        },
        {
          name: "tested",
          value: dataState[NAME_STATE_OPTIONS[0].value]?.delta.tested,
        },
        {
          name: "vaccinated1",
          value: dataState[NAME_STATE_OPTIONS[0].value]?.delta.vaccinated1,
        },
        {
          name: "vaccinated2",
          value: dataState[NAME_STATE_OPTIONS[0].value]?.delta.vaccinated2,
        },
      ];
      setPData(item);
      setLoader(false);
    }
  };

  const onNameStateChange = (nameState) => {
    for (let key in NAME_STATE_OPTIONS) {
      if (NAME_STATE_OPTIONS.hasOwnProperty(key)) {
        var { value, label } = NAME_STATE_OPTIONS[key];
        if (nameState === value) {
          console.log(label, ": label");
          setStatisticTitle(label);
        }
      }
    }
    // console.log(nameState, "NameState from onNameStateChange");
    setNameState(nameState);
    console.log(
      dataState[nameState]?.delta,
      "NameState from onNameStateChange"
    );
    const item = [
      {
        name: "confirmed",
        value: dataState[nameState]?.delta.confirmed,
      },
      {
        name: "deceased",
        value: dataState[nameState]?.delta.deceased,
      },
      {
        name: "recovered",
        value: dataState[nameState]?.delta.recovered,
      },
      {
        name: "tested",
        value: dataState[nameState]?.delta.tested,
      },
      {
        name: "vaccinated1",
        value: dataState[nameState]?.delta.vaccinated1,
      },
      {
        name: "vaccinated2",
        value: dataState[nameState]?.delta.vaccinated2,
      },
    ];
    setPData(item);
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
          <ResponsiveContainer width="100%" aspect={3}>
            <RadialBarChart
              width={730}
              height={250}
              innerRadius="10%"
              outerRadius="80%"
              data={pdata}
              startAngle={180}
              endAngle={0}
            >
              <RadialBar
                minAngle={100}
                label={{ fill: "#666", position: "insideStart" }}
                background
                clockWise={true}
                dataKey="value"
              />
              <Legend
                iconSize={10}
                width={120}
                height={140}
                layout="vertical"
                verticalAlign="middle"
                align="right"
              />
              <Tooltip />
            </RadialBarChart>
          </ResponsiveContainer>
        </>
      )}
    </Content>
  );
};

export default Covid;
