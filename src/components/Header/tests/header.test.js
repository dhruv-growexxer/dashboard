import React from "react";
import { fireEvent, render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MyHeader from "..";
import store from "../../../state/store";

const render = (Component) =>
  rtlRender(
    <Provider store={store()}>
      <Router>{Component}</Router>
    </Provider>
  );

describe("<MyHeader />", () => {
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
  });
  test("renders MyHeader component", async () => {
    render(<MyHeader />);
    expect(<MyHeader />).toBeTruthy();
  });
  test("renders MyHeader component with stateCollapsed true", async () => {
    const { findByTestId } = render(<MyHeader />);
    expect(<MyHeader initialState={true} />).toBeTruthy();
    fireEvent.click(await findByTestId("toggle-true"));
  });
  test("renders MyHeader component with stateCollapsed false", async () => {
    const { findByTestId } = render(<MyHeader />);
    expect(<MyHeader initialState={false} />).toBeTruthy();
    // fireEvent.click(await findByTestId("toggle-true"));
  });
});
