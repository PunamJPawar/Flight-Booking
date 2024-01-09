import { Link, Outlet } from "react-router-dom";
const FlightNavBar = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-md shadow" data-bs-theme="dark">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to='/search'>Search</Link>
                    </li>
                    
                    {/* <li className="nav-item">
                        <Link className="nav-link" to='/traveller'>Traveller</Link>
                    </li> */}

                    
                </ul>
            </nav>
            <Outlet />

        </div>
    )
}
export default FlightNavBar;