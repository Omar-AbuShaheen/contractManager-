import { useState } from "react";
// import "../styles/Form.css";

function ContactForm({ addContact }) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (name.trim() === "" || email.trim() === "") {
      alert("Please fill in both name and email!");
      return;
    }

    addContact({ name, email });
    setName("");
    setEmail("");
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form card p-4 shadow-sm">
      <h4 className="mb-3">Add New Contact</h4>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className="mb-3">
        <input
          type="email"
          className="form-control"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-primary w-100">
        Add Contact
      </button>
    </form>
  );
}

export default ContactForm;
