import { useContext } from 'react'
import './cart.css'
import Modal from '../UI/Modal'
import CartContext from '../../Store/cart-context'
import CartItem from './CartItem'
const Cart = (props) =>
{

   const ctx = useContext(CartContext);
   const totalAmount = `$${ctx.totalAmount.toFixed(2)}`
   const hasItems = ctx.items.length>0;
   const cartItemAddHanlder = (item)=>
   {
       ctx.addItem({...item,amount:1});

   }

   const cartItemRemoveHanlder = (id)=>
   {
          ctx.removeItem(id);
   }


    const cartItems= <ul className="cart-items">
        {
          ctx.items.map((item)=>
            (
              <CartItem
               key={item.id}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onRemove={cartItemRemoveHanlder.bind(null,item.id)}
               onAdd={cartItemAddHanlder.bind(null,item)}
              
              
              ></CartItem>
            ))
        }
    </ul>
   return(
       <Modal onClose={props.onClose}>
           {cartItems}
           <div className="total">
               <span>Total Amount</span>
               <span>{totalAmount}</span>
           </div>
           <div className="actions">
               <button className="button--alt" onClick={props.onClose}>Close</button>
             {hasItems && <button className="button">Order</button>}
           </div>
           
       </Modal>
   )
}

export default Cart
