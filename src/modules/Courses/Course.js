import React, { Component } from 'react';
import data from './resources/Students.json'

class Course extends Component {
  state = {
    courseid: 22
  }

  getStudents = () => {
    return data.filter(student => {return this.allConform(student.Classes, this.state.courseid)});
  }

  allConform = (courses, courseID) => {
    let hasClass = false;
    courses.foreach(course => {if (course.id === courseID) hasClass = true})
    return hasClass;
  } 

  render() {
    return (
    	<React.Fragment>

      </React.Fragment>
    );
  }
}

export default Course;
