export const initialStore = () => {
  return {
    message: null,
    personajes: [],
    planetas: [],
    vehiculos: [],
    detallePersonaje: null,
    detallePlaneta: null,
    detalleVehiculo: null,
    favoritos: []
  }
}

export default function storeReducer(store, action = {}) {
  switch (action.type) {
    case "GUARDAR_PERSONAJES":
      return {
        ...store,
        personajes: action.payload
      }
    case "GUARDAR_PLANETAS":
      return {
        ...store,
        planetas: action.payload
      }
    case "GUARDAR_PERSONA":
      return {
        ...store,
        detallePersonaje: action.payload
      }
    case "GUARDAR_PLANETA":
      return {
        ...store,
        detallePlaneta: action.payload
      }
    case "GUARDAR_VEHICULOS":
      return {
        ...store,
        vehiculos: action.payload
      }
      case "GUARDAR_VEHICULO_ESPECIFICO":
        return{
          ...store,
          detalleVehiculo: action.payload
        }
    case "ADD_FAVORITO":
      return {
        ...store,
        favoritos: [...store.favoritos, action.payload]
      }
    case "DELETE_FAVORITO":
      return {
        ...store,
        favoritos: store.favoritos.filter(item => item !== action.payload)
      }

    default:
      throw Error('Unknown action.');
  }
}
