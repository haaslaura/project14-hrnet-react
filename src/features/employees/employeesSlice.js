import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employees: []
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployee: (state, action) => {
      state.employees.push(action.payload); // Ajoute un employé sans écraser les anciens
    },
    clearEmployee: (state, action) => {
        state.employees.filter((employee) => employee.id != action.payload)
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmployee, clearEmployee } = employeesSlice.actions

export default employeesSlice.reducer