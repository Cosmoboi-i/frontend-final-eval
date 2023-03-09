import { render } from "@testing-library/react";
import React from "react";
import PageNotFound from "..";

describe("Error Page", () => {
  it("should render the Error page correctly", () => {
    const { asFragment } = render(<PageNotFound />);
    expect(asFragment()).toMatchSnapshot();
  });
});
