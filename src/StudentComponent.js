import React from "react"
export class Student extends React.Component{
    constructor(props){
        super(props);
        this.state={
            studentdata:[],
            status:false,
            index:-1
        }
    }
    AddStudent(){
        var r=this.refs.txtrno.value;
        var n=this.refs.txtname.value;
        var e=this.refs.txtenglish.value;
        var m=this.refs.txtmaths.value;
        var s=this.refs.txtscience.value;
        var total=Number(e)+Number(m)+Number(s);
        var per=(total/3).toFixed(2);
        var res="Fail";
        if(per>=40){
            res="Pass";
        }
        var st={"rno":r,"name":n,"english":e,"maths":m,"science":s,"total":total,"percentage":per,"result":res};
        this.state.studentdata.push(st);
        this.ClearData();
 
        this.setState({studentdata:this.state.studentdata});
    }
    ViewStudent(st,p){
        console.log(st);
        console.log(p);
        this.setState({index:p});
        this.refs.txtrno.value=st.rno;
        this.refs.txtname.value=st.name;
        this.refs.txtenglish.value=st.english;
        this.refs.txtmaths.value=st.maths;
        this.refs.txtscience.value=st.science;
        this.setState({status:true})
    }

    UpdateStudent(){
        var r=this.refs.txtrno.value;
        var n=this.refs.txtname.value;
        var e=this.refs.txtenglish.value;
        var m=this.refs.txtmaths.value;
        var s=this.refs.txtscience.value;
        var total=Number(e)+Number(m)+Number(s);
        var per=(total/3).toFixed(2);
        var res="Fail";
        if(per>=40){
            res="Pass";
        }
        var st={"rno":r,"name":n,"english":e,"maths":m,"science":s,"total":total,"percentage":per,"result":res};
        this.state.studentdata[this.state.index]=st;
        this.ClearData();
 
        this.setState({studentdata:this.state.studentdata});
    }

    DeleteStudent(p){
        this.state.studentdata.splice(p,1);
        this.setState({studentdata:this.state.studentdata});
    }
    ClearData(){

        this.refs.txtrno.value="";
        this.refs.txtname.value="";
        this.refs.txtenglish.value="";
        this.refs.txtmaths.value="";
        this.refs.txtscience.value="";
        this.setState({status:false})

    }
    render(){
        return(
            <div>
                <h2>Student Operations</h2>
                <table>
                    <thead></thead>
                    <tbody>
                        <tr>
                            <td>Roll No:</td>
                            <td><input type="text" ref="txtrno"/></td>
                        </tr>
                        <tr>
                            <td>Student Name:</td>
                            <td><input type="text" ref="txtname"/></td>
                        </tr>
                        <tr>
                            <td>English:</td>
                            <td><input type="text" ref="txtenglish"/></td>
                        </tr>
                        <tr>
                            <td>Maths:</td>
                            <td><input type="text" ref="txtmaths"/></td>
                        </tr>
                        <tr>
                            <td>Science:</td>
                            <td><input type="text" ref="txtscience"/></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                                
                            <input type="button" value="Submit" onClick={this.AddStudent.bind(this)} hidden={this.state.status}/>
                            <input type="button" value="Update" onClick={this.UpdateStudent.bind(this)}  hidden={!this.state.status}/>
                            &nbsp;
                                <input type="button" value="Clear" onClick={this.ClearData.bind(this)}/>
                                
                                </td>
                        </tr>

                    </tbody>
                </table>
                <hr/>
                <table border="1">
                    <thead>
                        <tr>
                            <th>Roll No</th>
                            <th>Student Name</th>
                            <th>English</th>
                            <th>Maths</th>
                            <th>Science</th>
                            <th>Total</th>
                            <th>Percentage</th>
                            <th>Result</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.studentdata.map((d,k)=>(
                            <tr key={k}>
                                <td>{d.rno}</td>
                                <td>{d.name}</td>
                                <td>{d.english}</td>
                                <td>{d.maths}</td>
                                <td>{d.science}</td>
                                <td>{d.total}</td>
                                <td>{d.percentage}</td>
                                <td>{d.result}</td>
                                <td>
                                <button onClick={this.ViewStudent.bind(this,d,k)}>View</button>
                                    &nbsp;
                                <button onClick={this.DeleteStudent.bind(this,k)}>X</button>


                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        )
    }
}