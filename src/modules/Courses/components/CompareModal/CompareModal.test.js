import React from 'react';
import ReactDOM from 'react-dom';
import CompareModal from './CompareModal';
import {shallow, configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });



describe("CompareModal", () =>{

	const props = {
		"coursename":"Math", 
		"students": [{
		"first_name": "Chris",
		"last_name": "Goodwin",
		"currentClassScore": 55
	},{
		"first_name": "Chris",
		"last_name": "Goodwin",
		"currentClassScore": 55
	},{
		"first_name": "Chris",
		"last_name": "Goodwin",
		"currentClassScore": 55
	},{
		"first_name": "Chris",
		"last_name": "Goodwin",
		"currentClassScore": 55
	},{
		"first_name": "Chris",
		"last_name": "Goodwin",
		"currentClassScore": 55
	}

		]
	}

	it('Renders properly', () => {
	  const cm = shallow(<CompareModal {...props}/>);
	  expect(cm).toMatchSnapshot();
	});

});
