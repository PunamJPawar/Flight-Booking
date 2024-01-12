import { useState } from "react"
import './Traveller.css'

const Travellers = () => {
    const [count, setCount] = useState({
        adult: "1",
        child: "0",
        infant: "0"

    })

    const [isSubmited, setIssubmited] = useState(false)

    const handleAdultChange = (event) => {
        setCount({ ...count, adult: event.target.value })
    }

    const handleChildChange = (event) => {
        setCount({ ...count, child: event.target.value })
    }

    const handleInfantChange = (event) => {
        setCount({ ...count, infant: event.target.value })
    }
    const handleDone=()=>{
        setIssubmited(true)
    }
    const handleSubmit = (e) => {
        e.preventDefault();

        const totalTravellers = parseInt(count.adult) + parseInt(count.child) + parseInt(count.infant);

        if (totalTravellers > 9) {
            alert("Error: You can only book for upto 9 travellers at onse.");

        } else {
            setIssubmited(true);
        }
    }


    return (
        <>

            {!isSubmited && <div className=" div-1  " >

                <h2 className="text-center">Travellers</h2>
                <form action="#" onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="label-1">Adult(12+years):
                            <input className="in" value={count.adult} type="number" onChange={handleAdultChange} required min="1" max="9" />
                        </label>
                    </div>

                    <div className="mb-3">
                        <label className="label-1">Child(2-12 years old):
                            <input className="in" value={count.child} type="number" onChange={handleChildChange} required min="0" max="9" />
                        </label>
                    </div>

                    <div className="mb-3">
                        <label className="label-1">Infant(under 2 years):
                            <input className="in" value={count.infant} type="number" onChange={handleInfantChange} required min="0" max="9" />
                        </label>
                    </div>


                    <button className="btn btn-outline-dark" type="submit" onClick={handleDone}>Done</button>
                    <button className="btn btn-outline-dark ms-4" type="reset" onClick={() => setCount({ adult: "1", child: "0", infant: "0" })}>Reset</button>

                </form>
            </div>
            }

            {isSubmited && <div className="border border-2 border-success rounded-3 p-4 mb-2 m-3">
                <h3>Your details</h3>
                <h5>No.of Adults:{count.adult}</h5>
                <h5>No.of Child: {count.child}</h5>
                <h5>No.of Infants:{count.infant}</h5>



                <button className="btn btn-success" onClick={() => {
                    setIssubmited(false); setCount({ adult: "1", child: '0', infant: '0' })
                }}>Back to Form</button>

            </div>
            }



        </>
    )

}
export default Travellers