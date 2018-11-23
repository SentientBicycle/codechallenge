import React from 'react';
import ReactDOM from 'react-dom';
import StudentCompare from './StudentCompare'
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

const props = {
	"student": {
		"first_name": "Chris",
		"last_name": "Goodwin",
		"currentClassScore": 55
	}
}

describe("StudentCompare", () =>{
	it('Renders properly', () => {
	  const course = shallow(<StudentCompare {...props}/>);
	  expect(course).toMatchSnapshot();
	});
});
