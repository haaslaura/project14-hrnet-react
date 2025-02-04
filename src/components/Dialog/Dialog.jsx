import { forwardRef } from "react"
import PropTypes from "prop-types"
import ModalContent from "./ModalContent"
import './dialog.css'


/**
 * Dialog component for displaying a modal window.
 * This component uses `forwardRef` to allow parent components to control its visibility.
 *
 * @param {Object} props - Component props
 * @param {Function} props.toogleDialog - Function to toggle the modal visibility
 * @param {React.Ref} ref - Reference to the dialog element
 * @returns {JSX.Element} - The modal component
 */
const Dialog = forwardRef(({ toogleDialog }, ref ) => {

    return (
            <dialog
                id="confirmation"
                className="modal"
                ref={ref}
                onClick={(e) => {
                    if(e.currentTarget === e.target) {
                        toogleDialog()
                    }
                }}
            >
                <button type="button" className="modal-close-button" onClick={toogleDialog} aria-label="Close">
                    <span>Close</span>
                </button>
                <ModalContent />
            </dialog>
    )
})

Dialog.propTypes = {
    toogleDialog: PropTypes.func.isRequired,
}

export default Dialog