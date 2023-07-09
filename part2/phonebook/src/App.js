import {useState, useEffect} from 'react';
import Content from './components/Content'
import axios from 'axios'
import PersonServices from './services/PersonServices';

const App = () => {

  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState('');
  const [newPhone, setNewPhone] = useState('');
  const [filter, setFilter] = useState('');

  const hook = () => {
    axios
    .get('http://localhost:3001/persons')
    .then(response => {
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
      number: newPhone
    }

    setNewName('');
    setNewPhone('');
    if (persons.filter(person => person.name === personObject.name).length > 0) {
      alert(`${personObject.name} is already added to phonebook`);
      return;
    }

    PersonServices
    .create(personObject)
    .then(returnedObject => {
      setPersons(persons.concat(returnedObject));
    });
  }

  const handleDelete = (person) => {
    const result = window.confirm(`Delete ${person.name} from your phonebook?`);
    if (result) {
      PersonServices
      .remove(person.id)
      .then(() => {
        setPersons(persons.filter(pers => pers.id !== person.id))
        //setPersons(returnedObject)
      })
    }
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
      <Content persons={persons} filter={filter} handleDelete={handleDelete}/>
    </div>
  );
}


export default App;
