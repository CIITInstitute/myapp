import React from "react";
import { Home } from "./HomeComponent";
import { About } from "./AboutComponent";
import { Staff } from "./StaffComponent";
import { Company } from "./CompanyComponent";
import { Product } from "./ProductComponent";
import { Login } from "./LoginComponent";
import { Main } from "./MainComponent";
import {BrowserRouter as Router,Routes,Link,Route} from "react-router-dom"
export const Common=()=>{
    return(
        <div>
            <Router>
                
                
                <div>
                    <Routes>
                        <Route  path="" element={<Login/>}/>
                        <Route  path="main" element={<Main/>}>
                            <Route  path="home" element={<Home/>}/>
                            <Route  path="about-us" element={<About/>}>
                                <Route path="staff" element={<Staff/>} />
                                <Route path="company" element={<Company/>} />
                            </Route>
                            <Route  path="product/:id/:name" element={<Product/>}/>
                        </Route>
                    </Routes>
                </div>
                
                
                

            </Router>
        </div>
    )
}