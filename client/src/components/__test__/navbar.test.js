import { render, screen } from "@testing-library/react";
import Navbar from "../navbar";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("log out button", () => {
  // const loginWithRedirect = jest.fn();

  render(
    <MemoryRouter>
        <Navbar />
    </MemoryRouter>
  );
  const logoutButtonElement = screen.getAllByRole("button");
  expect(logoutButtonElement.length).toBe(2);

  //   const user = userEvent.setup();
  //   await user.click(loginButtonElement);
  //   expect(loginWithRedirect).toHaveBeenCalled();
});
