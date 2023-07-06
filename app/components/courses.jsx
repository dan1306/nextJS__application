import React from "react";
import Link from "next/link";

async function fetchCourses() {
  const response = await fetch(`http://localhost:3000/api/courses`);
  const courses = await response.json();
  return courses;
}

const Courses = async () => {
    const courses = await fetchCourses()
    return <div className="courses">
        {
            courses.map((course) => (
                <div className="card" key={course.id}>
                    <h2>
                    {course.title}
                    </h2>
                    <small>
                        Lecel: {course.lvel}
                    </small>
                    <p>
                        {course.description}
                    </p>
                    <Link target="_blank" className="btn" href={course.link}>
                        Go To Course
                    </Link>
                </div>
            ) )
        }
    </div>;
};

export default Courses;
