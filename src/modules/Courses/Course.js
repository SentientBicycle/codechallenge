import React, { Component } from 'react';
import data from './resources/Students.json'

class Course extends Component {
 

  constructor(props) {
    super(props);

    this.state = {
      courseid: parseInt(props.match.params.courseid),
      students: this.getStudents(parseInt(props.match.params.courseid)),
      comparing: []
    }

  }

  getStudents = (courseid) => {
    return data.filter(student => {return this.hasCourse(student.Classes, courseid)});
  }

  hasCourse = (courses, courseID) => {
    let hasClass = false;
    courses.forEach(course => {if (course.id === courseID) hasClass = true})
    return hasClass;
  }

  addToComparator = (studentID) => {
    console.log(this.state);
    const sid = parseInt(studentID);
    const newState = {...this.state};
    const compare = newState.comparing.filter(student => {return student.id !== sid}).concat(this.setCurrentCourse(newState.students.filter(student =>{return student.id === sid})));
    console.log(compare);
    newState.comparing = compare.sort((a, b) => {return b.currentClassScore - a.currentClassScore} )
    this.setState(newState);

  }

  setCurrentCourse = (student) => {
    const moddedStudent = {...student};
    moddedStudent[0].currentClass = this.state.courseid;
    let courseScore;
    student[0].Classes.forEach(course => {if(course.id === this.state.courseid) courseScore = course.score });
    moddedStudent[0].currentClassScore = courseScore;
    return moddedStudent[0];
  }

  render() {
    return (
    	<React.Fragment>
        <section>
          <div>
            {this.state.comparing.map((compare, index) => {return <div key={index} onClick={(e) => this.addToComparator(`${compare.id}`)}>{compare.first_name}</div>})}
          </div>
        </section>
        <section>
          {this.state.students.map((student, index) => {return <div key={index}><button onClick={(e) => this.addToComparator(`${student.id}`)}>{`${student.first_name} ${student.last_name}`}</button></div>})}
        </section>
      </React.Fragment>
    );
  }
}

export default Course;
