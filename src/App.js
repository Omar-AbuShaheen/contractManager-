import { useState } from "react";
import ContactForm from "./components/ContactForm";
// import ContactList from "./components/ContactList";
import './App.css'; // Optional: You can create App-wide styles if you want

function App() {
  const [contacts, setContacts] = useState([]);

  const addContact = (contact) => {
    setContacts([...contacts, contact]);
  };

  const deleteContact = (index) => {
    const updatedContacts = contacts.filter((_, i) => i !== index);
    setContacts(updatedContacts);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center mb-4">📞 Contact Manager App</h1>
      <ContactForm addContact={addContact} />
      {/* <ContactList contacts={contacts} deleteContact={deleteContact} /> */}
    </div>
  );
}

export default App;
