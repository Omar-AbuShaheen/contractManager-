import ContactItem from "./ContactItem";
import "../styles/List.css";

function ContactList({ contacts, deleteContact }) {
  if (contacts.length === 0) {
    return <h4 className="text-center mt-5">No contacts available. Add one!</h4>;
  }

  return (
    <div className="contact-list mt-5">
      <h4 className="mb-4">Contact List</h4>
      <div className="row">
        {contacts.map((contact, index) => (
          <div className="col-md-6" key={index}>
            <ContactItem
              index={index}
              contact={contact}
              deleteContact={deleteContact}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ContactList;
