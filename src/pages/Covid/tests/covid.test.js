import React from "react";
import { fireEvent, render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import axios from "axios";
import Covid from "..";
import store from "../../../state/store";
import { createItem, createState, getCurrentDate } from "../constants";
import { dummyResponse } from "./tempResponse";

jest.mock("axios");

const onChangeMock = jest.fn();

const render = (Component) =>
  rtlRender(
    <Provider store={store()}>
      <Router>{Component}</Router>
    </Provider>
  );

describe("<Covid />", () => {
  beforeAll(() => {
    Object.defineProperty(window, "matchMedia", {
      writable: true,
      value: jest.fn().mockImplementation((query) => ({
        matches: false,
        media: query,
        onchange: jest.fn(),
        addListener: jest.fn(), // Deprecated
        removeListener: jest.fn(), // Deprecated
        addEventListener: jest.fn(),
        removeEventListener: jest.fn(),
        dispatchEvent: jest.fn(),
      })),
    });
    axios.get.mockImplementation(() => Promise.resolve(dummyResponse));
  });
  test("renders Covid component", async () => {
    render(<Covid />);
    expect(<Covid />).toBeTruthy();
  });
  test("change state from dropdown", async () => {
    const {
      getByTestId,

      getByRole,
      findByRole,

      container,
    } = render(<Covid />);

    await findByRole("combobox");
    const select = container.querySelector(".ant-select-selection-item");
    fireEvent.mouseDown(select); // this should open select in unit tests

    // .ant-select-item-option-content
    fireEvent.click(
      document.querySelectorAll(".ant-select-item-option-content")[1]
    );
    fireEvent.blur(getByRole("combobox"));
    fireEvent.focus(getByRole("combobox"));
    // screen.debug();

    axios.mockResolvedValue(dummyResponse);
    expect(getByTestId("state-name")).toBeTruthy();
  });
});

describe("constants", () => {
  test("should test creatItem", () => {
    const data = createItem({
      name: "Hii",
      confirmed: 200,
      recovered: 200,
    });
    expect(data).toBeTruthy();
  });
  test("should test createState", () => {
    const data = createState({
      Anantapur: {
        total: {
          confirmed: 157843,
          deceased: 1093,
          recovered: 156699,
          tested: 787085,
          vaccinated1: 2690082,
          vaccinated2: 1611476,
        },
      },
    });
    expect(data).toBeTruthy();
  });
  test("should test getCurrentDate", () => {
    let data = getCurrentDate();
    expect(data).toBeTruthy();
    data = getCurrentDate("/");
  });
});
