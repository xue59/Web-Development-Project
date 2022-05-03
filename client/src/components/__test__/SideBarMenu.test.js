import { render, screen } from "@testing-library/react";
import SideBarMenu from "../SideBarMenu";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("log out button", () => {
  // const loginWithRedirect = jest.fn();

  render(
    <MemoryRouter>
        <SideBarMenu />
    </MemoryRouter>
  );
  const logoutButtonElement = screen.getByRole("navigation");
  expect(logoutButtonElement).toBeInTheDocument();

  //   const user = userEvent.setup();
  //   await user.click(loginButtonElement);
  //   expect(loginWithRedirect).toHaveBeenCalled();
});
