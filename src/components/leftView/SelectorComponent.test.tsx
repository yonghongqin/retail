import React from "react";
import { render, fireEvent } from "@testing-library/react";
import { SelectorComponent } from "./SelectorComponent";
describe("<SelectorComponent />", () => {

  it("renders loading state correctly", () => {
    const { queryByRole } = render(
      <SelectorComponent
        data={null}
        label="Test"
        value=""
        loading={true}
        error={null}
        onChange={() => {}}
      />
    );
    expect(queryByRole("progressbar")).toBeInTheDocument();
  });

  it("renders data items correctly", () => {
    const mockData = ["Item A", "Item B"];
    const { getByRole, getByText } = render(
      <SelectorComponent
        data={mockData}
        label="Test"
        value=""
        loading={false}
        error={null}
        onChange={() => {}}
      />
    );
    fireEvent.mouseDown(getByRole("button", { name: "Test" }));
    mockData.forEach((item) => {
      expect(getByText(item)).toBeInTheDocument();
    });
  });

  it("triggers onChange callback on item selection", () => {
    const mockChange = jest.fn();
    const { getByRole, getByText } = render(
      <SelectorComponent
        data={["Item A", "Item B"]}
        label="Test"
        value=""
        loading={false}
        error={null}
        onChange={mockChange}
      />
    );
    fireEvent.mouseDown(getByRole("button", { name: "Test" }));
    fireEvent.click(getByText("Item A"));
    expect(mockChange).toHaveBeenCalledWith("Item A");
  });

});
