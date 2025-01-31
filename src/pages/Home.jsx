import { Link } from "react-router-dom"
import CreateEmployeeForm from "../components/CreateEmployeeForm"

const Home = () => {
     return (
        <>
            <h1>HRnet</h1>
            <Link to="/employee-list">View Current Employees</Link>
            <h2>Create Employee</h2>
            <CreateEmployeeForm />
        </>
     )
}

export default Home