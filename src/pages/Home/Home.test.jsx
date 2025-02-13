import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { setEmployee } from "../../features/employees/employeesSlice";
import Home from "./Home";
import VueCurrentEmployees from "../CurrentEmployees/VueCurrentEmployees";


// Creating a mocked-up store
const store = configureStore({ reducer: { employees: setEmployee }})


test ('Display the home page', () => {

    render(
        <Provider store={store}>
            <MemoryRouter>
                <Home />
            </MemoryRouter>
        </Provider>
    )

    const link = screen.getByTestId("list-link");
    const title = screen.getByText("Create Employee");

    expect(link).toBeInTheDocument();
    expect(title).toBeInTheDocument();
});


test("Clicking on the link to the Employee List page", () => {

    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/"]}> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employee-list" element={<VueCurrentEmployees />} />
                </Routes>
            </MemoryRouter>
        </Provider>
    );
  
    const link = screen.getByTestId("list-link");
    fireEvent.click(link);
  
    expect(screen.getByText("Current Employees")).toBeInTheDocument();
  });