import React from "react";
import { render } from "@testing-library/react";
import Main from "..";

describe("Header", () => {
  it("should render properly", () => {
    const { asFragment } = render(<Main />);
    expect(asFragment()).toMatchSnapshot();
  });
});
