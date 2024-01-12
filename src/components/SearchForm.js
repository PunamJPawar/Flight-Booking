import { useState,createContext} from "react"
import './form.css';
import products from "../data/productData"
// new code
import RadioButton from "./RadioButton";
import Travellers from "./Travellers";
import Popup from "./popup/Popup";
import FlightResult from "./FlightResult";
// CityContext is context object created globally so that it can be accesses by FlightResult child compo.
export const CityContext = createContext()



const SearchForm = () => {

    const [flight, setFlight] = useState({

        fromCity: 'Pune',
        toCity: 'Vizag',
        fromDate: '',
        toDate: '',
        travellers: 0,
        classType: ''
    })
    
    var date = new Date();
    var currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    
    // to show flight results after click on search button ie. after form submission
    const [isSearchSubmitted, setIsSearchSubmitted] = useState(false)

    const handleFromChange = (event) => {
        setFlight({ ...flight, fromCity: event.target.value })
        const value=event.target.value
        checkIfValuesAreEqual(value, flight.toCity);
    }
    const handleToChange = (event) => {
        setFlight({ ...flight, toCity: event.target.value })
        
        const value=event.target.value
        checkIfValuesAreEqual(flight.fromCity, value);
    }
    const checkIfValuesAreEqual = (value1, value2) => {
        if (value1 === value2) {
          console.log('Both select boxes have the same value.');
          alert("From City And To City must be different!")
        } else {
          console.log('Select boxes have different values.');
        }
      };
    const handleFromDateChange = (event) => {
        setFlight({ ...flight, fromDate: event.target.value });
        if (currentDate >= flight.fromDate) {
            // alert("Please select valid date!!!, Start date should be today or future date..")
            flight.fromDate = currentDate;
            //setFlight(flight.fromDate=' ')
        }

    }
    const handleToDateChange = (event) => {
        setFlight({ ...flight, toDate: event.target.value })
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSearchSubmitted(true);
        // alert("Search Form is submitted")
    }
    
// new code
const [buttonPopup,setButtonPopup]=useState(false);
    

    return (
        <>
        
        {!isSearchSubmitted && <div className="container shadow p-3 mb-5 bg-body-tertiary rounded search-form">

                <h2 className="text-center mb-3 pb-3">Search Flights</h2>
                <form action="#" onSubmit={handleSubmit}>
                    <div>
                        {/* <div className="mb-3 form-blue-container">
                            <div>
                                <input type="radio" id="oneway" name="journeyType" value="oneway" className="input-radio"/>
                                <label for="oneway" className="radio-label">One Way Journey</label>
                                <input type="radio" id="twoway" name="journeyType" value="twoway"className="input-radio" />
                                <label for="twoway" className="radio-label">Return Journey</label>
                                
                            </div>
                        </div> */}
                        <div className="mb-3 form-controls-group">
                            <label className="label-search-form">From City:
                            </label>

                            <select className="form-control" value={flight.fromCity}
                                onChange={handleFromChange} required name="" id="">
                                <optgroup label="Select City">
                                    
                                    {/* <option>{products.map(p => <div key={p.id} product={p} />)}</option> */}
                                {products.map((cty, index) => (
                                        <option key={index}>{cty.name}</option>
                                    ))}
                                    

                                </optgroup>
                            </select>
                        </div>
                        <div className="mb-3 form-controls-group">
                            <label className="label-search-form">To City:
                            </label>

                            <select className="form-control" value={flight.toCity}
                                onChange={handleToChange} required name="" id="">
                                

                                {products.map((cty, index) => (
                                        <option key={index}>{cty.name}</option>
                                    ))}
                            </select>

                        </div>
                    </div>
                    <div className="mb-3 form-controls-group">
                        <label className="label-search-form">From Date:</label>
                        <input type="date" className="form-control" value={flight.fromDate}
                            onChange={handleFromDateChange} required min={currentDate} />
                        {/*  min={today} min={"2023-12-30"}  */}

                    </div>
                    <div className="mb-3 form-controls-group">
                        <label className="label-search-form">Return Date:</label>
                        <input type="date" className="form-control" value={flight.toDate}
                            onChange={handleToDateChange} required min={flight.fromDate} />

                    </div>
                    <div className="mb-3 form-controls-group">
                        {/* new code */}
                        <div>
                            <main>
                                <button className="btn-2" onClick={()=>setButtonPopup(true)}>Traveller | Class</button>
                            </main>
                                
                            <Popup trigger={buttonPopup} setTrigger={setButtonPopup}>
                                                               
                                <RadioButton></RadioButton>
                                <Travellers/>                               
                            </Popup>
                        </div>
                        {/* end of new code */}
                    </div>
                    <button className="btn btn-dark button-blue" type="submit">Search</button>
                    
                    
                </form>
            </div>}
            {isSearchSubmitted && 
            <div>
                <h2 style={{textAlign:"center"}}>List Of Flights Starting From Location : {flight.fromCity} 
                <button className ="btn btn-success" style={{marginLeft:"10px"}} onClick={()=>{
                setIsSearchSubmitted(false); 
                }
                }
                > Back To Search </button></h2>
                <div>
                    {flight.fromCity &&
                    <CityContext.Provider value={flight.fromCity}>
                        <FlightResult/>
                    </CityContext.Provider>
                    }
                </div>
            </div>}
            
        </>
    )
}
export default SearchForm
