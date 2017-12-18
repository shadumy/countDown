import React from 'react';
import {Component} from 'react';

class Clock extends Component{
    constructor(params){
        super(params);
        this.state={
            minutes: 0,
            seconds: 0
        }
    }


    componentWillMount() {
        this.calculate(Date.parse(new Date()));
      }
    
      componentDidMount() {
        setInterval(() => this.calculate(Date.parse(new Date())), 1000);
      }

    calculate(timesent){
        var time = (timesent - (this.props.now))/1000;
        console.log(Date.parse(new Date()));
        console.log(timesent);
        console.log(time);
        return time;
    }
    render(){
        
        

        return(
            <div><p>{this.props.now} seconds</p></div>
        )
    }
}

export default Clock;