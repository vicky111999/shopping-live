import React from 'react'
import Itemcard from './Itemcard'
import data from './data'

function Home() {
  return (
  <>
    <h1 className='text-center bg-info mt-5 mb-5'>SHOPPING CART</h1>
    <div className='row justify-content-center'>
      {
        data.productdata.map((item,index)=>{
              return(
                <Itemcard img={item.img} itemname={item.itemname} price={item.price} desc={item.desc} key={index} item={item} id={item.id}></Itemcard>
                
              )
})
      }

    </div>

  </>
  )
}

export default Home