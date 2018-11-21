import React, { Component } from 'react';
import studentData from './resources/Students.json';
import Student from './components/Student/Student';
import StudentCompare from './components/Student/StudentCompare';
import style from './Courses.module.css';
class Course extends Component {
 

  constructor(props) {
    super(props);

    this.state = {
      courseid: parseInt(props.match.params.courseid),
      coursename: props.match.params.coursename,
      students: this.getStudents(parseInt(props.match.params.courseid)),
      comparing: []
    }

  }

  getStudents = (courseid) => {
    return studentData.filter(student => {return this.hasCourse(student.Classes, courseid)});
  }

  hasCourse = (courses, courseID) => {
    let hasClass = false;
    courses.forEach(course => {if (course.id === courseID) hasClass = true})
    return hasClass;
  }

  addToComparator = (studentID) => {
    const sid = parseInt(studentID);
    const newState = {...this.state};
    const compare = newState.comparing.filter(student => {return student.id !== sid}).concat(this.setCurrentCourse(newState.students.filter(student =>{return student.id === sid})));
    newState.comparing = compare.sort((a,b)=>this.sortByLastName(a,b))
    this.setState(newState);
  }

  removeFromComparator = (studentID) => {
    const sid = parseInt(studentID);
    const newState = {...this.state};
    const compare = newState.comparing.filter(student => {return student.id !== sid});
    newState.comparing = compare;
    this.setState(newState);
  }

  sortByLastName = (a, b) => {
    return a.last_name.toLowerCase().localeCompare(b.last_name.toLowerCase());
  }

  sortByScore = (a, b) => {
    return b.currentClassScore - a.currentClassScore;
  }

  setCurrentCourse = (student) => {
    const moddedStudent = {...student};
    moddedStudent[0].currentClass = this.state.courseid;
    let courseScore;
    student[0].Classes.forEach(course => {if(course.id === this.state.courseid) courseScore = course.score });
    moddedStudent[0].currentClassScore = courseScore;
    moddedStudent[0].active = true;
    return moddedStudent[0];
  }

  setCurrentCourseSource = (student) => {
    const moddedStudent = {...student};
    moddedStudent.currentClass = this.state.courseid;
    let courseScore;
    student.Classes.forEach(course => {if(course.id === this.state.courseid) courseScore = course.score });
    moddedStudent.currentClassScore = courseScore;
    return moddedStudent;
  }

  render() {
    return (
    	<React.Fragment>
        <section>
        <h1>{this.state.coursename}</h1>
          <div className={`${style.container} ${style['container-left']}`}>
            {this.state.students.map((student, index) => {return <Student key={index} addtocompare={this.addToComparator} student={this.setCurrentCourseSource(student)}/>})}
          </div>
        </section>
        <button className={style['compare-button']}>Compare Selected Students</button>
      </React.Fragment>
    );
  }
}

export default Course;
