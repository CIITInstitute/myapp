import React, { useEffect, useState } from "react";
import axios from "axios";
export const Employee=()=>{
    const [data,setData]=useState([]);
    useEffect(function(){
        axios({
            url:'https://ciitinstitute.com/api/dummyemployee',
            method:'get',
            contentType:'application/json',
        }).then(e=>{
            setData(e.data);
        })
    },[])


    return(
        <div className="container">
            <h2>Employee Operations</h2>
            <FetchEmployee empdata={data} />
        </div>
    )
}

const FetchEmployee=(props)=>{
    return(
        <div>
            <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Email Address</th>
                    <th>Mobile Number</th>
                    <th>Designation</th>
                        <th>Salary</th>
                    </tr>
                </thead>
                <tbody>
                    {props.empdata.map((d,k)=>(
                        <tr key={k}>
                            <td>{d.employee_id}</td>
                            <td>{d.employee_name}</td>
                            <td>{d.email_address}</td>
                            <td>{d.mobile_number}</td>
                            <td>{d.designation}</td>
                            <td>{d.salary}</td>

                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}