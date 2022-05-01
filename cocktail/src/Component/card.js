import './card.css'

const Card= (props)=>
{

//   let classname = "card" + " " + props.classname;
 
    return (
        <div className = {`card   ${props.classname}`} >
           {props.children}
        </div>
    )
}

export default Card