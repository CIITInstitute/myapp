import React, { useRef, useState } from "react";
export const Parent=()=>{
    const [msg,setMessage]=useState("");
    const FetchData=(p)=>{
        setMessage(p);
    }
    return(
        <div>
            <h2>Parent Component</h2>
            <hr/>
            <Child Show={FetchData} rno="100" name="Amit"></Child>
            <h2>{msg}</h2>
        </div>
    )
}

const Child=(props)=>{
    const txt=useRef();
    const Call=()=>{
        var st=txt.current.value;
        props.Show(st);

    }
    return(
        <div>
            <h4>Child Component</h4>
            <h5>Roll No = {props.rno}</h5>
            <h5>Name = {props.name}</h5>

            <table>
                <thead></thead>
                <tbody>
                    <tr>
                        <td>Enter Name:</td>
                        <td><input type="text" ref={txt} /></td>
                        <td><input type="button" value="Submit" onClick={()=>Call()} /></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

