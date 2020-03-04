import React, {Component} from 'react';


export default class HelloWorld extends React.Component {

    state = {
        who: 'World' 
    }

 





render(){
    return (

        <div className= "Hello-World">
            <p>Hello, {this.state.who}</p>

            <button onClick={() =>this.setState({who: 'Friend'})}>Friend</button>

            <button onClick={() =>this.setState({who: 'React'})}>React</button>

            <button onClick={() =>this.setState({who: 'World'})}>World</button>
        </div>
    )
}
}