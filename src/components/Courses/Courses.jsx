import { useEffect } from "react";
import { useState } from "react";
import Course from "../Course/Course";

const Courses = ({handelSelect}) => {

    const [courses, setCourses] = useState([]);

    useEffect(()=>{
        fetch('course.json')
        .then(res => res.json())
        .then(data => setCourses(data))
    }, [])



    return (
        <div className="grid grid-cols-3 gap-4">
            {/* <h1>Courses</h1> */}
            {
                courses.map(course => <Course key={course.id} course={course} handelSelect={handelSelect}></Course>)
            }
        </div>
    );
};

export default Courses;