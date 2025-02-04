import { useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { states } from "../../data/states";
import { setEmployee } from "./employeesSlice";
import Dialog from "../../components/Dialog/Dialog";


/**
 * Component for creating a new employee form.
 * Manages form state, validation, and submission to the Redux store.
 * @returns {JSX.Element} - The form for created a new employee
 */
const CreateEmployeeForm = () => {   

    const dispatch = useDispatch()
    const dialogRef = useRef(null)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [startDate, setStartDate] = useState('')
    const [department, setDepartment] = useState('Sales')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [street, setStreet] = useState('')
    const [city, setCity] = useState('')
    const [liveInState, setLiveInState] = useState('Alabama')
    const [zipCode, setZipCode] = useState('')

    const [error, setError] = useState(null)
    
    /**
     * Toogles the dialog modal open or closed
     */
    const toogleDialog = () => {
        if(!dialogRef.current) {
            return
        }

        dialogRef.current.hasAttribute("open")
            ? dialogRef.current.close()
            : dialogRef.current.showModal()
    }


    /**
     * Sanitizes input to remove potentially malicious HTML characters
     * @param {string} input - The user input to sanitize
     * @returns {string} - The sanitized input string
     */
    const validateTextInput = (input) => {
        const sanitizedTextInput = input.trim().replace(/[=<>\[\];%]/g, "")
        return sanitizedTextInput
    }

    /**
     * Handles form submission, validates input, and dispatches employee data.
     * @param {Event} e - The form submit event 
     */
    const saveEmployee = (e) => {
        e.preventDefault()
        
        const sanitizedFirstName = validateTextInput(firstName)
        const sanitizedLastName = validateTextInput(lastName)
        const sanitizedStreet = validateTextInput(street)
        const sanitizedCity = validateTextInput(city)
        const sanitizedZipCode = validateTextInput(zipCode)       
    
        const requiredFields = [
            sanitizedFirstName,
            sanitizedLastName,
            startDate,
            department,
            dateOfBirth,
            sanitizedStreet,
            sanitizedCity,
            liveInState,
            sanitizedZipCode
        ]
        
        const validatedForm = requiredFields.every(field => field.trim().length !== 0)

        if (validatedForm) {            
            setError(null)
            
            // sending data to the store
            dispatch(setEmployee({
                firstName : sanitizedFirstName,
                lastName : sanitizedLastName,
                startDate,
                department,
                dateOfBirth,
                street : sanitizedStreet,
                city : sanitizedCity,
                livedInState : liveInState,
                zipCode : sanitizedZipCode
            }))

            toogleDialog()

        } else {
            setError("Please complete all fields.")
        }
    }

    return (
        <div>
            <form onSubmit={saveEmployee} id="create-employee">
            
                {error && <p style={{ color: 'red' }}>{error}</p>}

                <div>
                    <label htmlFor="first-name">First Name</label>
                    <input type="text" id="first-name" required
                        value={firstName}
                        onChange={(e) => setFirstName(e.target.value)} />

                    <label htmlFor="last-name">Last Name</label>
                    <input type="text" id="last-name" required
                        value={lastName}
                        onChange={(e) => setLastName(e.target.value)} />

                    <label htmlFor="date-of-birth">Date of Birth</label>
                    <input id="date-of-birth" type="date" required
                        value={dateOfBirth}
                        onChange={(e) => setDateOfBirth(e.target.value)} />

                    <label htmlFor="start-date">Start Date</label>
                    <input id="start-date" type="date" required
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)} />

                    <fieldset className="address">
                        <legend>Address</legend>

                        <label htmlFor="street">Street</label>
                        <input id="street" type="text" required
                            value={street}
                            onChange={(e) => setStreet(e.target.value)} />

                        <label htmlFor="city">City</label>
                        <input id="city" type="text" required
                            value={city}
                            onChange={(e) => setCity(e.target.value)} />

                        <label htmlFor="state">State</label>
                            <select name="state" id="state"
                                value={liveInState}
                                onChange={(e) => setLiveInState(e.target.value)} >
                                {states.map(state => (
                                    <option
                                        key={state.abbreviation}
                                        value={state.abbreviation}
                                    >
                                        {state.name}
                                    </option>
                                ))}
                            </select>
                            

                        <label htmlFor="zip-code">Zip Code</label>
                        <input id="zip-code" type="number" required
                            value={zipCode}
                            onChange={(e) => setZipCode(e.target.value)} />
                    </fieldset>

                    <label htmlFor="department">Department</label>
                        <select name="department" id="department"
                            value={department}
                            onChange={(e) => setDepartment(e.target.value)} >
                                <option value="Sales">Sales</option>
                                <option value="Marketing">Marketing</option>
                                <option value="Engineering">Engineering</option>
                                <option value="Human Resources">Human Resources</option>
                                <option value="Legal">Legal</option>
                        </select>
                </div>

                <button className="save-button" type="submit">Save</button>

            </form>

            <Dialog toogleDialog={toogleDialog} ref={dialogRef} />
    </div>
    )
}


export default CreateEmployeeForm