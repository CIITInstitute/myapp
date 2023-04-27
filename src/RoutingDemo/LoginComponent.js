import { render } from "@testing-library/react";
import React from "react";
import { useState } from "react";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
export const Login=()=>{
    const txtuser=useRef();
    const txtpass=useRef();
    const navigate=useNavigate();
    const [msg,setMessage]=useState("");
    const CheckLogin=()=>{
        var u=txtuser.current.value;
        var p=txtpass.current.value;
        if(u==="ciit" && p==="1234"){
            // setMessage("Login Successfully");
            navigate("/main");
        }
        else{
            setMessage("Invalid User Name or Password");

        }
    }
    return(
        <div>
            <h4>Login Here</h4>
            <table>
                <tbody>
                    <tr>
                        <td>User Name:</td> 
                        <td><input type="text" ref={txtuser} /></td>
                    </tr>
                    <tr>
                        <td>Password:</td>
                        <td><input type="password" ref={txtpass} /></td>
                    </tr>
                    <tr>
                        <td><input type="button" value="Login" onClick={CheckLogin} /></td>
                    </tr>

                </tbody>
            </table>
            <h2>{msg}</h2>
            <hr/>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/UuX9kl-h4MM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </div>
    )
}