import React from 'react'
import { useCart } from 'react-use-cart'

function Cart() {
    const {isEmpty,totalUniqueItems,items,totalItems,cartTotal,updateItemQuantity,removeItem,emptyCart} = useCart()
    if(isEmpty) return <h1>THE CART IS EMPTY</h1>
  return (
    <div className='row justify-content-center'>
        <h5>CART:{totalUniqueItems} Total Items:{totalItems} </h5>
        <table className='table table-light table-hover m-0'>
          <tbody>
            {
              items.map((item,index)=>{
                return(
                  <tr key={index}>
                  <td><img src={item.img} style={{height:"5rem"}} alt='NOT FOUND'></img></td>
                  <td className='align-content-center'>{item.itemname}</td>
                  <td className='align-content-center'>₹{item.price}</td>
                  <td>
              <div className='text-center'>  <button className='btn btn-info mt-3 ' onClick={()=>updateItemQuantity(item.id,item.quantity-1)}>-</button>
                 </div> </td>
                  <td className=' align-content-center'>{item.quantity}</td>
                  <td>
               <div className='text-right'> <button className='btn btn-info mt-3 ' onClick={()=>updateItemQuantity(item.id,item.quantity+1)}>+</button>
                 </div> </td>
                  <td>
                    <button className='btn btn-danger mt-3 ' onClick={()=>removeItem(item.id)}>REMOVE ITEM</button>
                  </td>
                  <td className='align-content-center'>₹ {item.price*item.quantity}</td>
                  </tr>
              )
            })
          }
          </tbody>
        </table>         
        <h2 className='text-end bg-success me-2'>Total PRICE ₹{cartTotal}  </h2> 
          <button onClick={emptyCart} className='btn btn-primary col-2'>REMOVE ALL</button>
          <button className='btn btn-warning col-2'>Buy Now</button>
    </div>// for empty space(alt+0160)
  )
}

export default Cart