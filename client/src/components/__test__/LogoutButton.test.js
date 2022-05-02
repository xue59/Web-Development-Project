import { render, screen } from "@testing-library/react";
import LogoutButton from "../LogoutButton";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("log out button", () => {
  // const loginWithRedirect = jest.fn();

  render(
    // <MemoryRouter>
    <LogoutButton />
    // </MemoryRouter>
  );
  const logoutButtonElement = screen.getByRole("button", { name: "Logout" });
  expect(logoutButtonElement).toBeInTheDocument();

  //   const user = userEvent.setup();
  //   await user.click(loginButtonElement);
  //   expect(loginWithRedirect).toHaveBeenCalled();
});
