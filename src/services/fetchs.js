const apiUrlBase = "https://swapi.py4e.com/api/"

export const GetAllPersonajes = async (dispatch) => {
    try {
        const response = await fetch(`${apiUrlBase}people/`)
        if (!response.ok) {
            throw new Error("Error al obtener los personajes");
        }
        const data = await response.json();
        console.log(data)
        dispatch(
            {
                type: "GUARDAR_PERSONAJES",
                payload: data.results
            }
        )
        return data
    } catch (error) {
        alert("Error:", error)
    }
}

export const GetAllPlanetas = async (dispatch) => {
    try {
        const response = await fetch(`${apiUrlBase}planets/`)
        if (!response.ok) {
            throw new Error("Error al obtener los planetas");
        }
        const data = await response.json()
        console.log(data)
        dispatch({
            type: "GUARDAR_PLANETAS",
            payload: data.results
        }
        )
        return data.results
    } catch (error) {
        console.error("Error:", error)
    }
}

export const GetAllVehiculos = async (dispatch)=> {
    try {
        const response = await fetch(`${apiUrlBase}vehicles`)
        if(!response.ok){
            throw new Error("Error al obtener los Vehiculos");
            }
            const data = await response.json();
            console.log(data.results)
            dispatch({
                type:"GUARDAR_VEHICULOS",
                payload: data.results
            })
            return data.results
    } catch (error) {
        console.error("Error:",error)
    }
}






export const detalleDePersonaje = async (dispatch, id) => {
    try {
        const response = await fetch(`${apiUrlBase}people/${id}`)
        if (!response.ok) {
            throw new Error("Error al cargar los detalles del personaje");
        }
        const data = await response.json()
        console.log(data)
        dispatch({
            type: "GUARDAR_PERSONA",
            payload: data
        })
        return data
    } catch (error) {
        console.error("Error:", error)
    }
}

export const planetEspecific = async (dispatch,id) => {
    try {
        const response = await fetch(`${apiUrlBase}planets/${id}`)
        if (!response.ok) {
            throw new Error("Error al Cargar los Detalles del PLaneta");
        }
        const data = await response.json()
        dispatch({
            type: "GUARDAR_PLANETA",
            payload: data
        })
        return data

    } catch (error) {
        console.error("Error:", error)
    }
}

export const vehiculoEspecifico = async (dispatch,id) =>{
    try {
        const response = await fetch(`${apiUrlBase}detailvehiculo/${id}`)
        if(!response.ok){
            throw new Error("Error al obtener el vehiculo");
            }
            const data = await response.json()
            dispatch({
                type:"GUARDAR_VEHICULO_ESPECIFICO",
                payload:data
            })
            return data
    } catch (error) {
        console.error("Error:",error)
    }
}






export const addFavorito = (item, dispatch) => {
    dispatch({
        type: "ADD_FAVORITO",
        payload: {
            id: item.id,
            name: item.name
        }
    })
}


export const deleteFavorito = (item, dispatch) => {
    dispatch({
        type: "DELETE_FAVORITO",
        payload: {
            id: item.id,
            name: item.name
        }
    })
}

