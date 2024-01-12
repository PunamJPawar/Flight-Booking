import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FlightNavBar from './FlightNavBar'
import SearchForm from '../components/SearchForm'
// import Home from '../components/home/Home'
import AboutUs from '../components/about/AboutUs'
import ContactUs from '../components/contactUs/ContactUs'
import Login from '../components/login/Login'
import SignUp from '../components/signup/SignUp'

// import Home from '../components/Home'
import PageNotFound from '../components/PageNotFound'
// import Appp from '../components/Appp'


const FlightRouter = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FlightNavBar/>} >
                    {/* <Route index element={<Home/>} /> */}
                    <Route index element={<SearchForm/>} />                    
                    
                    <Route path='/aboutus' element={<AboutUs />} />
                    <Route path='/contactus' element={<ContactUs/>}/>
                    <Route path='/login' element={<Login/>}/>
                    <Route path='/signup' element={<SignUp/>}/>
                    <Route path='*' element={<PageNotFound/>}/>
                </Route>
            </Routes>
    
        </BrowserRouter>
    )
}
export default FlightRouter