import React from 'react'
import Course from './components/Course'

//I left at unit 1.c


export const Header = ({course}) => {
  return (
    <>
      <h1>{course.name}</h1>
    </>
  )
}

export const Part = ({name, exercise}) => {
  return (
    <>
      <p>{name} {exercise}</p>
    </>
  )
}

export const Content = ({course}) => {
  return (
    <>
    {course["parts"].map(part =>
      <Part key={part.id} name={part.name} exercise={part.exercises} />
      )}
    </>
  )
}

export const Total = ({course}) => {
  return (
    <>
      <p>Number of exercises {course["parts"][0].exercises + course["parts"][1].exercises + course["parts"][2].exercises}</p>
    </>
  )
}

const App = () => {
  const course = {
    name: "Half Stack application development",
    parts: [
      {
        name: "Fundamentals of React",
        exercises: 10,
        id: 1
      },
      {
        name: "Using props to pass data",
        exercises: 7,
        id: 2
      },
      {
        name: "State of a component",
        exercises: 14,
        id: 3
      }
    ]
    
  }
  return (
    <div>
      <Course course={course}/>
    </div>
  )
}

export default App