import React, { Component } from 'react';
import studentData from './resources/Students.json';
import Student from './components/Student/Student';
import StudentCompare from './components/Student/StudentCompare';
import CompareModal from './components/CompareModal/CompareModal';
import style from './Courses.module.css';
import { Button } from 'react-bootstrap';

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
    const filteredStudents = studentData.filter(student => {return this.hasCourse(student.Classes, courseid)});
    return filteredStudents.map(student => this.setCurrentCourse(student));
  }

  hasCourse = (courses, courseID) => {
    let hasClass = false;
    courses.forEach(course => {if (course.id === courseID) hasClass = true})
    return hasClass;
  }

  addToRemoveFromComparator = (studentID) => {
    const sid = parseInt(studentID);
    const newState = {...this.state};
    let indexOfStudent;
    const singleStudent = newState.students.filter((student, index) =>{if(student.id === sid){indexOfStudent = index;} return student.id === sid;})[0];
    const newCompare = this.alreadyContainsStudent(newState.comparing, sid) ? newState.comparing.filter(student => {return student.id !== sid}) : newState.comparing.concat(singleStudent);
    newState.students[indexOfStudent].active = !newState.students[indexOfStudent].active;
    newState.comparing = newCompare.sort((a,b)=>this.sortByLastName(a,b))
    this.setState(newState);
  }

  alreadyContainsStudent = (students, sid) => {
    let hasStudent = false;
    students.forEach(student =>{
      if(student.id === sid) {
        hasStudent = true;
      }
    });
    return hasStudent;
  }


  sortByLastName = (a, b) => {
    return a.last_name.toLowerCase().localeCompare(b.last_name.toLowerCase());
  }

  sortByScore = (a, b) => {
    return b.currentClassScore - a.currentClassScore;
  }

  setCurrentCourse = (student) => {
    const moddedStudent = {...student};
    moddedStudent.currentClass = parseInt(this.props.match.params.courseid);
    let courseScore;
    student.Classes.forEach(course => {if(course.id === parseInt(this.props.match.params.courseid)) courseScore = course.score });
    moddedStudent.currentClassScore = courseScore;
    return moddedStudent;
  }

  render() {
    return (
    	<React.Fragment>
        <section>
        <h1>{this.state.coursename}</h1>
          <div className={`${style.container} ${style['container-left']}`}>
            {this.state.students.map((student, index) => {
              return <Student 
                        key={index} 
                        addtocompare={this.addToRemoveFromComparator} 
                        student={student}
                        />
                    }
                )
            }
          </div>
        </section>
        <CompareModal coursename={this.state.coursename} students={this.state.comparing}/>
      </React.Fragment>
    );
  }
}

export default Course;
