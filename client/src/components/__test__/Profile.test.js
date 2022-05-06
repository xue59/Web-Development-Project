import { render, screen } from "@testing-library/react";
import Profile from "../Profile";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

import "@testing-library/jest-dom/extend-expect";

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: ((component, _) => component),
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: "foobar", picture:"pictureURL" },
      isAuthenticated: true,
      loginWithRedirect: jest.fn()
    }
  }
}));

test("profile image", () => {
  render(
    <MemoryRouter>
      <Profile />
    </MemoryRouter>
  );
  const imageElement = screen.getByRole("img");
  expect(imageElement).toBeInTheDocument();
});
