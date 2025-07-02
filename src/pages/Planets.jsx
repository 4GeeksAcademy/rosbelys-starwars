import React, { useEffect, useState } from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";
import { GetAllPlanetas } from "../services/fetchs.js"
import { useNavigate } from 'react-router-dom';

export default function Planets() {
  const { store, dispatch } = useGlobalReducer()
  const { planetas } = store
  const navigate = useNavigate();

  useEffect(() => {
    GetAllPlanetas(dispatch)
  }, [dispatch]);

  const handleDetail = (id) => {
    navigate(`/detailPlanet/${id}`)
  }




  return (
    <div className='container py-5'>
      <h2 className='mb-4'>Planetas</h2>
      <div className='row row-cols-1 row-cols-md-3 g-4'>
        {planetas.map((planeta, index) => (
          <div className='col' key={index + 1}>

            <div className='card-body per'>
              <h5 className='card-title nombre'> {planeta.name}</h5>
              <p className='card-text mb-1'>
              </p>
              <div className='botones'>
                <button className="btn det m-2"
                  onClick={() => handleDetail(index + 1)}
                >Ver Detalle</button>
                <button className='btn like m-2'>
                  ⭐
                </button>
              </div>

            </div>
          </div>
        ))}
      </div>
    </div>

  )
}
