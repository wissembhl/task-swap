import React from "react";
import { render, fireEvent } from "@testing-library/react";
import MainDashboard from "./mainDasboard";

test("renders MainDashboard component", () => {
  const { container } = render(<MainDashboard />);

  // Use container to target elements based on their structure
  const mainDashboard = container;

  // Add assertions specific to the elements you want to test
  expect(mainDashboard).toBeInTheDocument();

  // You can also check specific elements within MainDashboard using their structure
  // For example, if you have a title in a div within MainDashboard:
  const titleElement = mainDashboard.querySelector(".title-class");
  expect(titleElement).toBeInTheDocument();
});

test("left move button should work", () => {
  const { getByTestId } = render(<MainDashboard />);

  // Simulate clicking the left move button
  const leftMoveButton = getByTestId("left-move-button");
  fireEvent.click(leftMoveButton);

  // Add assertions to check the expected behavior after the button click
});

test("right move button should work", () => {
  const { getByTestId } = render(<MainDashboard />);

  // Simulate clicking the right move button
  const rightMoveButton = getByTestId("right-move-button");
  fireEvent.click(rightMoveButton);

  // Add assertions to check the expected behavior after the button click
});
