import React from "react";
import {Link, Outlet} from "react-router-dom"
export const Main=()=>{
    return(
        <div>
            
                <h2>Routing Demo</h2>
                <div>
                    {/* <Link to="/">Login</Link> */}
                    <Link to="home">Home</Link>
                    &nbsp;
                    <Link to="about-us">About Us</Link>
                    &nbsp;
                    <Link to="product/10/Pen">Product</Link>
                    &nbsp;
                    <Link to="/">Logout</Link>
                    &nbsp;
                </div>
                <hr/>
                <div>
<Outlet></Outlet>
                </div>
                <hr/>
                <div>
                    <p>This is Footer Section</p>
                </div>

        </div>
    )
}