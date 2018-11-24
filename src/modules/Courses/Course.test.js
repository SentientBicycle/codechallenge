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
		expect(("currentClass" in student)).toBeFalsy();
		expect(("currentClassScore" in student)).toBeFalsy();
		student = course.instance().setCurrentCourse(student);
		expect(("currentClass" in student)).toBeTruthy();
		expect(("currentClassScore" in student)).toBeTruthy();
	});
});

describe("already contains id", () =>{

	const props = {
		"match":
			{
				"params": {
					"courseid": 83,
					"coursename": "Drawing"
			}
		}
	}

	it("checks if the array of students already contains the student", () =>{
		const course = shallow(<Course {...props}/>);
		course.instance({ params: props.match.params});

		const students = [{
			id:0
		},{
			id:1
		},{
			id:2
		},{
			id:3
		},{
			id:4
		},{
			id:5
		},{
			id:6
		}];

		expect(course.instance().hasID(students, 0)).toBeTruthy();
		expect(course.instance().hasID(students, 3)).toBeTruthy();
		expect(course.instance().hasID(students, 6)).toBeTruthy();
		expect(course.instance().hasID(students, 26)).toBeFalsy();
		expect(course.instance().hasID(students, 435)).toBeFalsy();
		expect(course.instance().hasID(students, 42)).toBeFalsy();
	});
});

describe("Add to and remove from comparator", () =>{

	const props = {
		"match":
			{
				"params": {
					"courseid": 134,
					"coursename": "German"
			}
		}
	}

	it("Adds student with id to comparator array then removes it", () =>{
		const course = shallow(<Course {...props}/>);
		const instance = course.instance({ params: props.match.params});
		instance.addToRemoveFromComparator(865);
		expect(instance.state.comparing).toHaveLength(1);
		instance.addToRemoveFromComparator(865);
		expect(instance.state.comparing).toHaveLength(0);
	});

});
