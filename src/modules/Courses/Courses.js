import React, { Component } from 'react';
//import style from './Courses.module.css';
import data from './resources/Courses.json'


class Courses extends Component {



  render() {
  	console.log(data);
    return (
    	<React.Fragment>
        {Object.keys(data).map((subjects, index)=> {
        	return <div key={index}>
        				<h1>{subjects}</h1>
        				<ul>
        					{data[subjects].map((classes, id) => {
        						return <li key={id}>
        								{`${Object.keys(classes)}  Class ID: ${classes[Object.keys(classes)].id}`}
        								</li>
        					})}
        				</ul>
        			</div>
        	})
    	}
      </React.Fragment>
    );
  }
}

export default Courses;
