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
          <h1 className="mb-4">lista de Vehiculos</h1>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {vehiculos.map((vehiculo, index) => (
              <div className="col" key={index + 1}>
                <div className="card h-100 shadow-sm">
                  <div className="card-body">
                    <h5 className="card-title">{vehiculo.name}</h5>
                   
                    <button className="btn btn-success mt-2"
                    onClick={() => handleNavigate(index + 1)}>
                      DetalleVehiculo
                    </button>
                    <button className='btn btn-success mt-3'>
                      ❤️
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
