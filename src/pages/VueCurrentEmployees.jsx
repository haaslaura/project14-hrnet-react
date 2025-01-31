import { Link } from "react-router-dom"
import CurrentEmployeesArray from "../components/CurrentEmployeesArray"

const VueCurrentEmployees = () => {
    return (
       <>
           <h1>Current Employees</h1>
           <CurrentEmployeesArray />
           <Link to="/">Home</Link>
       </>
    )
}

export default VueCurrentEmployees