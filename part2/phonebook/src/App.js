import {useState, useEffect} from 'react';
import Content from './components/Content'
import axios from 'axios'

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');

  const hook = () => {
    console.log('effect');
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
      console.log('promise fulfilled');
      setPersons(response.data);
    })
  };

  useEffect(hook, []);

  const handleNameChange = (event) => {
    setNewName(event.target.value);
  }

  const handlePhoneChange = (event) => {
    setNewPhone(event.target.value);
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  }

  const addPerson = (event) => {
    event.preventDefault();
    const personObject = {
      name: newName,
      phone: newPhone
    }

    setNewName('');
    setNewPhone('');
    if (persons.filter(person => person.name === personObject.name).length > 0) {
      alert(`${personObject.name} is already added to phonebook`);
      return;
    }
    setPersons(persons.concat(personObject));
  }
  

  return (
 <div>
      <h2>Phonebook</h2>
      <form>
        <div>
          name: <input value={newName} onChange={handleNameChange}/>
        </div>
        <div>
          phone: <input value={newPhone} onChange={handlePhoneChange}/>
        </div>
        <div>
          <button onClick={addPerson} type="submit">add</button>
        </div>
      </form>
      <h3>Filter</h3>
      <div>
          names starting with: <input value={filter} onChange={handleFilterChange}/>
        </div>
      <h2>Numbers</h2>
      <Content persons={persons} filter={filter}/>
    </div>
  );
}


export default App;
