import { forwardRef } from "react"
import './dialog.css'


/**
 * Dialog component for displaying a modal window following completion of a form.
 * This component uses `forwardRef` to allow parent components to control its visibility.
 *
 * @param {Object} props - Component props
 * @param {Function} props.toggleDialog- Function to toggle the modal visibility
 * @param {string} props.textModal - The text content of the modal
 * @param {React.Ref} ref - Reference to the dialog element
 * @returns {JSX.Element} - The modal component
 */
const Dialog = forwardRef(({ toggleDialog, textModal }, ref ) => {

    return (
        <dialog
            id="confirmation"
            className="hl-modal"
            data-testid="confirmation-dialog"
            ref={ref}
            onClick={(e) => {
                if(e.currentTarget === e.target) {
                    toggleDialog()
                }
            }}
        >
            <button type="button" className="hl-modal-close-button" data-testid="modal-close-btn" onClick={toggleDialog} aria-label="Close">
                <span>Close</span>
            </button>
            <p className="hl-modal-content">{textModal}</p>
        </dialog>
    )
})

export default Dialog