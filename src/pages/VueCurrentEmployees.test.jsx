import { render, screen, fireEvent } from "@testing-library/react";
import { test, expect } from "vitest";

import { MemoryRouter, Route, Routes } from "react-router-dom";
import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { clearEmployee } from "../features/employees/employeesSlice";
import VueCurrentEmployees from "./VueCurrentEmployees";
import Home from "./Home";


// Creating a mocked-up store
const store = configureStore({ reducer: { employees: clearEmployee }})


test ('Display the current employee page', () => {

    render(
        <Provider store={store}>
            <MemoryRouter>
                <VueCurrentEmployees />
            </MemoryRouter>
        </Provider>
    )

    const title = screen.getByText("Current Employees");
    const homeLink = screen.getByTestId("home-link");

    expect(title).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();   
})


test("Clicking on the link to the Home page", () => {
    
    render(
        <Provider store={store}>
            <MemoryRouter initialEntries={["/employee-list"]}> 
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/employee-list" element={<VueCurrentEmployees />} />
                </Routes>
            </MemoryRouter>
        </Provider>
    );
  
    const homeLink = screen.getByTestId("home-link");
    fireEvent.click(homeLink);
  
    expect(screen.getByText("Create Employee")).toBeInTheDocument();
  });