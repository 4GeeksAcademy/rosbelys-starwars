import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { vehiculoEspecifico } from "../services/fetchs.js"


function DetailVehiculos() {
  const { store, dispatch } = useGlobalReducer()
  const { id } = useParams();
  const { detalleVehiculo } = store
  const [hayVehiculos, setHayVehiculos] = useState(false)

  const vehiculoActive = async () => {
    if (vehiculoEspecifico !== null) {
      setHayVehiculos(true)
    } else {
      setHayVehiculos(false)
    }
  }

  useEffect(() => {
    vehiculoEspecifico(dispatch, id)
  }, [dispatch, id]);

  useEffect(() => {
    if (detalleVehiculo) {
      vehiculoActive()
    }
  }, [detalleVehiculo]);
  console.log(detalleVehiculo);

  return (

    <div className='card-title nombre'>
      {
        (detalleVehiculo !== null) ? (

          <div>
            <h2 className='info'>Nombre:{detalleVehiculo.name}</h2>

            <p className='descripcion'>El Modelo es: <span className='info'>{detalleVehiculo.model}</span></p>
            <p className='descripcion'>La Longitud es: <span className='info'>{detalleVehiculo.length}</span></p>
          </div>
        ) : (<p>No hay datos</p>)
      }
    </div>



  )
}

export default DetailVehiculos