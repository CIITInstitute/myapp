import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
export const Product=()=>{
    const data=useParams();
    // useEffect(function () {

    //     console.log(data);
    //   },[]);
    return(
        <div>
            <h2>Product Page</h2>
            <h2>Product Id={data.id}</h2>
            <h2>Product Name={data.name}</h2>
        </div>
    )
}