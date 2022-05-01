import {Fragment, useState} from 'react';
import Header from './Components/Layout/Header'
import Meals from './Components/Meals/Meals';
import Cart from './Components/Cart/cart'
import CartProvider from './Store/cart-provider';

function App() {
  
  const [cartIsShown, setCartIsShown] = useState(false);

  const showCartHandler = ()=>
  {
    setCartIsShown(true);
  }

  const hideCartHandler = ()=>
  {
    setCartIsShown(false);
  }


  return (
    <CartProvider>
    { cartIsShown &&  <Cart onClose={hideCartHandler}></Cart>} 
      <Header onShowCart={showCartHandler}></Header>
      <main>
        <Meals></Meals>
      </main>
    </CartProvider>
  );
}

export default App;
