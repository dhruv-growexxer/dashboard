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

export const NameStateDropDown = styled(Select)`
  width: 30%;
  float: right;
  min-width: 325px;
  @media screen and (max-width: 500px) {
    max-width: 325px;
    min-width: initial;
  }
`;
