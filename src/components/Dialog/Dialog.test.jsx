import { fireEvent, render, screen } from "@testing-library/react";
import { describe, test, expect, vi } from "vitest";

import { act } from "react";
import Dialog from "./Dialog";


const mocks = vi.hoisted(() => ({
    closeModalMock: vi.fn(),
}));


describe('The modal component', () => {

    beforeAll(() => {
        HTMLDialogElement.prototype.close = mocks.closeModalMock;
    });

    test ('should close the modal when the close button is clicked', async () => {
        
        await act(async () => {
            render(
                <Dialog toggleDialog={mocks.closeModalMock} />
            );
        });

        const modalBtn = screen.getByTestId("modal-close-btn");
        expect(modalBtn).toBeInTheDocument();

        await act(async () => {
            fireEvent.click(modalBtn);
        });

        expect(mocks.closeModalMock).toHaveBeenCalledTimes(1);
    });
});