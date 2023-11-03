import React from "react";
import { render, fireEvent } from "@testing-library/react";
import CheckboxesGroup from "./checkboxesGroup";

test("renders CheckboxesGroup component", () => {
  // Define your test itemsList and setItemsList
  const itemsList = [
    { priority: 1, label: "1", checked: false },
    { priority: 2, label: "2", checked: true },
    // Add more test data as needed
  ];
  const setItemsList = jest.fn();

  const { getByText, getByLabelText } = render(
    <CheckboxesGroup itemsList={itemsList} setItemsList={setItemsList} />
  );

  // Add assertions specific to your component's content and behavior
  // For example, you can check if the labels are present
  expect(getByText("1")).toBeInTheDocument();
  expect(getByText("2")).toBeInTheDocument();

  // You can also check if the checkboxes are checked/unchecked
  expect(getByLabelText("1").checked).toBe(false);
  expect(getByLabelText("2").checked).toBe(true);
});

test("handles checkbox changes", () => {
  const itemsList = [
    { priority: 1, label: "1", checked: false },
    { priority: 2, label: "2", checked: true },
    // Add more test data as needed
  ];
  const setItemsList = jest.fn();

  const { getByLabelText } = render(
    <CheckboxesGroup itemsList={itemsList} setItemsList={setItemsList} />
  );

  // Simulate a checkbox change by clicking it
  const checkbox1 = getByLabelText("1");
  fireEvent.click(checkbox1);

  // Assert that the setItemsList function was called with the updated value
  expect(setItemsList).toHaveBeenCalledWith([
    { priority: 1, label: "1", checked: true },
    { priority: 2, label: "2", checked: true },
    // Check other items if needed
  ]);
});
