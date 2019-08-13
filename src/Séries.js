import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Séries = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get('/api/series')
      .then(res => {
        setData(res.data.data)
      })
  }, [])

  const deleteSérie = id => {
    axios
      .delete(`/api/series/${id}`)
      .then(res => {
        const filtrado = data.filter(item => item.id !== id)
        setData(filtrado)
      })
  }

  const renderizaLinha = record => {
    return (
      <tr key={record.id}>
        <th scope='row'>{record.id}</th>
        <td>{record.name}</td>
        <td>
          <button className='btn btn-danger' onClick={() => deleteSérie(record.id)}>Remover</button>
          <Link to={`/séries/${record.id}`} className='btn btn-warning'>Info</Link>
        </td>
      </tr>
    )
  }

  if (data.length === 0) {
    return (
      <div className="container">
        <h1>Séries</h1>
        <div className="mb-2">
          <Link to="/séries/novo" className="btn btn-primary">Nova série</Link>
        </div>
        <div className="alert alert-warning" role="alert">
          Você não possui Séries criadas.
        </div>
      </div>
    );
  }

  return (
    <div className='container'>
      <h1>Séries</h1>
      <div className='mb-2'>
        <Link to='/séries/novo' className='btn btn-primary'>Nova série</Link>
      </div>
      <table className='table table-dark'>
        <thead>
          <tr>
            <th scope='col'>ID</th>
            <th scope='col'>Nome</th>
            <th scope='col'>Ações</th>
          </tr>
        </thead>
        <tbody>
          {data.map(renderizaLinha)}
        </tbody>
      </table>
    </div>
  )
}
export default Séries