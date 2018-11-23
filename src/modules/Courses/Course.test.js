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


describe("Set Current Course", () =>{
	const props = {
		"match":
			{
				"params": {
					"courseid": 51,
					"coursename": "English I"
			}
		}
	}

	 
	it('adds the current course to student object', () => {
		const course = shallow(<Course {...props}/>);
		course.instance({ params: props.match.params});
		console.log(course);
		let student =   {
	       "Classes":  [
	          {
	           "id": 93,
	           "score": 92,
	         },
	          {
	           "id": 51,
	           "score": 12,
	         },
	          {
	           "id": 148,
	           "score": 93,
	         },
	          {
	           "id": 138,
	           "score": 80,
	         },
	       ],
	       "email": "jflanagano@yellowpages.com",
	       "first_name": "Jude",
	       "gender": "Male",
	       "id": 25,
	       "last_name": "Flanagan",
	     };
		expect(("currentClass" in student)).toBe(false);
		expect(("currentClassScore" in student)).toBe(false);
		student = course.instance().setCurrentCourse(student);
		expect(("currentClass" in student)).toBe(true);
		expect(("currentClassScore" in student)).toBe(true);
	});
});
