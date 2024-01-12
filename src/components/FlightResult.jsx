
import { useContext } from "react"
import { CityContext } from "./SearchForm"
import products from "../data/productData"
import flightData from "../data/flightData"
import Card from "./flightDetails/Card"

const FlightResult=()=>{
    // this component is using context of parent component SearchForm.js
    const fromCity = useContext(CityContext)
    const cityObj=products.find(coun=>coun.name==fromCity)
    const flList=flightData.filter(f=> f.city_code==cityObj.id).map((plan)=><Card key={plan.id} Data={plan}/>)
return(
    <div>
        {flList}
    </div>
)
}
export default FlightResult