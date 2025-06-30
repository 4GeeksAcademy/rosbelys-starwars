import React from 'react'
import useGlobalReducer from "../hooks/useGlobalReducer.jsx"


function Favoritos() {
  const { store, dispatch } = useGlobalReducer()
  const { favoritos } = store

  const handleDelete = (name) => {
    dispatch({
      type:"DELETE_FAVORITO",
      payload:name
    })
  }

  console.log(favoritos)

  return (
    <div>
      <h1>Favoritos</h1>
      {
        favoritos.length > 0 ? (

          <ul>
            {favoritos.map((f, index) => (
              <li id='fav' key={index}>
                <p className='ss'>
                  {f}
                </p>
                <button
                  onClick={() => handleDelete(f)}>
                  ❌
                </button>
              </li>
            ))}
          </ul>

        ) : (<p>No Hay favoritos</p>)
      }
    </div>
  )
}

export default Favoritos
