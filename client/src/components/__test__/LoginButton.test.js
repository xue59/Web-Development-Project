import { render, screen } from "@testing-library/react";
import LoginButton from "../LoginButton";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("login button", () => {
  // const loginWithRedirect = jest.fn();

  render(
    // <MemoryRouter>
    <LoginButton />
    // </MemoryRouter>
  );
  const loginButtonElement = screen.getByRole("button", { name: "Login" });
  expect(loginButtonElement).toBeInTheDocument();

  //   const user = userEvent.setup();
  //   await user.click(loginButtonElement);
  //   expect(loginWithRedirect).toHaveBeenCalled();
});
