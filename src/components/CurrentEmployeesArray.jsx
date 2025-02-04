import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import { useSelector } from 'react-redux';


const CurrentEmployeesArray = () => {

    const firstName = useSelector((state) => state.employee.firstName)
    const lastName = useSelector((state) => state.employee.lastName)
    const startDate = useSelector((state) => state.employee.startDate)
    const department = useSelector((state) => state.employee.department)
    const dateOfBirth = useSelector((state) => state.employee.dateOfBirth)
    const street = useSelector((state) => state.employee.street)
    const city = useSelector((state) => state.employee.city)
    const livedInState = useSelector((state) => state.employee.livedInState)
    const zipCode = useSelector((state) => state.employee.zipCode)

    const dataRequired = [
        firstName,
        lastName,
        startDate,
        department,
        dateOfBirth,
        street,
        city,
        livedInState,
        zipCode
    ]

    console.log(dataRequired);    

    function createData(name, calories, fat, carbs, protein) {
        return { name, calories, fat, carbs, protein };
      }
      
      const rows = [
        createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
        createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
        createData('Eclair', 262, 16.0, 24, 6.0),
        createData('Cupcake', 305, 3.7, 67, 4.3),
        createData('Gingerbread', 356, 16.0, 49, 3.9),
      ];

     return (
        <>
            {/* <table id="employee-table" className="display">Array</table> */}
            <TableContainer component={Paper}>

                <Table
                    // The main component for the table element. Renders as a <table> by default
                    sx={{ minWidth: 650 }}
                    aria-label="Current Employees"
                    id="employee-table"
                    className="display"
                > 
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">First Name</TableCell>
                            <TableCell align="center">Last Name</TableCell>
                            <TableCell align="center">Start Date</TableCell>
                            <TableCell align="center">Department</TableCell>
                            <TableCell align="center">Date of Birth</TableCell>
                            <TableCell align="center">Street</TableCell>
                            <TableCell align="center">City</TableCell>
                            <TableCell align="center">State</TableCell>
                            <TableCell align="center">Zip Code</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                    {rows.map((row) => (
                        <TableRow
                        key={row.name}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                        <TableCell component="th" scope="row">
                            {row.name}
                        </TableCell>
                        <TableCell align="right">{row.calories}</TableCell>
                        <TableCell align="right">{row.fat}</TableCell>
                        <TableCell align="right">{row.carbs}</TableCell>
                        <TableCell align="right">{row.protein}</TableCell>
                        </TableRow>
                    ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </>
     )
}

export default CurrentEmployeesArray