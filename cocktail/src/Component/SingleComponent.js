import {useState , useContext} from 'react'
import './SingleComponents.css'
import {useNavigate} from  'react-router-dom'
import { ItemContext } from './Context/ItemProvider'
const SingleComponent = ()=>
{
let ingredients = "";
const value= useContext(ItemContext);
console.log(value);
console.log(value.element);
let list =[];
if(value.element.drinks)
{
    console.log("list is");
    list=value.element.drinks;
    console.log(value.element.drinks[0])
const objs = value.element.drinks[0];
for(const key in objs)
{

    if(key.includes("strIngredient") && objs[key]!==null)
    {
        ingredients= ingredients + objs[key] + " ";
    }
    console.log(objs[key]);
}
    // for(const keys in value.element.drinks["0"] );
    // {
    //     console.log(keys);
    // }
}

console.log(list);
 const navigate = useNavigate();
// const src= value.element.drinks.strDrinkThumb;
// console.log(src);


        return(
          <div className="singlelement">
                 <div className="btn"> <button onClick={()=>
                {
                    navigate("/")
                }}>Back To Home</button></div> 

               {
                   list.map(el =>
                    (
                        <h1>{el.strDrink}</h1>
                   ))
               }

                {    list.map(el=>(        <div className="main-content">
                    <img src={el.strDrinkThumb} ></img>
                    <div className="content">
                        <div >
                           <h4 className="label">Name
                           :</h4> 
                           <h4>{el.strDrink}</h4>
                        </div>
                        <div>
                           <h4  className="label">Category
                           :</h4> 
                           <h4>{el.strCategory}</h4>
                        </div>
                        <div>
                           <h4  className="label">Info :</h4> 
                           <h4>{el.strAlcoholic}</h4>
                        </div>
                        <div>
                           <h4  className="label">Glass :</h4> 
                           <h4> {el.strGlass}</h4>
                        </div>
                        <div>
                           <h4  className="label">Instructons
                           :</h4> 
                           <h4>{el.strInstructions}</h4>
                        </div>
                        <div>
                           <h4  className="label">Ingredients :</h4> 
                           <h4>{ingredients}</h4>
                        </div>
                    </div>
                </div>))}

            </div>)
        

}

export default SingleComponent