import axios from "axios";
import {useState} from "react";
import '../App.css';

export default function Modal ({hide}){
    const [name, setName] = useState( '');
    const [username, setUserName] = useState( '');
    const [email, setEmail] = useState( '');
    const [address, setAddress] = useState( '');
    const [phone, setPhone] = useState( '');
    const [website, setwebsite] = useState( '');
    const [company, setcompany] = useState( '');
    return(
        <>

               <div className='modal'>
                   <div >
                       <label>
                           Name :
                           <br/><input type='text' name='Name'  onChange={(e) => {
                               setName(e.target.value);
                           }}/>
                       </label>
                   </div>
                   <div>
                       <label>
                           Username :
                           <br/><input type='text' name='Username' onChange={(e) => {
                               setUserName(e.target.value);
                           }}/>
                       </label>
                   </div>
                   <div>
                       <label>
                           Email :
                           <br/><input type='text' name='Email' onChange={(e) => {
                               setEmail(e.target.value);
                           }}/>
                       </label>
                   </div>
                   <div>
                       <label>
                           Address :
                           <br/><input type='text' name='Address' onChange={(e) => {
                               setAddress(e.target.value);
                           }}/>
                       </label>
                   </div>
                   <div>
                       <label>
                           Phone :
                           <br/><input type='text' name='Phone' onChange={(e) => {
                               setPhone(e.target.value);
                           }}/>
                       </label>
                   </div>
                   <div>
                       <label>
                           Website :
                           <br/><input type='text' name='Website' onChange={(e) => {
                               setwebsite(e.target.value);
                           }}/>
                       </label>
                   </div>
                   <div>
                       <label>
                           Company :
                           <br/> <input type='text' name='Company' onChange={(e) => {
                               setcompany(e.target.value);
                           }}/>
                       </label>
                   </div><br/>
                   <div className='container modal-cont'>
                       <div className='row'>
                           <div >
                               <button className='btn btn-secondary modal-btn' onClick={()=>{
                                   hide(false);
                               }}>
                                   Cancel
                               </button>
                               <button className='btn btn-primary modal-btn'
                               onClick={()=>{
                                   const promise = axios({
                                       method : 'post',
                                       url : 'http://jsonplaceholder.typicode.com/users',
                                       body : JSON.stringify({
                                           name : {name},
                                           username : {username},
                                           email : {email},
                                           address : {
                                               street : {address}
                                           },
                                           phone : {phone},
                                           website : {website},
                                           company : {
                                               name : {company}
                                           }
                                       })
                                   });
                                   promise.then((resp)=>{
                                       console.log(resp);
                                   }).catch((err) => {
                                       console.log(err);
                                   });
                                   hide(false);
                               }}>
                                   Save
                               </button>
                           </div>
                       </div>
                   </div>
               </div>

        </>
    );
}