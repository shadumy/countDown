import React, {Component} from 'react';

class Clock extends Component{
    constructor(props){
        super(props);
        this.state={
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        }
    }

    componentWillMount() {
        this.turnToDate(this.props.deadline);
      }
    
      componentDidMount() {
        setInterval(() => this.turnToDate(this.props.deadline), 1000);
      }

    
    turnToDate(timeSent){
        var timeDiff = Date.parse(this.props.deadLine) - Date.parse(new Date());
        var seconds = Math.floor((timeDiff/1000) %60);
        var minutes = Math.floor((timeDiff/1000/60) %60);
        var hours = Math.floor((timeDiff/1000/60/60) %24);
        var days = Math.floor((timeDiff/1000/60/60/24));
        this.setState({days,hours,minutes,seconds});
    }
    
    render(){
        return(
            <div>
                <p className="Hell2">อีก: {this.state.days} วัน , {this.state.hours} ชม. , {this.state.minutes} นาที , {this.state.seconds} วินาที </p>
            </div>
        )

    }
        
}

export default Clock;