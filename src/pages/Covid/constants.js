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
  "#000333",
  "#8055aa",
  "#8dd1e1",
  "#333999",
  "#666333",
  "#83a6ed",
];

export const createItem = (item) => {
  var myObject = [];

  // eslint-disable-next-line array-callback-return
  Object.keys(item).map((key, index) => {
    const temp = {};
    temp.name = key;
    temp.value = item[key];
    temp.fill = fill[index];
    // console.log(temp);
    myObject.push(temp);
  });

  return myObject;
};

export const createState = (stateObj) => {
  var myObject = [];

  // eslint-disable-next-line array-callback-return
  Object.keys(stateObj).map((key, index) => {
    const temp = {};
    temp.name = key;
    temp.confirmed = stateObj[key].total.confirmed;
    temp.recovered = stateObj[key].total.recovered;
    // temp.fill = fill[index];
    // // console.log(temp);
    myObject.push(temp);
  });

  return myObject;
};

export function getCurrentDate(separator = "") {
  let newDate = new Date();
  let date = newDate.getDate();
  let month = newDate.getMonth() + 1;
  let year = newDate.getFullYear();

  return `${year}${separator}${
    month < 10 ? `0${month}` : `${month}`
  }${separator}${date}`;
}

export const NameStateDropDown = styled(Select)`
  width: 30%;
  float: right;
  min-width: 325px;
  @media screen and (max-width: 500px) {
    max-width: 325px;
    min-width: initial;
  }
`;
