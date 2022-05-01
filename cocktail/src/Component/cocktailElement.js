import './cocktailElement.css'
import Card from './card'
import { useNavigate } from 'react-router-dom'
import {useContext} from 'react';
import { ItemContext } from './Context/ItemProvider';

const CocktailElement = (props)=>
{

    const value= useContext(ItemContext);
    // console.log(value);
    const navigate = useNavigate();
    
return (
    
        <Card classname="element">
        <img src={props.image} className="cocktailimage"></img>
        <h1>{props.cocktailname}</h1>
        <h4>{props.cocktailglass}</h4>
        <p>{props.isAlcoholic}</p>

         <button onClick={()=>
        {
            value.fetchItems(props.id);
            navigate(`/cocktail/${props.id}`)
            
        }}>
             DETAILS
         </button>
         
        </Card>

   
)
}

export default CocktailElement