import { Link } from "react-router-dom";

function Contact() {
  return (
    <div>
      <h1>Contact</h1>
      <Link to="/">Home</Link>
      <Link to="/sobre">Sobre</Link>
      <Link to="/contato">Contato</Link>
    </div>
  );
}

export default Contact;
