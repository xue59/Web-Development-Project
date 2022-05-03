import { render, screen } from "@testing-library/react";
import SearchRecordList from "../SearchRecordList";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("log out button", () => {
  // const loginWithRedirect = jest.fn();

  render(
    <MemoryRouter>
        <SearchRecordList />
    </MemoryRouter>
  );
  const logoutButtonElement = screen.getByRole("heading");
  expect(logoutButtonElement).toBeInTheDocument();

  //   const user = userEvent.setup();
  //   await user.click(loginButtonElement);
  //   expect(loginWithRedirect).toHaveBeenCalled();
});
