import React , {Component} from 'react';
import sections from './section'





export default class Accordion extends Component {

    static defaultProps = {
        sections: []
    }

    state = {
        currentIndex: null
    }






handleSectionExpand = (index) => {
    
}










render(){
    return (
        <ul>
            <li>
                <button>Click</button>
                <p>{phrase}</p>
            </li>
            <button type="button" onClick={
             this.handleSectionExpand(this.currentIndex)}>Expand</button>
        </ul>


    )


}





}