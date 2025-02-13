import { fireEvent, render, screen, waitFor } from "@testing-library/react";
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

    // Remplir les champs obligatoires
    fireEvent.change(screen.getByLabelText(/First Name/i), { target: { value: "Patricia" } });
    fireEvent.change(screen.getByLabelText(/Last Name/i), { target: { value: "Davy" } });
    fireEvent.change(screen.getByLabelText(/Date of Birth/i), { target: { value: "1990-01-01" } });
    fireEvent.change(screen.getByLabelText(/Start Date/i), { target: { value: "2025-01-01" } });
    fireEvent.change(screen.getByLabelText(/Street/i), { target: { value: "123 Main St" } });
    fireEvent.change(screen.getByLabelText(/City/i), { target: { value: "New York" } });
    fireEvent.change(screen.getByLabelText(/Zip Code/i), { target: { value: "10001" } });

    // Clic sur le bouton Save
    const button = screen.getByTestId("save-button");
    fireEvent.click(button);

    // Attendre que la modale apparaisse et soit ouverte
    const modal = await screen.findByTestId("confirmation-dialog");

    await waitFor(() => expect(modal).toBeVisible());
    expect(modal).toBeVisible();
    expect(modal).toHaveAttribute("open");


    // Clic sur le bouton de fermeture
    // const closeButton = screen.getByTestId("modal-close-btn");
    // fireEvent.click(closeButton);

    // Fermeture de la modale
    // await waitFor(() => {
    //     expect(modal).not.toBeVisible();
    // });
});