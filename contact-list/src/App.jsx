import { useState } from "react";
import { Form } from "./components/Form";
import { PersonInfo } from "./components/PersonInfo";
import './App.css';
 
const initialPeople = [
  {
    name: "Błażej",
    number: 123456789,
    city: "Wrocław",
    id: crypto.randomUUID(),
  },
  {
    name: "Jan",
    number: 123456777,
    city: "Kraków",
    id: crypto.randomUUID(),
  },
  {
    name: "Piotr",
    number: 123456888,
    id: crypto.randomUUID(),
  },
];

function App() {
  const [isFormVisible, setFormVisible] = useState(false);
  const handleShowFormClick = () => setFormVisible(!isFormVisible);

  const [people, setPeople] = useState(initialPeople);

  const addPerson = (data) => {
    const newPeople = [...people, data];
    setPeople(newPeople);
  }

  return (  
    <>
      <h1>Lista kontaktów</h1>
      {isFormVisible ? (
        <Form onAddPerson={addPerson}/>
      ) : (
        <button onClick={handleShowFormClick}>Dodaj</button>
      )}
      <ul>
      {people.map((person) => (
        <PersonInfo
          key={person.id}
          name={person.name}
          number={person.number}
          city={person.city}
        />
      ))}
      </ul>
    </>
  );
}

export default App;
