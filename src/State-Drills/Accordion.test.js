import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Accordion from './Accordion'
import sections from './Section'
describe(`Accordion Component`, () => {
 

  it('renders an empty li as expected w/o section props', () => {
    const wrapper = shallow(<Accordion />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('renders no sections as active by default', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    expect(toJson(wrapper)).toMatchSnapshot()
  })
  it('opens a clicked section', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    
    wrapper.find('button').at(1).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  
  })
  it('opens last section', () => {
    const wrapper = shallow(<Accordion sections={sections} />)
    wrapper.find('button').at(0).simulate('click')
    wrapper.find('button').at(1).simulate('click')
    wrapper.find('button').at(2).simulate('click')
    expect(toJson(wrapper)).toMatchSnapshot()
  
  })
})