import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";
import PropTypes from 'prop-types';

const Courses = ({handelSelect}) => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])



    return (
        <div className="grid grid-cols-2 gap-4">
            {/* <h1>Courses</h1> */}
            {
                courses.map(course => <Course key={course.id} course={course} handelSelect={handelSelect}></Course>)
            }
        </div>
    );
};

Courses.propTypes={
    handelSelect : PropTypes.func.isRequired
}

export default Courses;