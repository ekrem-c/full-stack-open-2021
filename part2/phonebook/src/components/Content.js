import React from 'react'

const Person = ({ person }) => {
  return (
    <li>{person.name}</li>
  )
}

const Content = (props) => {
  const numbers = props.persons;
  return (
    <>
      {numbers.map(number =>
        <Person key={number.name} person={number}/>)}
    </>
  );
}

export default Content