import React from "react";
class First extends React.Component{

    constructor(props){
        super(props);
        this.state={
           rno:100,
           name:"Amit Kumar" ,
           data:[10,20,30,40,50],
           students:[{"rno":1,"name":"Ajay"},{"rno":2,"name":"Sanjay"},{"rno":3,"name":"Vijay"},{"rno":4,"name":"Jay"}]
        }
    }

    render(){
        return(
            <div>
                <h2>Welcome</h2>
                <div>
                    <h4>Roll No={this.state.rno}</h4>
                    <h4>Student Name={this.state.name}</h4>
                </div>
                <hr/>
                <ul>
                    {this.state.data.map((d,k)=>(
                        <li key={k}>{d}</li>
                    ))}
                </ul>
                <hr/>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Roll No</th>
                            <th>Student Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map((d,k)=>(
                                <tr key={k}>
                                    <td>{d.rno}</td>
                                    <td>{d.name}</td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
                <hr/>
                <Second></Second>

            </div>
        )
    }
}
class Second extends React.Component{
    render(){
        return(
            <div>
                <h2>This is Second Component</h2>
            </div>
        )
    }
}
export default First;