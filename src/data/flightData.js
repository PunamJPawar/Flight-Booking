import IndiGo from "./images/IndiGo.jpg"
import AirIndia from "./images/AirIndia.jpg"
import Emirates from "./images/Emirates.jpg"
import SpiceJet from "./images/SpiceJet.jpg"
const flightData=[
    // mumbai
    {id:101,name:"Indigo",departuretime:"10:00 AM",origin:'Mumbai',destination:'Pune',arrivaltime:'02:00 PM',duration:'4 Hr',price:6000.00,image:IndiGo,refundable:"Partially Refundable",tax:0.35, city_code:1},
    {id:102,name:"SpiceJet",departuretime:"02:00 PM",origin:'Mumbai',destination:'Delhi',arrivaltime:'10:00 PM',duration:'8 Hr',price:4000.00,image:SpiceJet,tax:0.35, city_code:1},
    {id:103,name:"Air India",departuretime:"09:00 AM",origin:'Mumbai',destination:'Lucknow',arrivaltime:'11:00 PM',duration:'9 Hr',price:4600.00,image:AirIndia,tax:0.35, city_code:1},
    {id:104,name:"Emirates",departuretime:"11:00 AM",origin:'Mumbai',destination:'Aurangabad',arrivaltime:'01:00 PM',duration:'2 Hr',price:7500.00,image:Emirates,tax:0.35, city_code:1},
    // pune
    {id:201,name:"Indigo",departuretime:"10:00 AM",origin:'Pune',destination:'Delhi',arrivaltime:'02:00 PM',duration:'4 Hr',price:6500.00,image:IndiGo,refundable:"Partially Refundable",tax:0.35, city_code:2},
    {id:202,name:"SpiceJet",departuretime:"02:00 PM",origin:'Pune',destination:'Mumbai',arrivaltime:'10:00 PM',duration:'8 Hr',price:4000.00,image:SpiceJet,tax:0.35, city_code:2},
    {id:203,name:"Air India",departuretime:"09:00 AM",origin:'Pune',destination:'Lucknow',arrivaltime:'11:00 PM',duration:'9 Hr',price:4600.00,image:AirIndia,tax:0.35, city_code:2},
    {id:204,name:"Emirates",departuretime:"11:00 AM",origin:'Pune',destination:'Aurangabad',arrivaltime:'01:00 PM',duration:'2 Hr',price:7500.00,image:Emirates,tax:0.35, city_code:2},
    // Delhi
    {id:301,name:"Indigo",departuretime:"10:00 AM",origin:'Delhi',destination:'Pune',arrivaltime:'02:00 PM',duration:'4 Hr',price:6500.00,image:IndiGo,refundable:"Partially Refundable",tax:0.35, city_code:3},
    {id:302,name:"SpiceJet",departuretime:"02:00 PM",origin:'Delhi',destination:'Mumbai',arrivaltime:'10:00 PM',duration:'8 Hr',price:4000.00,image:SpiceJet,tax:0.35, city_code:3},
    {id:303,name:"Air India",departuretime:"09:00 AM",origin:'Delhi',destination:'Lucknow',arrivaltime:'11:00 PM',duration:'9 Hr',price:4600.00,image:AirIndia,tax:0.35, city_code:3},
    {id:304,name:"Emirates",departuretime:"11:00 AM",origin:'Delhi',destination:'Aurangabad',arrivaltime:'01:00 PM',duration:'2 Hr',price:7500.00,image:Emirates,tax:0.35, city_code:3},
    // Kolkata
    {id:401,name:"Indigo",departuretime:"10:00 AM",origin:'Kolkata',destination:'Delhi',arrivaltime:'02:00 PM',duration:'4 Hr',price:6500.00,image:IndiGo,refundable:"Partially Refundable",tax:0.35, city_code:4},
    {id:402,name:"SpiceJet",departuretime:"02:00 PM",origin:'Kolkata',destination:'Mumbai',arrivaltime:'10:00 PM',duration:'8 Hr',price:4000.00,image:SpiceJet,tax:0.35, city_code:4},
    {id:403,name:"Air India",departuretime:"09:00 AM",origin:'Kolkata',destination:'Lucknow',arrivaltime:'11:00 PM',duration:'9 Hr',price:4600.00,image:AirIndia,tax:0.35, city_code:4},
    {id:404,name:"Emirates",departuretime:"11:00 AM",origin:'Kolkata',destination:'Aurangabad',arrivaltime:'01:00 PM',duration:'2 Hr',price:7500.00,image:Emirates,tax:0.35, city_code:4},
    // Banglore
    {id:501,name:"Indigo",departuretime:"10:00 AM",origin:'Banglore',destination:'Delhi',arrivaltime:'02:00 PM',duration:'4 Hr',price:6500.00,image:IndiGo,refundable:"Partially Refundable",tax:0.35, city_code:5},
    {id:502,name:"SpiceJet",departuretime:"02:00 PM",origin:'Banglore',destination:'Mumbai',arrivaltime:'10:00 PM',duration:'8 Hr',price:4000.00,image:SpiceJet,tax:0.35, city_code:5},
    {id:503,name:"Air India",departuretime:"09:00 AM",origin:'Banglore',destination:'Lucknow',arrivaltime:'11:00 PM',duration:'9 Hr',price:4600.00,image:AirIndia,tax:0.35, city_code:5},
    {id:504,name:"Emirates",departuretime:"11:00 AM",origin:'Banglore',destination:'Aurangabad',arrivaltime:'01:00 PM',duration:'2 Hr',price:7500.00,image:Emirates,tax:0.35, city_code:5 },
    // Kochi
    {id:601,name:"Indigo",departuretime:"10:00 AM",origin:'Kochi',destination:'Delhi',arrivaltime:'02:00 PM',duration:'4 Hr',price:6500.00,image:IndiGo,refundable:"Partially Refundable",tax:0.35, city_code:6},
    {id:602,name:"SpiceJet",departuretime:"02:00 PM",origin:'Kochi',destination:'Mumbai',arrivaltime:'10:00 PM',duration:'8 Hr',price:4000.00,image:SpiceJet,tax:0.35, city_code:6},
    {id:603,name:"Air India",departuretime:"09:00 AM",origin:'Kochi',destination:'Lucknow',arrivaltime:'11:00 PM',duration:'9 Hr',price:4600.00,image:AirIndia,tax:0.35, city_code:6},
    {id:604,name:"Emirates",departuretime:"11:00 AM",origin:'Kochi',destination:'Aurangabad',arrivaltime:'01:00 PM',duration:'2 Hr',price:7500.00,image:Emirates,tax:0.35, city_code:6},
    // Vizag
    {id:701,name:"Indigo",departuretime:"10:00 AM",origin:'Banglore',destination:'Delhi',arrivaltime:'02:00 PM',duration:'4 Hr',price:6500.00,image:IndiGo,refundable:"Partially Refundable",tax:0.35, city_code:7},
    {id:702,name:"SpiceJet",departuretime:"02:00 PM",origin:'Banglore',destination:'Mumbai',arrivaltime:'10:00 PM',duration:'8 Hr',price:4000.00,image:SpiceJet,tax:0.35, city_code:7},
    {id:703,name:"Air India",departuretime:"09:00 AM",origin:'Banglore',destination:'Lucknow',arrivaltime:'11:00 PM',duration:'9 Hr',price:4600.00,image:AirIndia,tax:0.35, city_code:7},
    {id:704,name:"Emirates",departuretime:"11:00 AM",origin:'Banglore',destination:'Aurangabad',arrivaltime:'01:00 PM',duration:'2 Hr',price:7500.00,image:Emirates,tax:0.35, city_code:7},


]

export default flightData