import React from 'react'
import {Header, Content, Total} from '../App'

export const Courses = (props) => {
  const courses = props.courses;
  return (
    <>
    {courses.map(course =>
      <Course key={course.id} course={course}/>
      )}
    </>
  )
}

const Course = (props) => {
  //console.log(props);
  const {course} = props;
  return (
    <div>
      <Header course={course}/>
      <Content course={course}/>
      <Total course={course} />
    </div>
  )
}

export default Course