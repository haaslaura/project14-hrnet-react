import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    firstName: null,
    lastName: null,
    startDate: null,
    department: null,
    dateOfBirth: null,
    street: null,
    city: null,
    livedInState: null,
    zipCode: null,
}

export const employeesSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    setEmployee: (state, action) => {
        state.firstName = action.payload.firstName,
        state.lastName = action.payload.lastName,
        state.startDate = action.payload.startDate,
        state.department = action.payload.department,
        state.dateOfBirth = action.payload.dateOfBirth,
        state.street = action.payload.street,
        state.city = action.payload.city,
        state.livedInState = action.payload.livedInState,
        state.zipCode = action.payload.zipCode
    },
    clearEmployee: (state) => {
        firstName = null,
        lastName = null,
        startDate = null,
        department = null,
        dateOfBirth = null,
        street = null,
        city = null,
        livedInState = null,
        zipCode = null
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmployee, clearEmployee } = employeesSlice.actions

export default employeesSlice.reducer