import "../styles/Item.css";

function ContactItem({ contact, index, deleteContact }) {
  return (
    <div className="contact-item card mb-3 shadow-sm">
      <div className="card-body">
        <div><strong>#{index + 1}</strong></div>
        <div><strong>Name:</strong> {contact.name}</div>
        <div><strong>Email:</strong> {contact.email}</div>
        <button
          onClick={() => deleteContact(index)}
          className="btn btn-danger btn-sm mt-3"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default ContactItem;
