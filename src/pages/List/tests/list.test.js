import React from "react";
import { fireEvent, render as rtlRender, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import List from "..";
import store from "../../../state/store";
import AddUser from "../AddUser";
import MyForm from "../../../components/Form";

const render = (Component) =>
  rtlRender(
    <Provider store={store()}>
      <Router>{Component}</Router>
    </Provider>
  );

describe("<List />", () => {
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
  test("renders List component", async () => {
    render(<List />);
    expect(<List />).toBeTruthy();
  });
  test("should open delete modal and delete item", async () => {
    const { findByText, getByText } = render(<List />);
    fireEvent.click(document.querySelector(".anticon-delete"));
    expect(
      await findByText("Are you sure you want to delete this user?")
    ).toBeTruthy();
    fireEvent.click(getByText("Yes"));
  });
});

describe("AddUser component", () => {
  test("should render AddUser component", () => {
    render(<AddUser />);
    expect(<AddUser />).toBeTruthy();
  });
  test("should open modal on clicking Add User btn", async () => {
    const { getByText, findByText } = render(<AddUser />);
    fireEvent.click(getByText("Add User"));
    expect(await findByText("Add a new user")).toBeTruthy();
    const { getByLabelText } = render(<MyForm visible={true} title={"hii"} />);

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
});
