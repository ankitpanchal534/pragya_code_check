import React from 'react'

const Basket = (props) => {
  const {cartItems, onAdd , onRemove} = props;
  const itemPrice = cartItems.reduce( (a,c)=> a+c.qty*c.price , 0);
  const totalPrice = itemPrice;
  return (
    <aside className='rowBg col-1'>
      <h2>  Cart Items</h2>
      <div>
        {
          cartItems.length === 0 && <div> Cart is Empty</div>
        }
        {
          cartItems.map( (elem) => (
<div key={elem.id}>
  <div> {elem.name}</div>
  <div>
  <button className='remove' onClick={ ()=> onRemove(elem)}> - </button> 
 <button className='add' onClick={ ()=> onAdd(elem)}> + </button>
  </div>

  <div>
    {elem.qty}*${elem.price.toFixed(2)}
  </div>
</div>
          ))
        }

        {cartItems.length !==0 && (
          <>
          <hr/>
          <div>
            <div>
              <b>Total Price</b>
             </div>
             <div>
              <b>${totalPrice.toFixed(2)}</b>
             </div>
          </div>
          <hr/>
          <div className='row'>
            <button>Book Now</button>
          </div>
          </>
        )}
      </div>
    </aside>
  )
}

export default Basket