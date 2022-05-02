import { render, screen } from "@testing-library/react";
import App from "./App";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import { Auth0Provider } from "@auth0/auth0-react";

import "@testing-library/jest-dom/extend-expect";

jest.mock('@auth0/auth0-react', () => ({
  Auth0Provider: ({ children }) => children,
  withAuthenticationRequired: ((component, _) => component),
  useAuth0: () => {
    return {
      isLoading: false,
      user: { sub: "foobar" },
      isAuthenticated: true,
      loginWithRedirect: jest.fn()
    }
  }
}));

test("renders learn react link", () => {
  render(
    <MemoryRouter>
      <Auth0Provider>
        <App />
      </Auth0Provider>
    </MemoryRouter>
  );
  const headingElement = screen.getByRole("heading");
  expect(headingElement).toBeInTheDocument();
});
