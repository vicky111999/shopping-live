import React from 'react'
// import data from './data.js'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {useCart} from 'react-use-cart'

function Itemcard (it) {
  const {addItem} = useCart()
  return (
    <>
    <div className='col-2 ms-3'>
    <div className='card p-0 overflow-hidden h-100 mx-0 mb-4 shadow'>
    <img src={it.img} className='card-img-top img-fluid h-50' alt='not found'></img>
    <div className='card-body'>
        <h5 className='card-tittle p-1 '>{it.itemname} </h5>
        <h5 className='card-tittle p-1'>₹ {it.price} / KG</h5>
        <p className='card-text p-1'>{it.desc}</p>
        <button className='btn btn-primary' onClick={()=>addItem(it)} >Add card</button>
    </div>
    </div>    
    </div>
   </>
  )
}


export default Itemcard