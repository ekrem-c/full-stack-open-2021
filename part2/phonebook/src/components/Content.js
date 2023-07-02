import React from 'react'


const Content = (props) => {
  const numbers = props.persons;
  return (
    <>
      {numbers.map(number =>
        <p>{number.name}</p>)}
    </>
  );
}

export default Content