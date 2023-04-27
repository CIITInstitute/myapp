import React, { useRef, useState } from "react"
export const Employee=()=>{
    const [rno,setRollNo]=useState(100);
    const [name,setName]=useState("Ajay")
    const [students,setStudent]=useState([{"rno":1,"name":"Amit"},{"rno":2,"name":"Ajit"}])
    const txtrno=useRef();
    const txtname=useRef();
    const Display=()=>{
        // alert("Clicked");
        var r=txtrno.current.value;
        var n=txtname.current.value;
        setRollNo(r);
        setName(n);
    }
    return(
        <div>
            <h2>Welcome to React Function Based Component</h2>
            <label>Roll No :</label>
            <input type="text" ref={txtrno}/>
            <br/>
            <label>Student Name :</label>
            <input type="text" ref={txtname}/>
            <br/>

            <input type="button" value="Display" onClick={()=>Display()} />
            <h2>{rno}</h2>
            <h2>{name}</h2>
            <hr/>
            <table border="1">
                <thead>
                    <tr>
                        <th>Roll No</th>
                        <th>Student Name</th>
                    </tr>
                </thead>
                <tbody>
                    {students.map((d,k)=>(
                        <tr key={k}>
                            <td>{d.rno}</td>
                            <td>{d.name}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
// export default Employee;