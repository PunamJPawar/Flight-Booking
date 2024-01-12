
import './App.css';
// import FlightList from './components/flightDetails/FlightList';
// import SearchForm from './components/SearchForm';
import FlightRouter from './router/FlightRouter';

function App() {
  return (
    <div className="App">
    {/* <SearchForm /> */}
        <FlightRouter/>
    {/* <FlightList /> */}
    
    </div>
  );
}

export default App;
