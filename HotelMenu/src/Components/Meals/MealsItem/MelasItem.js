import { useContext } from 'react'
import './MealItem.css'
import MealItemForm from './MealItemForm'
import CartContext from '../../../Store/cart-context'
const MealItem =(props)=>
{

    const ctx= useContext(CartContext);

    const price = `$${props.price.toFixed(2)}`

    const addToCartHanlder = (amount)=>
    {
        console.log("inside ctxt");
           ctx.addItem({
               id:props.id,
               name:props.name,
               amount:amount,
               price:props.price
           });
    }

    return (
        <li className="meal">
            <div >
                <h3>{props.name}</h3>
                <div className="description">{props.description}</div>
                <div className="price">{price}</div>
            </div>
            <div>
               <MealItemForm  onAddToCart={addToCartHanlder}id={props.id}></MealItemForm>
            </div>
        </li>
    )
}

export default MealItem