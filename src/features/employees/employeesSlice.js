import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    employees: []
}

export const employeesSlice = createSlice({
  name: 'employees',
  initialState,
  reducers: {
    setEmployee: (state, action) => {
      state.employees.push(action.payload);
    },
    clearEmployee: (state, action) => {
        state.employees = state.employees.filter(emp => emp.id !== action.payload);
    },
  },
})

// Action creators are generated for each case reducer function
export const { setEmployee, clearEmployee } = employeesSlice.actions

export default employeesSlice.reducer