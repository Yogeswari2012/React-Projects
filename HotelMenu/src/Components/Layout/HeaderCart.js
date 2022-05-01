import { useContext, useEffect,useState} from 'react'

import CartIcon from '../Cart/CartIcon'
import './HeaderCart.css'
import CartContext from '../../Store/cart-context'



const HeaderCartButton = (props) =>
{
     const cartCtx = useContext(CartContext)

          const [btnISHighLighted,setBtnISHighLighted] = useState(false);

     
     
      const  numberOfCartItems = cartCtx.items.reduce((curNumber, item)=>
       {
           return curNumber + item.amount
       },0)
    
      const btnClasses = `button  ${btnISHighLighted?'bump':''}`
      console.log(btnClasses);
     
      useEffect(()=>
      {
          
          if(cartCtx.items.length===0)
          {
              return;
          }
          setBtnISHighLighted(true);

       const timer=   setTimeout(()=>
          {
              setBtnISHighLighted(false);
          },300)

            return ()=>
            {
                clearTimeout(timer);
            }
      },[cartCtx.items])
     
        


    return <button className={btnClasses} onClick={props.onClick}>
        <span className="icon">
            <CartIcon></CartIcon>
        </span>
        <span>
             Your Cart
        </span>
        <span className="badge">
            {numberOfCartItems}
        </span>
    </button>
}

export default HeaderCartButton