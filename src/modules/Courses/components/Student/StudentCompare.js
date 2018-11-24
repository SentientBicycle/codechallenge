import React, { Component } from "react";
import style from "../../Courses.module.css";

class StudentCompare extends Component {
	render() {
		return (
			<div className={style["card-compare"]}>
				<div className={style["compare-content-left"]}>
					{this.props.student.first_name}{" "}
					{this.props.student.last_name}
				</div>
				<div className={style["compare-content-right"]}>
					{this.props.student.currentClassScore}
				</div>
			</div>
		);
	}
}

export default StudentCompare;
