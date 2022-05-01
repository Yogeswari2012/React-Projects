import React from 'react'
import './input.css'

const Input =React.forwardRef((props,ref)=>
{

    return (
        <div className="input">
            <label htmlFor={props.input.id}>{props.label}</label>
            {/* object destruction..instead of passing it as seperate element we are passing all the key value pairs as props */}
            <input ref={ref} {...props.input}></input>
        </div>
    );
});

export default Input