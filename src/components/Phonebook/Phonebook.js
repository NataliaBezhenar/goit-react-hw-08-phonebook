import { useSelector } from "react-redux";
import "./Phonebook.css";
import ContactForm from "../ContactForm";
import ContactList from "../ContactList";
import Filter from "../Filter";
import { contactSelectors } from "../../redux/contact";

export default function Phonebook() {
  const isLoadingContacts = useSelector(contactSelectors.getLoading);
  return (
    <div className="Phonebook__wrapper">
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts </h2>
      <Filter />
      <ContactList />
      {isLoadingContacts && <h1>Loading...</h1>}
    </div>
  );
}
