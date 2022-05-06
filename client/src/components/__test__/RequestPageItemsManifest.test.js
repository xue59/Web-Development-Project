import { render, screen } from "@testing-library/react";
import RequestPageItemsManifest from "../RequestPageItemsManifest";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("count table", () => {
    render(
      <MemoryRouter>
        <RequestPageItemsManifest />
      </MemoryRouter>
    );
  
    const tableElements = screen.getAllByRole("table");
    expect(tableElements.length).toBe(2);
  });
