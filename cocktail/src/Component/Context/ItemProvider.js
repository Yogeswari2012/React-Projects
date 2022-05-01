import {createContext , useCallback, useState} from 'react';


export const ItemContext = createContext();


export const ItemProvider = (props)=>
{

    console.log("Inside provider");
    const [element,setElement] = useState([]);
    const[search,setSearch] = useState('');

    const fetchItems= (id)=>
{
    console.log(id);
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(response =>
     response.json())
   .then(item =>
        {
            console.log(item);
            
            setElement (item);
          
        })
    }

const searchHandler = (e)=>
{
    setSearch(e.target.value);
}





const items ={element:element, fetchItems:fetchItems , searchHandler:searchHandler , search:search}


return (
    <ItemContext.Provider value={items}>
             {props.children}
    </ItemContext.Provider>
)
}



