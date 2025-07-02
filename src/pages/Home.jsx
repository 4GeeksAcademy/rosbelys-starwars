import useGlobalReducer from "../hooks/useGlobalReducer.jsx"
import People from "./People.jsx"
import Planets from "./Planets.jsx"
import Vehiculos from "./Vehiculos.jsx";


export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

   

	return (
		<div className="text-center mt-5">
			<h1>STARWRS</h1>
			<People/>
			<Planets/>
			<Vehiculos/>
		</div>
	);
}; 