import React from 'react';
import ReactDOM from 'react-dom';
import Courses from './Courses'
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

describe("Courses", () =>{
	it('Renders properly', () => {
	  const course = shallow(<Courses/>);
	 // course.instance({ params: props.match.params});
	  expect(course).toMatchSnapshot();
	});
});
