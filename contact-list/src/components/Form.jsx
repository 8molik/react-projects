import { useState } from "react";
import './Form.css';

export const Form = ({onAddPerson}) => {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [city, setCity] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        const id = crypto.randomUUID();
        onAddPerson({ name, number, city, id});
      }}
    >
      <div>
        <input
          defaultValue={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
          type="text"
          name="name"
          placeholder="Imię"
        />
      </div>
      <div>
        <input
          defaultValue={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
          type="phoneNumber"
          name="number"
          placeholder="Telefon"
        />
      </div>
      <div>
        <input
          defaultValue={city}
          onChange={(e) => {
            setCity(e.target.value);
          }}
          type="text"
          name="city"
          placeholder="Miasto"
        />
      </div>
      <button disabled={name.length === 0 || number.length === 0}>Zapisz</button>
    </form>
  );
};
