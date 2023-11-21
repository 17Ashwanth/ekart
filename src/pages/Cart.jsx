import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { deleteCart, removeFromCart } from '../redux/slices/cartSlice';
import { useNavigate } from 'react-router-dom';

function Cart() 
{
  const cartArray=useSelector((state)=>state.cartReducer)
  console.log(cartArray);
  const dispatch=useDispatch()
  const [total,setTotal]= useState(0)
  const Navigate = useNavigate()

  const getTotal = ()=>{
    if(cartArray.length>0)
    {setTotal(cartArray?.map(item=>item.price).reduce((p1,p2)=>p1+p2))
  }
  else
  {
    setTotal(0)
  }
}

  useEffect(()=>{
    getTotal()
  },[cartArray])

  const handleCart = ()=>{
      alert("Thank You! .... Your Order Placed Succesfully")
      dispatch(deleteCart())
      Navigate('/')
  }

  return (
    
    <div style={{marginTop:'150px'}}>
     { cartArray?.length>0? <div className='row w-100'>
        <div className='col-lg-6 m-5'>
          <table className='table border shadow'>
            <thead>
              <th>#</th>
              <th>Product</th>
              <th>Image</th>
              <th>Price</th>
              <th>Action</th>
            </thead>
            <tbody>
              {
                cartArray?.map((item,index)=>(
               <tr>
                 <td>{index+1}</td>
                 <td>{item.title}</td>
                 <td><img src={item.thumbnail} width={'150px'} alt="no image" /></td>
                 <td>€{item.price}</td>
                 <td><Button onClick={()=>dispatch(removeFromCart(item.id))}><i class="fa-solid fa-trash"></i></Button></td>
               </tr>
                ))
                }
            </tbody>
          </table>
        </div>
        <div className="col-lg-4 d-flex justify-content-center align-items-center flex-column">
          <div className="border shadow p-5">
            <h2 className="text-primary">Cart Summary</h2>
            <h4>Total Number of Products: <span className='text-primary fw-bolder fs-3'>{cartArray.length}</span></h4>
            <h4>Total:€ <span className='text-primary fw-bolder fs-3'>{total}</span></h4>
            <button onClick={()=>handleCart()} className='btn btn-success rounded w-100 mt-3'>CheckOut</button>

          </div>
        </div>
      </div>: <p>Nothing to display</p>
      } 
    </div>
        
  )       
    }  
      

export default Cart