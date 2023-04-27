import React from "react";
class Operation extends React.Component{
    constructor(props){
        super(props);
        this.state={
            result:"",
            mystyle:{},
            status:true
        }
    }
    Addition(){
        // alert("Clicked");
        var n1=Number(this.refs.num1.value);
        var n2=Number(this.refs.num2.value);
        var c=n1+n2;
        this.setState({result:"Addition="+c})
    }

    Substraction(){
        // alert("Clicked");
        var n1=Number(this.refs.num1.value);
        var n2=Number(this.refs.num2.value);
        var c=n1-n2;
        this.setState({result:"Substraction="+c})
    }
Calculate(){
    var n1=Number(this.refs.num1.value);
    var n2=Number(this.refs.num2.value);
    var n3=Number(this.refs.num3.value);
    var total=n1+n2+n3;
    var per=(total/3).toFixed(2);
    var res="Fail";
    var style={"color":"red"}
    if(per>=40){
        res="Pass";
        style={"color":"green"}
    }
    this.refs.total.value=total;
    this.refs.percentage.value=per;
    this.refs.result.value=res;
this.setState({mystyle:style})
}
    render(){
        return(
            <div>
                <h2>Arithmetic Operations</h2>
                <table>
                    <thead>

                    </thead>
                    <tbody>
                        <tr>
                            <td>Number 1:</td>
                            <td><input type="text" ref="num1" onChange={this.Calculate.bind(this)} /></td>
                        </tr>
                        <tr>
                            <td>Number 2:</td>
                            <td><input type="text" ref="num2"  onChange={this.Calculate.bind(this)}/></td>
                        </tr>
                        <tr>
                            <td>Number 3:</td>
                            <td><input type="text" ref="num3"  onChange={this.Calculate.bind(this)}/></td>
                        </tr>
                        <tr>
                            <td>Total:</td>
                            <td><input type="text" ref="total" disabled={this.state.status} /></td>
                        </tr>  <tr>
                            <td>Percentage:</td>
                            <td><input type="text" ref="percentage" disabled={this.state.status} /></td>
                        </tr>
                        <tr>
                            <td>Result:</td>
                            <td><input type="text" ref="result" disabled={this.state.status} style={this.state.mystyle} /></td>
                        </tr>
                        <tr>
                            <td colSpan="2">
                            <input type="button"  value="Add" onClick={this.Addition.bind(this)} />
                              &nbsp;
                                <input type="button"  value="Sub" onClick={this.Substraction.bind(this)} />
                            </td>
                        </tr>

                    </tbody>
                </table>
                <h2>{this.state.result}</h2>
            </div>
        )
    }
}
export default Operation;