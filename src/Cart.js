import React from 'react'
import Header from './Components/Header';
import { useCart } from 'react-use-cart';
import Footer from './Components/Footer';

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    totalItems,
    cartTotal,
    updateItemQuantity,
    removeItem,
    emptyCart,
  }=useCart();
  function payment(){
    setTimeout(() => {
        
    alert("Payment Done");
      }, 1000);
  }
  if(isEmpty)return<h1 className='text-center'>your Cart is Empty<br/><a href='/order'>order know</a></h1>
  return (
    <>
    <Header/>
    <section className='py-4 container'>
        <div className='row justify-content-center'>
            <div className='col-12'>
            <h5>Cart({totalUniqueItems})total Items:({totalItems})</h5>
            <table className='table table-light table-hover m-0'>
                <tbody>
                {items.map((item,index)=>{
                    return(
                    <tr key={index}>
                        <td><img src={item.img} style={{height:'6rem'}} alt='pramod'/></td>
                        <td>{item.title}</td>
                        <td>{item.price}</td>
                        <td>Quantity({item.quantity})</td>
                        <td>
                            <button 
                                className='btn btn-info ms-2'
                                onClick={()=>updateItemQuantity(item.id,item.quantity-1)}
                            >-</button>
                            <button 
                                
                                className='btn btn-info ms-2'
                                onClick={()=>updateItemQuantity(item.id,item.quantity+1)}
                            >+</button>
                            <button 
                                className='btn btn-danger ms-2'
                                onClick={()=>removeItem(item.id)}
                                
                            >Remove Item</button>

                        </td>
                    </tr>)
                })}
                </tbody>
            </table>
            </div>   
            <div className='col-auto ms-auto'>
                <h3>Total Price:<svg xmlns="http://www.w3.org/2000/svg" width="16" height="26" fill="currentColor" class="bi bi-currency-rupee" viewBox="0 0 16 16">
  <path d="M4 3.06h2.726c1.22 0 2.12.575 2.325 1.724H4v1.051h5.051C8.855 7.001 8 7.558 6.788 7.558H4v1.317L8.437 14h2.11L6.095 8.884h.855c2.316-.018 3.465-1.476 3.688-3.049H12V4.784h-1.345c-.08-.778-.357-1.335-.793-1.732H12V2H4z"/>
</svg>{cartTotal}</h3>
            </div>     
            <div className='col-auto'>
                <button 
                className='btn btn-danger m-2'
                onClick={()=>emptyCart()}
                >Clear Cart</button>
                <button  className='btn btn-primary' onClick={payment}>Buy Now</button>
            </div>
        </div>
    </section>
    <Footer/>
    </>
  )
}

export default Cart