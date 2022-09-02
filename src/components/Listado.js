import React from 'react'
import productos from "./data.json"
import Item from './Item'

export default function Listado(props) {
  return (
    <div className='container'>
      {productos.map((p,index) => <Item prod={p} aumentarCantidad={props.aumentarCantidad}></Item>)}
    </div>
  )
}
