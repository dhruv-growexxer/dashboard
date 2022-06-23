import React from "react";
import { render as rtlRender } from "@testing-library/react";
import App from "../App";
import store from "../state/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

const render = (Component) =>
  rtlRender(
    <Provider store={store()}>
      <Router>{Component}</Router>
    </Provider>
  );

describe("<App />", () => {
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
  test("renders App component", () => {
    const { getByText } = render(<App />);
    expect(getByText("Home Page")).toBeTruthy();
  });
});
