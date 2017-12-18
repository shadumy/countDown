import React from 'react';
import {Component} from 'react';
import './App.css';
import Clock from './Clock'

class App extends Component {
    constructor(pros){
        super(pros);
        this.state={
            time: 0,
            resetTime: 0,
            nowTime: 0
        }
    }
    render(){
        return(
            <div className='whole'>
                <div className='box'>
                    <p>Stopwatch</p>
                    
                    <Clock 
                    now = {this.state.time}
                    />
                    <div className="btnele">
                        <button className='btn-success'
                        onClick={()=>{
                            this.setState({nowtime: Date.parse(new Date())});
                            this.setStete({time:this.state.nowTime});
                        }}
                        >Start</button>
                        <button className='btn-danger'
                        onClick={()=>this.setState({time: this.state.resetTime})}
                        >Reset</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default App;