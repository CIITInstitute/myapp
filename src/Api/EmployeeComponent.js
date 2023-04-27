import React, { useEffect, useRef, useState } from "react"
import axios from "axios"
export const Employee=()=>{

    const [employees,setEmployees]=useState([]);
    const txteid=useRef();
    const txtename=useRef();
    const txtemail=useRef();
    const txtdesignation=useRef();
    const txtsalary=useRef();
    const txtmobile=useRef();

    const AddEmployee=()=>{
        var ename=txtename.current.value;
        var email=txtemail.current.value;
        var mob=txtmobile.current.value;
        var des=txtdesignation.current.value;
        var sal=txtsalary.current.value;
        var st={"employee_name":ename,"email_address":email,"mobile_number":mob,"designation":des,"salary":sal};

        axios({
            url:'https://ciitinstitute.com/api/dummyemployee',
            method:'post',
            data:st,
            contentType:'application/json'
        }).then(e=>{
            // console.log(e);
            alert(e.data);
            GetEmployees();
        })

    }
    useEffect(function () {
        GetEmployees();
      },[])

    const GetEmployees=()=>{
        axios({
            url:'https://ciitinstitute.com/api/dummyemployee',
            method:'get',
            contentType:'application/json'
        }).then(e=>{
            // console.log(e);
            setEmployees(e.data);
        })
    }
    return(
        <div>
            <div className="row">
                <div className="col-md-4">
                    <table>
                        <thead></thead>
                        <tbody>
                            <tr>
                                <td>Employee Id</td>
                                <td><input type="text" ref={txteid}/></td>
                            </tr>
                            <tr>
                                <td>Employee Name</td>
                                <td><input type="text" ref={txtename}/></td>
                            </tr>
                            <tr>
                                <td>Email Address</td>
                                <td><input type="text" ref={txtemail}/></td>
                            </tr>
                            <tr>
                                <td>Mobile Number</td>
                                <td><input type="text" ref={txtmobile}/></td>
                            </tr>
                            <tr>
                                <td>Designation</td>
                                <td><input type="text" ref={txtdesignation}/></td>
                            </tr>
                            <tr>
                                <td>Salary</td>
                                <td><input type="text" ref={txtsalary}/></td>
                            </tr>
                            <tr>
                                <td colSpan={2}><input type="button" value="Submmit" onClick={()=>AddEmployee()}/></td>
                            </tr>


                        </tbody>
                    </table>
                </div>
                <div className="col-md-8">
                <table className="table table-bordered">
                <thead>
                    <tr>
                    <th>Employee Id</th>
                    <th>Employee Name</th>
                    <th>Designation</th>
                    <th>Salary</th>
                    <th>Email Address</th>
                    <th>Mobile Number</th>
                    </tr>
                </thead>
                <tbody>
                    {employees.map((d,k)=>(
                        <tr key={k}>
                            <td>{d.employee_id}</td>
                            <td>{d.employee_name}</td>
                            <td>{d.designation}</td>
                            <td>{d.salary}</td>
                            <td>{d.email_address}</td>
                            <td>{d.mobile_number}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

                </div>
            </div>
        </div>
    )
}