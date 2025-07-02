import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { useEffect } from "react";
import { GetAllVehiculos } from "../services/fetchs.js";
import { useNavigate } from "react-router-dom";
import React from 'react'



function Vehiculos() {
  const { store, dispatch } = useGlobalReducer();
  const { vehiculos } = store;
  const navigate = useNavigate();


  useEffect(() => {
    GetAllVehiculos(dispatch)
  }, [dispatch]);

  const handleNavigate = (id) => {
    navigate(`/detailVehiculo/${id}`);
  };



  return (
    <div className="container py-5">
      {vehiculos && vehiculos.length > 0 ? (
        <>
          <h2 className="mb-4">Vehiculos</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {vehiculos.map((vehiculo, index) => (
              <div className="col" key={index + 1}>
                <div className="card-body per">
                  <h5 className="card-title nombre">{vehiculo.name}</h5>
                  <div className="botones">
                    <button className="btn det m-2"
                      onClick={() => handleNavigate(index)}>
                      Ver Detalle
                    </button>
                    <button className='btn like m-2'>
                      ⭐
                    </button>
                  </div>


                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h1>No hay Personajes</h1>
        </div>
      )}
    </div>
  );
}

export default Vehiculos
