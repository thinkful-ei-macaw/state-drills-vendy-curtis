import React, { Component } from "react";

export default class Accordion extends Component {
  // static defaultProps = {
  //     sections: [{
  //         title: 'Section 1',
  //         content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
  //       },
  //       {
  //         title: 'Section 2',
  //         content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!',
  //       },
  //       {
  //         title: 'Section 3',
  //         content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?',
  //       }]
  // }

  state = {
    index: undefined
  };

  handleSectionExpand = index => {
    this.setState({ index: index });
  };

  render() {
    return (
      <ul>
        {this.props.sections === undefined ? (
          <li></li>
        ) : (
          this.props.sections.map((section, index) => (
            <li key={index}>
              <button onClick={() => this.handleSectionExpand(index)}>
                {section.title}
              </button>
              {this.state.index === index && <p>{section.content}</p>}
            </li>
          ))
        )}
      </ul>
    );
  }
}
