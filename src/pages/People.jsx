import React, { useEffect } from 'react';
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { addFavorito, GetAllPersonajes } from "../services/fetchs.js";
import { useNavigate } from 'react-router-dom';

function People() {
  const { store, dispatch } = useGlobalReducer();
  const { personajes } = store;
  const navigate = useNavigate();

  useEffect(() => {
    GetAllPersonajes(dispatch);
  }, [dispatch]);
  const handleNavigate = (id) => {
    navigate(`/detailPeople/${id}`);
  };
  return (
    <div className="container py-5">
      {personajes && personajes.length > 0 ? (
        <>
          <h2 className="mb-4">Personajes</h2>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {personajes.map((personaje, index) => (
              <div className="col" key={index + 1}>
                <div className="">
                  <div className="card-body per">
                    <h5 className="card-title nombre"><brNombre/>
                      {personaje.name}</h5>
        
                    <div className='botones'>
                      <button
                        className="btn det m-2"
                        onClick={() => handleNavigate(index + 1)}
                      >
                        Ver Detalle
                      </button>
                      <button
                        className='btn like m-2'
                        onClick={() => dispatch({ type: "ADD_FAVORITO", payload: personaje.name })}>
                        ⭐
                      </button>
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      ) : (
        <div className="text-center">
          <h1>No hay personajes</h1>
        </div>
      )}
    </div>
  );
}
export default People;