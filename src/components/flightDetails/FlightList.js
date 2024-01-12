// import {Link} from "react-router-dom"
import Card from "./Card"
import flightData from "../../data/flightData"
import { useState } from "react"
import {Outlet} from "react-router-dom"

const FlightList=()=>{
    
    const [search,setSearch]=useState('')

    const List=flightData.filter((item)=> search.toLowerCase()===''?item:item.origin.toLowerCase().includes(search)||item.destination.toLowerCase().includes(search)).map((plan)=><Card key={plan.id} Data={plan}/>)
    return (<>
        <div>
            <input onChange={(e)=>setSearch(e.target.value)} placeholder="Origin Search"/>
            <input onChange={(e)=>setSearch(e.target.value)} placeholder="Destination Search"/>
        </div>
        <div>
            {List}
        </div>
        <Outlet/>
        </>
    )
}
export default FlightList