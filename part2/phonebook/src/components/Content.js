import React from 'react'
import PersonServices from '../services/PersonServices';

const Person = ({ person, handleDelete }) => {
  const handle = () => {
    const message = `Delete ${person.name}?`;

    if (window.confirm(message)) {
      PersonServices.remove(person.id);
    }
  }
  return (
    <div>
    <li>{person.name} --- {person.number}</li> <button type="button" onClick={() => handleDelete(person)}>Delete</button>
    </div>
  )
}

const Content = (props) => {
  const numbers = props.persons;
  const filter = props.filter;
  const handleDelete = props.handleDelete;
  debugger;
  return (
    <>
      {numbers.filter(number => number.name.toLowerCase().startsWith(filter.toLowerCase())).map(number =>
        <Person key={number.id} person={number} handleDelete={handleDelete}/>)}
    </>
  );
}

export default Content