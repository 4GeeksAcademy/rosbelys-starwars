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

  return (
    // aqui me hace falta el ternario
    <div className='container card-vehiculo-detail'>
      <div>
        <h2>Nombre:{vehiculoEspecifico.name}</h2>
        <br />
        <p>El Modelo es: <span className='info'>{vehiculoEspecifico.model} </span></p>
        <p>La Longitud es: <span className='info'>{vehiculoEspecifico.length}</span></p>
      </div>


    </div>
  )
}

export default DetailVehiculos