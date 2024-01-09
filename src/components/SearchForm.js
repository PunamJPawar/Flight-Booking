import { useState } from "react"
import './form.css';
import products from "../data/productData"


const SearchForm = () => {

    const [flight, setFlight] = useState({

        fromCity: 'Pune',
        toCity: 'Mumbai',
        fromDate: '',
        toDate: '',
        travellers: 0,
        classType: ''
    })
    // const city = ["Pune", "Mumbai", "Delhi", "Kolkata"]
    var date = new Date();
    var currentDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
    

    const handleFromChange = (event) => {
        setFlight({ ...flight, fromCity: event.target.value })
    }
    const handleToChange = (event) => {
        setFlight({ ...flight, toCity: event.target.value })
        // if(flight.fromCity.valueOf==flight.toCity.valueOf)
        // {
        //     alert("please select proper travel destination")
        //     // flight.toCity.valueOf=''

        // }
    }
    const handleFromDateChange = (event) => {
        setFlight({ ...flight, fromDate: event.target.value });
        if (currentDate = flight.fromDate) {
            alert("Please select valid date!!!, Start date should be today or future date..")
            flight.fromDate = currentDate;
            //setFlight(flight.fromDate=' ')
        }

    }
    const handleToDateChange = (event) => {
        setFlight({ ...flight, toDate: event.target.value })
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Search Form is submitted")
    }


    return (
        <>
            <div className="container shadow p-3 mb-5 bg-body-tertiary rounded search-form">

                <h2 className="text-center mb-3 pb-3">Search Flights</h2>
                <form action="#" onSubmit={handleSubmit}>
                    <div>
                        <div className="mb-3 form-controls-group" style={{backgroundColor:'skyblue'}}>
                            <div>
                                <label for="oneway">One way</label>
                                <input className=""  type="radio" id="oneway" name="journeyType" value="oneway"/>
                                <label for="twoway">Return Journey</label>
                                <input type="radio" id="twoway" name="journeyType" value="twoway"/>
                            </div>
                        </div>
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
                        <label className="label-search-form">Travellers</label>
                        <input type="number" className="form-control" disabled/>
                    </div>
                    <div className="mb-3 form-controls-group">
                        <label className="label-search-form">Class</label>
                        <input type="number" className="form-control" disabled/>
                    </div>
                    <button className="btn btn-dark" type="submit">Search</button>
                </form>
            </div>
            <div>
                <h2>Selected Flight Details</h2>
                <table className="table table-striped"  >
                    <thead>
                        <tr>
                            <th>From City </th>
                            <th>To City </th>
                            <th>From Date </th>
                            <th>Return Date </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{flight.fromCity}</td>
                            <td>{flight.toCity}</td>
                            <td>{flight.fromDate}</td>
                            <td>{flight.toDate}</td>
                        </tr>
                    </tbody>
                </table>
                
            </div>
        </>
    )
}
export default SearchForm
