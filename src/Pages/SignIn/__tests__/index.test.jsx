import { render } from "@testing-library/react";
import React from "react";
import Home from "..";

describe("Error Page", () => {
  it("should render the Home page correctly", () => {
    const { asFragment } = render(<Home />);
    expect(asFragment()).toMatchSnapshot();
  });
});
