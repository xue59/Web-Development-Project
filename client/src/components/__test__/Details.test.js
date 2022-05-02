import { render, screen } from "@testing-library/react";
import Details from "../Details";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("details table", () => {
  render(
    <MemoryRouter>
      <Details />
    </MemoryRouter>
  );
  const tableElement = screen.getByRole("table");
  expect(tableElement).toBeInTheDocument();
});