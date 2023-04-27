import React from "react";
import { Button } from "react-bootstrap";
export const Design =()=>{
    return(
        <div>
            <h2>Welcome</h2>
            {/* <div className="row">
                <div className="col-md-6">
                    <input type="button" value="Display" className="btn btn-primary"/>
                </div>
                <div className="col-md-6">
                    <input type="button" value="Display" className="btn btn-info"/>
                </div>

            </div> */}
            <Button>Display</Button>
            <Button variant="secondary" size="lg" disabled>Secondary</Button>

            <Button variant="warning">Display</Button>
            <Button variant="success">Success</Button>
            <Button variant="info">Info</Button>
            <Button variant="dark">Dark</Button>
            <Button variant="light">Light</Button>
            <Button variant="outline-primary">Outlie Primary</Button>

        </div>
    )
}