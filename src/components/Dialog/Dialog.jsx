import { forwardRef } from "react"
import ModalContent from "./ModalContent"
import './dialog.css'


/**
 * Dialog component for displaying a modal window following completion of a form.
 * This component uses `forwardRef` to allow parent components to control its visibility.
 *
 * @param {Object} props - Component props
 * @param {Function} props.toggleDialog- Function to toggle the modal visibility
 * @param {React.Ref} ref - Reference to the dialog element
 * @returns {JSX.Element} - The modal component
 */
const Dialog = forwardRef(({ toggleDialog}, ref ) => {

    return (
            <dialog
                id="confirmation"
                className="modal"
                data-testid="confirmation-dialog"
                ref={ref}
                onClick={(e) => {
                    if(e.currentTarget === e.target) {
                        toggleDialog()
                    }
                }}
            >
                <button type="button" className="modal-close-button" onClick={toggleDialog} aria-label="Close">
                    <span>Close</span>
                </button>
                <ModalContent />
            </dialog>
    )
})

export default Dialog