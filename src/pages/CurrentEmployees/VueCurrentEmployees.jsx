import { Link } from "react-router-dom"
import CurrentEmployeesArray from "../../components/CurrentEmployeesArray/CurrentEmployeesArray"

const VueCurrentEmployees = () => {
    return (
       <section>
           <h1>Current Employees</h1>
           <br />
           <CurrentEmployeesArray />
           <br />
           <Link to="/" data-testid="home-link">Home</Link>
       </section>
    )
}

export default VueCurrentEmployees