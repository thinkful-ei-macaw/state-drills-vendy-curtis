import React, { Component } from "react";

export default class Bomb extends React.Component {

  state ={
    count: 0
  };
   
  componentDidMount(){
    this.interval = setInterval(this.timerIncrement, 1000)
  }

  timerIncrement = () => {
    return this.setState({count: this.state.count + 1});
  }
  
  displayPhrase = ()=> {
    const timer = this.state.count;
    if(timer >= 8){
      return(
      <p>BOOM!!</p>)
    } else if(timer % 2 === 0){
      return(
      <p>Tick</p>);
    } else if(timer % 2 !== 0){
      return(
      <p>Tock</p>);
    }
  };

  //clean up the interval
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  render() {
      
    return (
    <div>
      {this.displayPhrase()}
    </div>
    );
  }
}
