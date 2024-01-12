import { Link, Outlet } from "react-router-dom";
const FlightNavBar = ()=>{
    return(
        <div>
            <nav className="navbar navbar-expand-md shadow  justify-content-end" data-bs-theme="dark">
            <img className="main" src="https://tse1.mm.bing.net/th?id=OIP.SeYw1Db4FWY5kV70y2aMBQHaHa&pid=Api&P=0&h=220" alt="" width="40" height="35" style={{marginRight:'50px'}}/>
                <ul className="navbar-nav">
                <li><h3 style={{textAlign:'center', color:'white', marginRight:'790px'}}>FlyWithUs</h3></li>
                    <li className="nav-item">
                        <Link className="nav-link active" to='/'>Home</Link>
                    </li>
                   
                <li className="nav-item"><Link className="nav-link active" to='/aboutus'>About</Link></li>
                <li className="nav-item"><Link className="nav-link active" to='/contactus' >Contact </Link></li>
                <li className="nav-item"><Link className="nav-link active" to='/login' >Login</Link></li>
                <li className="nav-item"><Link className="nav-link active" to='/signup' >SignUp</Link></li>
                </ul>
            </nav>
            <Outlet />

        </div>
    )
}
export default FlightNavBar;