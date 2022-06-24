import { useState } from "react";
import MyInput from "./Input";
import Modal from "react-modal";
import React from "react";
import './modal.css'


export default function ModalComponent(){
    const [show, setShow] = useState(false);
    function OpenModal(){
        setShow(!show);
    }
    return(
        <>
           <button className="btn btn-primary" onClick={OpenModal}>
           Add
           </button> 
           <Modal className='custom-modal' 
           overlayClassName='custom-overlay' 
           onRequestClose={OpenModal}
           contentLabel="Tiny nomadic modal popover"
           isOpen={show}
           >
            <div>
                <MyInput label='Name' type='text'/>
                <MyInput label='Username' type='text'/>
                <MyInput label='Email' type='text'/>
                <MyInput label='Address' type='text'/>
                <MyInput label='Phone' type='text'/>
                <MyInput label='Website' type='text'/>
                <MyInput label='Company' type='text'/>
                <button className="btn btn-primary" onClick={OpenModal}>
                 Save
                 </button> 
            </div>
           </Modal>
        </>
    )
}