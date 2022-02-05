import React, { useState } from "react";
import { useDispatch } from "react-redux";
import shortid from "shortid";
import "./ContactForm.css";

//import { addContact } from "../../redux/contact/contact-actions";
import contactsOperations from "../../redux/contact/contact-operations";

export default function ContactForm() {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const nameInputId = shortid.generate();
  const numberInputId = shortid.generate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(contactsOperations.addContact(name, number));
    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className="Phonebook" onSubmit={handleSubmit}>
      <label htmlFor={nameInputId} className="Phonebook__label">
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
          id={nameInputId}
          placeholder="John Johnson"
        />
      </label>

      <label htmlFor={numberInputId} className="Phonebook__label">
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
          id={numberInputId}
          placeholder="320-320-320"
        />
      </label>
      <button className="Phonebook__button" type="submit">
        Add contact
      </button>
    </form>
  );
}
