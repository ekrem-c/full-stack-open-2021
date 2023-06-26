import React from 'react'
import {Header, Content, Total} from '../App'

const Course = (props) => {
  console.log(props);
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