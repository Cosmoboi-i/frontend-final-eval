import React from "react";
import { render } from "@testing-library/react";
import Login from "..";

describe("Login", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Login />);
    expect(asFragment()).toMatchSnapshot();
  });
});
