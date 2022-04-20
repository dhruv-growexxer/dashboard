import { Row, Select, Space } from "antd";
import styled from "styled-components";

export const NAME_STATE_OPTIONS = [
  {
    label: "Andhra Pradesh",
    value: "AP",
  },
  {
    label: "Arunachal Pradesh",
    value: "AR",
  },
  {
    label: "Assam",
    value: "AS",
  },
  {
    label: "Bihar",
    value: "BR",
  },
  {
    label: "Chhattisgarh",
    value: "CH",
  },
  {
    label: "Goa",
    value: "GA",
  },
  {
    label: "Gujarat",
    value: "GJ",
  },
  {
    label: "Haryana",
    value: "HR",
  },
  {
    label: "Himachal Pradesh",
    value: "HP",
  },
  {
    label: "Jammu and Kashmir",
    value: "JK",
  },
  {
    label: "Jharkhand",
    value: "JH",
  },
  {
    label: "Karnataka",
    value: "KA",
  },
];

export const fill = [
  "#83a6ed",
  "#8884d8",
  "#8dd1e1",
  "#82ca9d",
  "#a4de6c",
  "#d0ed57",
];

export const createItem = (item) => {
  var myObject = [];

  // eslint-disable-next-line array-callback-return
  Object.keys(item).map((key, index) => {
    const temp = {};
    temp.name = key;
    temp.value = item[key];
    temp.fill = fill[index];
    console.log(temp);
    myObject.push(temp);
  });

  return myObject;
};

export const NameStateDropDown = styled(Select)`
  width: 30%;
  float: right;
  min-width: 325px;
  @media screen and (max-width: 500px) {
    max-width: 325px;
    min-width: initial;
  }
`;
