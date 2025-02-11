import { fireEvent, render, screen } from "@testing-library/react";
import { test, expect } from "vitest";

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";

import { setEmployee } from "./employeesSlice";
import CreateEmployeeForm from "./CreateEmployeeForm";


// Creating a mocked-up blind
const store = configureStore({ reducer: { employees: setEmployee }})


test ('Display the create employee form', () => {

    render(
        <Provider store={store}>
            <CreateEmployeeForm />
        </Provider>
    );

    const firstName = screen.getByLabelText("First Name");
    const birthDate = screen.getByLabelText("Date of Birth");
    const button = screen.getByTestId("save-button");

    expect(firstName).toBeInTheDocument();
    expect(birthDate).toBeInTheDocument();
    expect(button).toBeInTheDocument();
});


test ('Display the validation modal after sending an employee\'s informations', async () => {

    render(
        <Provider store={store}>
            <CreateEmployeeForm />
        </Provider>
    );

    const button = screen.getByTestId("save-button");
    fireEvent.click(button);

    const modal = await screen.findByTestId("confirmation-dialog");
    // console.log(modal.outerHTML)
    expect(modal).toBeInTheDocument();
    expect(modal.open).toBe(true);
});