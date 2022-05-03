import { render, screen } from "@testing-library/react";
import ShipmentDetails from "../ShipmentDetails";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("log out button", () => {
  // const loginWithRedirect = jest.fn();

  render(
    <MemoryRouter>
        <ShipmentDetails />
    </MemoryRouter>
  );
  const logoutButtonElement = screen.getByRole("table");
  expect(logoutButtonElement).toBeInTheDocument();

  //   const user = userEvent.setup();
  //   await user.click(loginButtonElement);
  //   expect(loginWithRedirect).toHaveBeenCalled();
});
