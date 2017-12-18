import React from 'react';
import {Component} from 'react';
import './App.css'
import Clock from './Clock'
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component{
    constructor(props){
        super(props);
        this.state={
            deadLine: "31 Dec 2017",
            newDeadLine: ""
        }
    }
    render(){
        return(
            <div className="abc">
                <div className="box">
                    <p className="Hell">นับถอยหลังสู่วันที่ {this.state.deadLine}</p>
                    <Clock 
                        deadLine = {this.state.deadLine}
                    />
                    <Form inline>
                        <FormControl placeholder="กรอกวันที่คุณต้องการ"
                        className="Form-box"
                        onChange={event=>this.setState({newDeadLine: event.target.value})}>
                        </FormControl>
                        <Button className="btn-success"
                        onClick={()=>this.setState({deadLine: this.state.newDeadLine})}>
                        กดเบาๆ
                        </Button>
                    </Form>
                    <p className="introduce">กรุณากรอกด้วยรูปแบบ 31 Dec 2020</p>
                </div>
            </div>    
        
        )
    }
}

export default App;