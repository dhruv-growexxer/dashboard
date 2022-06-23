import React from "react";
import { fireEvent, render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import Sidebar from "..";
import store from "../../../state/store";

const render = (Component) =>
  rtlRender(
    <Provider store={store()}>
      <Router>{Component}</Router>
    </Provider>
  );

describe("<SideBar />", () => {
  test("renders SideBar component: on HomePage", () => {
    render(<Sidebar />);
    expect(<Sidebar />).toBeTruthy();
  });
  test("renders SideBar component: on ListPage", () => {
    const { getByText } = render(<Sidebar />);
    fireEvent.click(getByText("LIST"));
    expect(<Sidebar />).toBeTruthy();
  });
  test("renders SideBar component: on CovidPage", () => {
    const { getByText } = render(<Sidebar />);
    fireEvent.click(getByText("COVID"));
    expect(<Sidebar />).toBeTruthy();
  });
});
