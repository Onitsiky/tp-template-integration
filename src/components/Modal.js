import MyInput from "./MyInput";
import Button from "./Button";
import axios from "axios";

export default function Modal ({hide}){
    return(
        <>
           <div className='modalBackground'>
               <div className='modalContainer'>
                   <div>
                       <MyInput type='text' name='Name'/>
                   </div>
                   <div>
                       <MyInput type='text' name='Username'/>
                   </div>
                   <div>
                       <MyInput type='email' name='email'/>
                   </div>
                   <div>
                       <MyInput type='text' name='Address'/>
                   </div>
                   <div>
                       <MyInput type='text' name='Phone'/>
                   </div>
                   <div>
                       <MyInput type='text' name='Website'/>
                   </div>
                   <div>
                       <MyInput type='text' name='Company'/>
                   </div>
                   <div className='container'>
                       <div className='row'>
                           <div>
                               <button className='btn btn-secondary' onClick={()=>{hide(false)}}>
                                   Cancel
                               </button>
                           </div>
                           <div>
                               <button className='btn btn-primary'
                               onClick={()=>{
                                   const promise = axios({
                                       method : 'post',
                                       url : 'http://jsonplaceholder.typicode.com/users'
                                   })
                               }}>
                                   Save
                               </button>
                           </div>
                       </div>
                   </div>
               </div>
           </div>
        </>
    );
}