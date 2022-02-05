import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Phonebook from "../components/Phonebook";
import { contactOperations } from "../redux/contact";

export default function ContactsView() {
  const dispatch = useDispatch();
  useEffect(() => dispatch(contactOperations.fetchContacts()), [dispatch]);
  return <Phonebook />;
}
