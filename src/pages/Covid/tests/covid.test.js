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
        onchange: null,
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
    // const { findByText } = render(<Covid />);
    // expect(<Covid />).toBeTruthy();
    // fireEvent.click(await findByText("Andhra Pradesh"));
    const { getByText, getByRole, findByRole, findByTestId } = render(
      <Covid />
    );
    await findByRole("combobox");
    // await waitForElement(() => getByRole("combobox"));
    fireEvent.click(await findByTestId("state-name"));

    // fireEvent.mouseDown(getByRole("combobox"));
    // fireEvent.change(getByRole("combobox"), {
    //   target: {
    //     value: "Assam",
    //   },
    // });
    // .ant-select-item-option-content
    screen.debug();
    fireEvent.click(
      document.querySelectorAll(".ant-select-item-option-content")[1]
    );
    fireEvent.blur(getByRole("combobox"));
    fireEvent.focus(getByRole("combobox"));

    // fireEvent.click(await findByTestId("state-name"));
    // console.log(screen.getAllByRole("combobox"), "combobox ");
    // fireEvent.click(await findByText(/assam/i));
    // axios.mockResolvedValue(dummyState);
    // expect(getByTestId("state-name")).toBeTruthy();
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
