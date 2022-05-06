import { render, screen } from "@testing-library/react";
import AutoComplete from "../AutoComplete";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("auto complete header", () => {
  render(
    <MemoryRouter>
      <AutoComplete />
    </MemoryRouter>
  );
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
