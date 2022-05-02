import { render, screen } from "@testing-library/react";
import RequestAShipment from "../RequestAShipment";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

test("count tables", () => {
    render(
      <MemoryRouter>
        <RequestAShipment />
      </MemoryRouter>
    );
  
    const tableElements = screen.getAllByRole("table");
    expect(tableElements.length).toBe(2);
  });

// test("display form", () => {
//     render(<RequestAShipment />);
//     const closeButton = screen.getByRole("button", {name:"Confirm"});
//     expect(closeButton).toBeEnabled();
//     expect(closeButton).toBeInTheDocument();

//     const addTaskButton = screen.queryByRole("button", {name:"addRow"});
//     expect(addTaskButton).toBeNull();
//     expect(addTaskButton).not.toBeInTheDocument();
// })

// test("not display form", () => {
//     render(<RequestAShipment showForm={false} />);

//     const addTaskButton = screen.getByRole("button", {name:"addRow"});
//     expect(addTaskButton).not.toBeDisabled();
//     expect(addTaskButton).toBeInTheDocument();

//     const closeButton = screen.queryByRole("button", {name:"Confirm"});
//     // expect(closeButton).toBeEnabled();
//     expect(closeButton).not.toBeInTheDocument();
// })