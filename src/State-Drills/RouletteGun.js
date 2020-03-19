import React, { Component } from "react";


export default class RouletteGun extends React.Component {
    defaultProps={
        bulletInChamber:8
    }

    state={
        chamber: null,
        spinningTheChamber: false
    }

    generateRandomNumber = () => {
        return Math.ceil(Math.random() * 8);
    }

    handleClick = ()=>{
        this.setState({spinningTheChamber: true});
        this.timeout = setTimeout(() =>
            {this.setState({chamber: this.generateRandomNumber, spinningTheChamber: false})}, 2000)};

    //clean up the interval
    componentWillUnmount() {
        window.clearTimeout(this.timeout)
    }
    

    displayPhrase = ()=> {
        
          if(this.state.spinningTheChamber === true){
            return(
            <p>spinning the chamber and pulling the trigger!!</p>)
          } else if(this.state.chamber === this.props.bulletInChamber){
            return(
            <p>Bang!!</p>)
          } else {
            return(
            <p>You're Safe!</p>)
          } 
        };



    render(){
        return (
           <div className= "roullette">
               <p>{this.displayPhrase()}</p>
               <button onClick = {this.handleClick}>
                Pull The Trigger
               </button>
           </div> 
        )
    }


}
