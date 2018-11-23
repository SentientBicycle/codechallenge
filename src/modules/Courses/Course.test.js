import React from 'react';
import ReactDOM from 'react-dom';
import Course from './Course';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe("Course", () =>{

	const props = {
		"match":
			{
				"params": {
					"courseid": 22,
					"coursename": "Pre-algebra"
			}
		}
	}

	it('Renders properly', () => {
	  const course = shallow(<Course {...props}/>);
	  course.instance({ params: props.match.params});
	  	expect(course).toMatchSnapshot();
	});

});
