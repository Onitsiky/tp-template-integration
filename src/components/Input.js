import React from "react";
export default function MyInput(props){
    const [label,type] = props;
    return(
        <>
            <span>{label}</span>
            <input type={type} name={label}/>
        </>
    )
}