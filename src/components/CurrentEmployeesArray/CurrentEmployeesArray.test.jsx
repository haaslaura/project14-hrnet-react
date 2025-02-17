import { render, screen, waitFor } from "@testing-library/react";
import { test, expect } from "vitest";
import { act } from "react";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import CurrentEmployeesArray from "./CurrentEmployeesArray";
import { employeesSlice } from "../../features/employees/employeesSlice";


describe('The current employees table', () => {
    
    test('Displays employee data in the table', async () => {

        const mockEmployees = [
            { id: 1, sanitizedFirstName: 'Alice', sanitizedLastName: 'Dupont', startDate: "01/01/2025", department: "Engineering", dateOfBirth: "01/01/1964", sanitizedStreet: "13 street", sanitizedCity: "Cullman", liveInState: "Alabama", sanitizedZipCode: "35058"}
        ];

        // Creating a mocked-up blind
        const store = configureStore({
            reducer: {
                employees: employeesSlice.reducer,
            },
            preloadedState: {
                employees: {
                    employees: mockEmployees
                }
            }
        });

        await act(async () => {
            render(
                <Provider store={store}>
                    <CurrentEmployeesArray />
                </Provider>
            );
        });

        // Checks that the table is displayed correctly
        const table = await screen.getByTestId("data-table");
        await waitFor(() => expect(table).toBeInTheDocument());

        // Checks that employees are displayed
        await waitFor(() => {
            expect(screen.getByText('Alice')).toBeInTheDocument();
            expect(screen.getByText('Dupont')).toBeInTheDocument();
            expect(screen.getByText('01/01/2025')).toBeInTheDocument();
            expect(screen.getByText('Engineering')).toBeInTheDocument();
            expect(screen.getByText('01/01/1964')).toBeInTheDocument();
            expect(screen.getByText('13 street')).toBeInTheDocument();
            expect(screen.getByText('Cullman')).toBeInTheDocument();
            expect(screen.getByText('Alabama')).toBeInTheDocument();
            expect(screen.getByText('35058')).toBeInTheDocument();
        });
    });
});