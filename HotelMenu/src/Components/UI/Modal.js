import './Modal.css'

import React from 'react';
import ReactDom from 'react-dom';

const Backdrop = (props)=>
{
    return <div className="backdrop" onClick={props.onClose}>

    </div>
}

const ModalOverlay = (props)=>
{
    return(
        <div className="modal">
           <div className="content">
               {props.children}
           </div>
        </div>
    )
}

const portalElement = document.getElementById('overlays')// parent Element where child need to be inserted

const Modal = (props)=>
{
return (
    <React.Fragment>
           
        {ReactDom.createPortal(<Backdrop onClose={props.onClose}></Backdrop>,portalElement)}
        {ReactDom.createPortal(<ModalOverlay>
           {props.children}
        </ModalOverlay>,portalElement)}


         
    </React.Fragment>



)
}

export default Modal