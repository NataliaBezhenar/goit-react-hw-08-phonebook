import React, { useState } from "react";
import "./ContactForm.css";
import { useCreateConatctMutation } from "../../redux/contact/contactSlice";

export default function ContactForm() {
  const [createConatct] = useCreateConatctMutation();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    createConatct({ name, number });
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className="Phonebook" onSubmit={handleSubmit}>
      <label className="Phonebook__label">
        Name
        <input
          className="Phonebook__input"
          type="text"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          placeholder="John Johnson"
        />
      </label>

      <label className="Phonebook__label">
        Number
        <input
          className="Phonebook__input"
          type="tel"
          name="number"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
          placeholder="320-320-320"
        />
      </label>
      <button className="Phonebook__button" type="submit">
        Add contact
      </button>
    </form>
  );
}
