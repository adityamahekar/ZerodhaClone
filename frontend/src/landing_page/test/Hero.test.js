import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Hero from "../home/Hero";

test("renders hero image", () => {
  render(<Hero />);
  expect(screen.getByAltText("Hero Image")).toBeInTheDocument();

});

test("renders signup button correctly", () => {
  render(<Hero />);

  const btn = screen.getByRole("button", { name: /sign up for free/i });

  expect(btn).toBeInTheDocument();
  expect(btn).toHaveClass("btn-primary");
});