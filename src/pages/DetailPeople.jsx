import  { useEffect, useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useParams } from 'react-router-dom'
import { detalleDePersonaje } from "../services/fetchs.js"


function DetailPeople() {
    const { store, dispatch } = useGlobalReducer()
    const { id } = useParams();
    const { detallePersonaje } = store
    const [hayDatos, setHayDatos] = useState(false);


    const handleActive = async () => {
        if (detalleDePersonaje !== null) {
            setHayDatos(true)
        } else {
            setHayDatos(false)
        }
    }


    console.log(hayDatos)

    useEffect(() => {
        detalleDePersonaje(dispatch, id);


    }, [dispatch, id]);


    useEffect(() => {
        if (detallePersonaje) {
            handleActive()
        }
    }, [detallePersonaje]);

    
    return (
        <div className="container card-people-detail">


            {
                (hayDatos === true) ? (
                    <div>
                        <h2>Detalles de: {detallePersonaje.name}</h2>
                        <br />

                        <p>La altura de este personaje: <span className='info'>{detallePersonaje.height}</span></p>
                        <p>El peso de este personaje:  <span className='info'>{detallePersonaje.mass}</span></p>
                        <p>El genero de este personaje:  <span className='info'>{detallePersonaje.gender}</span></p>
                    </div>

                ) : (<p>No hay datos</p>)
            }


        </div>

    )
}

export default DetailPeople