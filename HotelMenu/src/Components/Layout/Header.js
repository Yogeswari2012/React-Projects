import {Fragment} from 'react';
import MealsImage from '../../Images/meals.jpg'
import './Header.css'
import HeaderCart from './HeaderCart'

const Header = (props)=>
{



    return (
        <Fragment>
            <header className="header">
                <h1 >ReactMeals</h1>
               <HeaderCart onClick={props.onShowCart}></HeaderCart>
            </header>
            <div className="main-image">
                <img src={MealsImage} >
                </img>
            </div>
        </Fragment>
    )
}

export default Header