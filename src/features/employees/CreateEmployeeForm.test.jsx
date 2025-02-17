import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { setEmployee } from "./employeesSlice";
import CreateEmployeeForm from "./CreateEmployeeForm";

import { act } from "react";


describe('The create employee form', async() => {

    const mocks = vi.hoisted(() => ({
        showModalMock: vi.fn()
    }));
    
    // Creating a mocked-up blind
    const store = configureStore({ reducer: { employees: setEmployee }});

    beforeAll(() => {
        HTMLDialogElement.prototype.showModal = mocks.showModalMock;
    });

    test ('Display the create employee form', async() => {

        await act(async () => {
            render(
                <Provider store={store}>
                    <CreateEmployeeForm />
                </Provider>
            );
        });
    
        const firstName = screen.getByLabelText("First Name");
        const birthDate = screen.getByLabelText("Date of Birth");
        const button = screen.getByTestId("save-button");
    
        expect(firstName).toBeInTheDocument();
        expect(birthDate).toBeInTheDocument();
        expect(button).toBeInTheDocument();
    });
    
    
    test ('Display the validation modal after sending an employee\'s informations', async () => {
    
        await act(async () => {
            render(
                <Provider store={store}>
                    <CreateEmployeeForm />
                </Provider>
            );
        });
    
        // Fill in the mandatory fields
        await act(async () => {
            fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "Patricia" } });
            fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Davy" } });
            fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: "1990-01-01" } });
            fireEvent.change(screen.getByLabelText(/Start Date/i), { target: { value: "2025-01-01" } });
            fireEvent.change(screen.getByLabelText(/Street/i), { target: { value: "123 Main St" } });
            fireEvent.change(screen.getByLabelText(/City/i), { target: { value: "New York" } });
            fireEvent.change(screen.getByLabelText(/Zip Code/i), { target: { value: "10001" } })
        });
    
        // Click on the Save button
        await act(async () => {
            fireEvent.click(screen.getByTestId("save-button"));
        });
    
        // Check that the showModal function has been called    
        await new Promise((resolve) => setTimeout(resolve, 800));
        expect(mocks.showModalMock).toBeCalledTimes(1);
    });
});