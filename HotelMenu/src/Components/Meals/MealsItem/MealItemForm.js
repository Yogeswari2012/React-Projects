import React ,{useRef , useState}from 'react'
import './MealItemform.css'
import Input from '../../UI/Input'


const MealItemForm = (props)=>
    {

        const amountInputRef=useRef();
        const[amountIsValid, setAmountIsvalid] = useState(true);
   const submitHanlder = (event)=>
   {
       event.preventDefault();
       const enteredAmount = amountInputRef.current.value;
       const enteredAmountNumber = +enteredAmount;
       if(enteredAmount.trim().length===0 || enteredAmountNumber<1 || enteredAmountNumber>5)
       {
           setAmountIsvalid(false);
           return;
       }
       console.log(enteredAmountNumber);
       props.onAddToCart(enteredAmountNumber);
         
   }


        return(
            <form className ="form" onSubmit ={submitHanlder}>
                <Input
                ref={amountInputRef}
                label =
                "Amount"
                 input ={{id:'amount'+props.id, type:"number",
                min:"1",
                max:"10",
                step:"1",
                defaultValue:"1"}}/>
                
                <button>+ Add</button>
                {!amountIsValid && <p>please Enter Valid Amount</p>}
            </form>
        )

    }

    export default MealItemForm