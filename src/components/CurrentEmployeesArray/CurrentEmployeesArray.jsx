import Paper from '@mui/material/Paper'
import { DataGrid, GridActionsCellItem, GridDeleteIcon, GridToolbarQuickFilter } from '@mui/x-data-grid'
import { useDispatch, useSelector } from 'react-redux'
import { clearEmployee } from '../../features/employees/employeesSlice'


/**
 * Component displaying a list of employees in the form of an interactive table
 * Uses Material-UI DataGrid Library and Redux for employee management
 * @returns {JSX.Element} - The employees table
 */
const CurrentEmployeesArray = () => {
    
    const employees = useSelector((state) => state.employees.employees)
    const dispatch = useDispatch()

    /**
     * Displays a quick search bar above the table.
     * @returns {JSX.Element} - Quick search component
     */
    const QuickSearchToolbar = () => {
        return (
          <div style={{ padding: '8px', display: 'flex', justifyContent: 'flex-end' }}>
            <GridToolbarQuickFilter />
          </div>
        )
    }

    /**
     * Removes an employee from the list.
     * @param {string} id - Identifier of the employee to be deleted.
     * @returns {Promise<void>}
     */
    const deleteUser = async (id) => {                
        try {
            // Simulation of an API request (to be replaced by a real fetch later)
            await new Promise(resolve => setTimeout(resolve, 500))
            dispatch(clearEmployee(id))
        } catch (err) {
            console.error("Deletion error :", err)
        }
    }

    /**
     * Return a Date with the format dd/mm/yyyy
     * @param {string} value - The date in a string format
     * @returns {string} - The new date format
     */
    const dateConstructor = (value) => {
        const date = new Date(value)
        const day = String(date.getDate()).padStart(2,"0")
        const month = String(date.getMonth()+1).padStart(2,"0")
        const year = date.getFullYear()
        let currentDate = `${day}/${month}/${year}`
        return currentDate
    }
    
    /**
     * Defining columns for the employee table.
     * @type {Array<Object>}
     */
    const columns = [
        {
            field: 'sanitizedFirstName',
            headerName: 'First name',
            flex: 1,
            resizable: false
        },
        {
            field: 'sanitizedLastName',
            headerName: 'Last name',
            flex: 1,
            resizable: false
        },
        {
            field: 'startDate',
            headerName: 'Start Date',
            flex: 0.9,
            valueGetter: (value) => value && dateConstructor(value),
            resizable: false
        },
        {
            field: 'department',
            headerName: 'Department',
            flex: 1,
            resizable: false
        },
        {
            field: 'dateOfBirth',
            headerName: 'Date of Birth',
            flex: 0.9,
            valueGetter: (value) => value && dateConstructor(value),
            resizable: false
        },
        {
            field: 'sanitizedStreet',
            headerName: 'Street',
            flex: 1,
            resizable: false
        },
        {
            field: 'sanitizedCity',
            headerName: 'City',
            flex: 1,
            resizable: false
        },
        {
            field: 'liveInState',
            headerName: 'State',
            flex: 0.5,
            resizable: false
        },
        {
            field: 'sanitizedZipCode',
            headerName: 'Zip Code',
            type: 'number',
            flex: 0.8,
            resizable: false
        },
        {
            field: 'actions',
            type: 'actions',
            width: 0.3,
            getActions: (params) => [
                <GridActionsCellItem
                    icon={<GridDeleteIcon />}
                    label="Delete"
                    data-testid="delete-button"
                    onClick={() => deleteUser(params.id)}
                />
            ],
          },
    ]
    
    return (
        <Paper sx={{ width: '90%' }} style={{ cursor: 'default' }}>
            <DataGrid            
                rows={employees}
                columns={columns}
                initialState={{ pagination: { paginationModel: { pageSize: 10 } } }}
                pageSizeOptions={[10, 25, 50, 100]}
                disableRowSelectionOnClick // Prevents line selection
                disableColumnFilter // Deactivates the column filter function
                slots={{ toolbar: QuickSearchToolbar }} // Quick filter activation
                data-testid="data-table"
            />
        </Paper>
    )
}

export default CurrentEmployeesArray