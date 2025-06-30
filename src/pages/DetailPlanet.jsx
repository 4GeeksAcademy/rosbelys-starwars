import { useEffect, useState } from "react"
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from 'react-router-dom'
import { planetEspecific } from "../services/fetchs.js"


export default function DetailPlanet() {
  const { store, dispatch } = useGlobalReducer()
  const { id } = useParams();
  const { detallePlaneta } = store
  const [hayPlanetas, setHayPlanetas] = useState(false);


  const planetaActive = async () => {
    if (detallePlaneta !== null) {
      setHayPlanetas(true)
    } else {
      setHayPlanetas(false)
    }
  }
  console.log(id)

  useEffect(() => {
    planetEspecific(dispatch, id);
  }, [dispatch, id]);

  useEffect(() => {
    if (detallePlaneta) {
      planetaActive()
    }
  }, [detallePlaneta]);

  console.log(detallePlaneta)
  return (
    //aqui se que debo poner un ternario
    <div>
      {detallePlaneta ? (
        <div>
          <h1>Detalles de:{detallePlaneta.name}</h1><br />
          <p>El Clima del Planeta : <span className="info">{detallePlaneta.climate}</span></p>
          <p>La Poblacion es de: <span className="info">{detallePlaneta.population}</span></p>
          <p>Los Terrenos: <span className="info">{detallePlaneta.terrain}</span></p>
        </div>


      ) : (
        <p>Cargando detalle de Planeta...</p>
      )

      }

    </div>
  )
}
