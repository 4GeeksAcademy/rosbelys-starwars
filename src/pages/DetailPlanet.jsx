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
    <div className="card-title nombre" >
      {detallePlaneta ? (
        <div>
          <h2 className="info">Detalles de:{detallePlaneta.name}</h2><br />
          <p className="descripcion">El Clima del Planeta : <span className="info">{detallePlaneta.climate}</span></p>
          <p className="descripcion">La Poblacion es de: <span className="info">{detallePlaneta.population}</span></p>
          <p className="descripcion">Los Terrenos: <span className="info">{detallePlaneta.terrain}</span></p>
        </div>


      ) : (
        <p>Cargando detalle de Planeta...</p>
      )

      }

    </div>
  )
}
