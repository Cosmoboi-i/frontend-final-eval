import { render } from "@testing-library/react";
import React from "react";
import Error from "..";

describe("Error Page", () => {
  it("should render the Error page correctly", () => {
    const { asFragment } = render(<Error />);
    expect(asFragment()).toMatchSnapshot();
  });
});
