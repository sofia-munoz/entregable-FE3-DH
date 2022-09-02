import {useState} from 'react'

export default function Item(props) {
  const [ stock, setStock ] = useState(props.prod.stock)
  function disminuirStock() {
    if(stock>0){
      setStock(stock-1)
      props.aumentarCantidad()
    }
  }
    
  return (
    <div className='producto'>
      <h3>{props.prod.producto.nombre}</h3>
      <p>{props.prod.producto.descripcion}</p>
      <h5>En stock: {stock==0 ? <span>Agotado</span> : stock}</h5>
      <button onClick={() => {disminuirStock()}} disabled={stock<1}> {stock>0?"comprar":"sin stock"} </button>
    </div>
  )
}
