import { render, screen } from "@testing-library/react";
import Search from "../search";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("log out button", () => {
  // const loginWithRedirect = jest.fn();

  render(
    <MemoryRouter>
        <Search />
    </MemoryRouter>
  );
  const logoutButtonElement = screen.getByRole("button");
  expect(logoutButtonElement).toBeInTheDocument();

  //   const user = userEvent.setup();
  //   await user.click(loginButtonElement);
  //   expect(loginWithRedirect).toHaveBeenCalled();
});
