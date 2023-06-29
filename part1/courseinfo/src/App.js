import React from 'react'
import {Courses} from './components/Course'

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
      <b><p>Number of exercises {course["parts"].reduce((accumulator, part) => accumulator + part.exercises, 0)}</p></b>
    </>
  )
}

//{course["parts"][0].exercises + course["parts"][1].exercises + course["parts"][2].exercises}</p></b>

const App = () => {
  // const course = {
  //   name: "Half Stack application development",
  //   parts: [
  //     {
  //       name: "Fundamentals of React",
  //       exercises: 10,
  //       id: 1
  //     },
  //     {
  //       name: "Using props to pass data",
  //       exercises: 7,
  //       id: 2
  //     },
  //     {
  //       name: "State of a component",
  //       exercises: 14,
  //       id: 3
  //     },
  //     {
  //       name: "Echo test",
  //       exercises: 110,
  //       id: 4
  //     }
  //   ]
  // }

  const courses = [
    {
      name: 'Half Stack application development',
      id: 1,
      parts: [
        {
          name: 'Fundamentals of React',
          exercises: 10,
          id: 1
        },
        {
          name: 'Using props to pass data',
          exercises: 7,
          id: 2
        },
        {
          name: 'State of a component',
          exercises: 14,
          id: 3
        },
        {
          name: 'Redux',
          exercises: 11,
          id: 4
        }
      ]
    }, 
    {
      name: 'Node.js',
      id: 2,
      parts: [
        {
          name: 'Routing',
          exercises: 3,
          id: 1
        },
        {
          name: 'Middlewares',
          exercises: 7,
          id: 2
        }
      ]
    }
  ];
  return (
    <div>
      <Courses courses={courses}/>
    </div>
  )
}

export default App