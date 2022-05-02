import { render, screen } from "@testing-library/react";
import Footer from "../Footer";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("count images", () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
  
    const imgElements = screen.getAllByRole("img");
    expect(imgElements.length).toBe(3);
  });
