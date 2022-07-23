import { useState } from 'react';
import data from './data';
import Main from './components/Main';
import Basket from './components/Basket'
import './App.css';

function App() {
  const {products} =data;
const [cartItems, setcartItems] = useState([]);

const onAdd = (product) => {
  const exist =cartItems.find((x)=>x.id===product.id);
  if(exist){
setcartItems(
  cartItems.map( (x) => x.id === product.id ? { ...exist , qty:exist.qty+1}:x)
)
  }
  else{
setcartItems([...cartItems , {...product , qty:1}])
  }
}

const onRemove = (product) => {
  const exist =cartItems.find((x)=>x.id===product.id);
  if(exist.qty ===1){
    setcartItems(cartItems.filter( (x) => x.id !== product.id))
  }
  else{
    setcartItems( cartItems.map ( (x)=>
    x.id === product.id ? {...exist , qty:exist.qty-1}:x))
  }
}

  return (
   <>
    <div className='row'>
      <Main products={products} onAdd={onAdd}/>
      <Basket cartItems={cartItems} onAdd={onAdd} onRemove={onRemove}/>
    </div>
   </>
  );
}

export default App;
