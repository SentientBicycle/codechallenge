import React, { Component } from 'react';
import style from '../../Courses.module.css';

class Student extends Component {


  render() {

    return (
    	<div className={`${style.card} ${this.props.student.active === true ? style['card-active'] : ''}`} onClick={(e) => this.props.addtocompare(`${this.props.student.id}`)}> 
    		<div className={style.row} >
	    		<h3>{this.props.student.first_name} {this.props.student.last_name}</h3>
	    		<p>Email: {this.props.student.email}</p>
	    		<p>Gender: {this.props.student.gender}</p>
	    		<p>Student ID: {this.props.student.id}</p>
    		</div>
    		<div className={`${style['upper-right']} ${this.props.student.active === true ? style.active : ''}`}>
    			<h2 className={style.check}>✔</h2>
    		</div>
    		<div className={`${style['bottom-right']} ${this.props.student.active === true ? style.active : ''}`}>
    			<h2 className={style.score}>{this.props.student.currentClassScore}</h2>
    		</div>
    	</div>
    );
  }
}

export default Student;
