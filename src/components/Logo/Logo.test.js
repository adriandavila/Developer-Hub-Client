import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Logo from "./Logo";

test("loads and displays logo", async () => {
  // arrange
  render(<Logo />);

  // act
  await screen.findByTestId("app-logo");

  // assert
  expect(screen.getByTestId("app-logo")).toHaveTextContent("H2 DevHub");
});
