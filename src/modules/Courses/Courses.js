import React, { Component } from 'react';
import style from './Courses.module.css';
import data from './resources/Courses.json'
import { Link } from 'react-router-dom';
import Course from './Course';

class Courses extends Component {



  render() {
    return (
    	<React.Fragment>
 		<Course/>
        {Object.keys(data).map((subjects, index)=> {
        	return <section key={index}>
        				<h1 className={style.clear}>{subjects}</h1>
        				<div>
        					{data[subjects].map((classes, id) => {
        						return <Link key={id} to={`course/${classes[Object.keys(classes)].id}`}>
	        								<div className={style.card} key={id}>
	        									<p>{Object.keys(classes)}</p>
	        									<p>{`Class ID: ${classes[Object.keys(classes)].id}`}</p>
	        								</div>
	        							</Link>
        					})}
        				</div>
        			</section>
        	})
    	}
      </React.Fragment>
    );
  }
}

export default Courses;
