import Card from './card.js'
import './searchbar.css'
import {useContext} from 'react'
import { ItemContext } from './Context/ItemProvider.js'
const Search = ()=>
{
   const items=useContext(ItemContext);
   console.log(items.search);

    return (
        <Card classname="searchbar">
           <h4 className="searchtitle">Search Your Favorite Cocktail</h4>
           <input type="search" value={items.search} onChange={items.searchHandler}></input>
        </Card>
    )
}

export default Search