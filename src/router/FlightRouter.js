import {BrowserRouter, Routes, Route} from 'react-router-dom'
import FlightNavBar from './FlightNavBar'
import SearchForm from '../components/SearchForm'
import Home from '../components/Home'
import PageNotFound from '../components/PageNotFound'


const FlightRouter = ()=>{
    return(
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<FlightNavBar/>} >
                    {/* <Route index element={<Home/>} /> */}
                    <Route index element={<SearchForm/>} />
                    <Route path='/search' element={<SearchForm/>} />
                    <Route path='*' element={<PageNotFound/>}/>
                </Route>
            </Routes>
    
        </BrowserRouter>
    )
}
export default FlightRouter