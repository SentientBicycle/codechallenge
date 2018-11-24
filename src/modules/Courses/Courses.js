import React, { Component } from "react";
import style from "./Courses.module.css";
import data from "./resources/Courses.json";
import { Link } from "react-router-dom";

class Courses extends Component {
    render() {
        return (
            <React.Fragment>
                {Object.keys(data).map((subjects, index) => {
                    return (
                        <section key={index}>
                            <h1 className={style.clear}>{subjects}</h1>
                            <div>
                                {data[subjects].map((classes, id) => {
                                    return (
                                        <Link
                                            key={id}
                                            to={`${
                                                classes[Object.keys(classes)].id
                                            }/${Object.keys(classes)}`}
                                        >
                                            <div
                                                className={style.card}
                                                key={id}
                                            >
                                                <p>{Object.keys(classes)}</p>
                                                <p>{`Class ID: ${
                                                    classes[
                                                        Object.keys(classes)
                                                    ].id
                                                }`}</p>
                                            </div>
                                        </Link>
                                    );
                                })}
                            </div>
                        </section>
                    );
                })}
            </React.Fragment>
        );
    }
}

export default Courses;
