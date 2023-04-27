import React from "react";
import { Link, Outlet } from "react-router-dom";
export const About=()=>{
    return(
        <div>
            <h2>About Us Page</h2>
            <hr/>
            <div>
                <Link to="staff">About Staff</Link>
                &nbsp;
                <Link to="company">About Company</Link>
                &nbsp;
            </div>
            <hr/>
            <div>
                <Outlet></Outlet>
            </div>
        </div>
    )
}