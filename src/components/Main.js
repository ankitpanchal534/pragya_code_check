import React from 'react'
import Product from './Product';

 const Main = (props) => {
    const {products , onAdd} = props;
  return (
   <main className='rowBg'>
    <h2> Products</h2>
    <div className='row'>
        {
            products.map( (product) => (
                <Product 
                key ={product.id}
                product = {product}
                onAdd= {onAdd}/>
            ))
        }
    </div>
   </main>
  )
}
export default Main;
