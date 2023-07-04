import React from 'react'

const Person = ({ person }) => {
  return (
    <li>{person.name} --- {person.phone}</li>
  )
}

const Content = (props) => {
  const numbers = props.persons;
  const filter = props.filter;
  return (
    <>
      {numbers.filter(number => number.name.toLowerCase().startsWith(filter.toLowerCase())).map(number =>
        <Person key={number.name} person={number}/>)}
    </>
  );
}

export default Content