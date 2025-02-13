import { Link } from "react-router-dom"
import CreateEmployeeForm from "../../features/employees/CreateEmployeeForm"

const Home = () => {
     return (
        <section>
            <h1>HRnet</h1>
            <Link to="/employee-list" data-testid="list-link">View Current Employees</Link>
            <h2>Create Employee</h2>
            <CreateEmployeeForm />
        </section>
     )
}

export default Home