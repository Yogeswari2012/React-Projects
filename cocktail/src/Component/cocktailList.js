import { useEffect , useState, useContext} from "react";
import './cocktailList.css'
import CocktailElement from './cocktailElement'
import { ItemContext } from "./Context/ItemProvider";
const CocktailList = ()=>
{

    const [list,setList] = useState([]);
    const items= useContext(ItemContext)
    console.log(items);

const fetchcocktails = ()=>
{

    console.log("Inside fetch");
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${items.search}`)
    .then(data =>
        {
            console.log(data);
            return data.json();
        })
        .then(resultlist =>
            {
                console.log(resultlist);
                 console.log(resultlist.drinks);
                 if(resultlist.drinks===null)
                 {
                     setList([]);
                     return;
                 }
                

                const cocktails = resultlist.drinks.map(element =>
                    {
                        return{
                            cocktailname: element.strDrink,
                            id: element.idDrink,
                            cocktailglass: element.strGlass,
                            isAlcoholic: element.strAlcoholic,
                            image: element.strDrinkThumb
                        }
                    })
                    // cocktails.pop();
                    setList(cocktails);
            })
}

useEffect(()=>
{

console.log("Inside useeffect")
console.log(items.search);
    fetchcocktails();



},[items.search])



    return (
        <div className="cocktail">
            <h1>Cocktails</h1>
            <div className="list">
                {list.length===0 &&  items.search !=='' && <p className="noelements"> No Cocktails Matched Your Search Criteria</p>}
          {list.map(element =>
            (
                <CocktailElement key ={element.id}image={element.image}
                  id={element.id}
                  cocktailname={element.cocktailname}
                  cocktailglass={element.cocktailglass}
                  isAlcoholic={element.isAlcoholic}
                >
                   
                </CocktailElement>
          ))}
            </div>
        </div>
    )
}

export default CocktailList