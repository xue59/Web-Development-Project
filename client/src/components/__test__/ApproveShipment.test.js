import { render, screen } from "@testing-library/react";
import ApproveShipment from "../ApproveShipment";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("approve shipment table", () => {
  render(
    <MemoryRouter>
      <ApproveShipment />
    </MemoryRouter>
  );
  const tableElement = screen.getByRole("table");
  expect(tableElement).toBeInTheDocument();
});
