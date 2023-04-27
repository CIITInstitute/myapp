import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
export const Home=()=>{
    const txtid=useRef();
    const txtname=useRef();
    const navigate=useNavigate();
    const SubmitData=()=>{
        var pid=txtid.current.value;
        var pname=txtname.current.value;
        navigate("/product/"+pid+"/"+pname);
    }
    return(
        <div>
            <h2>Home Page</h2>
            <table>
                <tbody>
                    <tr>
                        <td>Product Id :</td>
                        <td><input type="text" ref={txtid} /></td>
                    </tr>
                    <tr>
                        <td>Product Name :</td>
                        <td><input type="text" ref={txtname} /></td>
                    </tr>
                    <tr>
                        <td colSpan={2}><input type="button"  value="Submit" onClick={()=>SubmitData()} /></td>
                    </tr>

                </tbody>
            </table>
        </div>
    )
}