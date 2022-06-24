import '../App.css';
import axios from "axios";
import {useState} from "react";

export default function Line ({isOpen,val}){
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
                <label>
                    Name :
                    <br/><input type='text' value={val.name} onChange={(e) => {
                    setName(e.target.value);
                }}/>
                </label>
                <label>
                    Username :
                    <br/><input type='text' value={val.username} onChange={(e) => {
                    setUserName(e.target.value);
                }}/>
                </label>
                <label>
                    Email :
                    <br/><input type='text' value={val.email} onChange={(e) => {
                    setEmail(e.target.value);
                }}/>
                </label>
                <label>
                    Address :
                    <br/><input type='text' value={`${val.address.street}-${val.address.city}`} onChange={(e) => {
                    setAddress(e.target.value);
                }}/>
                </label>
                <label>
                    Phone :
                    <br/><input type='text' value={val.phone} onChange={(e) => {
                    setPhone(e.target.value);
                }}/>
                </label>
                <label>
                    Website :
                    <br/><input type='text' value={val.website} onChange={(e) => {
                    setwebsite(e.target.value);
                }}/>
                </label>
                <label>
                    Company :
                    <br/><input type='text' value={val.company.name} onChange={(e) => {
                    setcompany(e.target.value);
                }}/>
                </label>
                <br/>
                <div className='container modal-cont'>
                    <div className='row'>
                        <div>
                            <button className='btn btn-primary ' onClick={() => {
                                const promise = axios({
                                    method : 'put',
                                    url : "http://jsonplaceholder.typicode.com/users/1",
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
                                })
                                promise.then((resp)=>{
                                    console.log(resp);
                                }).catch((err) => {
                                    console.log(err);
                                });
                                isOpen(false);
                            }}>Update</button>
                            <button className='btn btn-primary modal-btn' onClick={() => {
                                isOpen(false);
                            }}>Cancel</button>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}