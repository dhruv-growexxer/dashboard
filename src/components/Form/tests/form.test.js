import React from "react";
import { fireEvent, render as rtlRender } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import MyForm from "..";
import store from "../../../state/store";

const render = (Component) =>
  rtlRender(
    <Provider store={store()}>
      <Router>{Component}</Router>
    </Provider>
  );

describe("<MyForm />", () => {
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
  });
  test("renders MyForm component", async () => {
    render(<MyForm />);
    expect(<MyForm />).toBeTruthy();
  });
  test("should open form modal", async () => {
    const { findByText } = render(<MyForm visible={true} title={"hii"} />);
    expect(await findByText("hii")).toBeTruthy();
  });

  test("should close form modal", async () => {
    const { findByText } = render(<MyForm visible={true} title={"hii"} />);
    fireEvent.click(await findByText("Cancel"));
  });

  test("should enter input values in form modal", async () => {
    const { getByLabelText, findByText } = render(
      <MyForm visible={true} title={"hii"} />
    );

    fireEvent.change(getByLabelText("Name"), {
      target: { value: "test" },
    });
    fireEvent.change(getByLabelText("Email"), {
      target: { value: "test@yupmail.com" },
    });
    fireEvent.change(getByLabelText("Address"), {
      target: { value: "test address" },
    });

    fireEvent.click(await findByText("Create"));
  });

  test("should submit form", async () => {
    const { findByText } = render(<MyForm visible={true} />);
    fireEvent.click(await findByText("Create"));
  });
});
