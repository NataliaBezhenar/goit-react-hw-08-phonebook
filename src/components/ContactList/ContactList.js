import { useSelector } from "react-redux";
import "./ContactList.css";
import {
  useDeleteContactMutation,
  useGetAllContactsQuery,
} from "../../redux/contact/contactSlice";

const ContactList = () => {
  let contacts = [];
  const { data, isSuccess } = useGetAllContactsQuery();
  if (isSuccess) {
    contacts = data;
  }

  const filter = useSelector((state) => state.filter);
  const filteredContacts = () => {
    return contacts.filter((contact) =>
      contact.name.toLowerCase().includes(filter)
    );
  };

  const [deleteContact] = useDeleteContactMutation();

  return (
    <ul className="ContactList">
      {filteredContacts().map(({ id, name, number }) => {
        return (
          <li className="ContactList__item" key={id}>
            {name}: {number}
            <button
              className="ContactList__button"
              onClick={() => deleteContact(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList;
