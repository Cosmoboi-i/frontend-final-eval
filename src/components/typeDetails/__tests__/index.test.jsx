import { render } from "@testing-library/react";
import React from "react";
import TypeDetails from "..";

describe("typeDetails", () => {
  it("should render correctly", () => {
    const { asFragment } = render(<TypeDetails />);
    expect(asFragment()).toMatchSnapshot();
  });
});
