import React , { useState }from "react";

import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";
import { contactService } from "../../services/contactService";
export const Contact = () => {
  const [showForm, setShowForm] = useState(false); // état pour afficher le formulaire
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await contactService.sendContact(formData);
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", message: "" });
      setShowForm(false);
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message. Please try again.");
    }
  };
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:rawiaghrairi@gmail.com">rawiaghrairi@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/rawya-ghrairi/">linkedin.com/rawya-ghrairi</a>
        </li>
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://www.github.com/rawia-ghrairi">github.com/rawia-ghrairi</a>
        </li>
        {/* Icône pour ouvrir le formulaire */}
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/comments.png")}
            alt="Message icon"
            onClick={() => setShowForm(!showForm)}
            style={{ cursor: "pointer" }}
          />
          <span>Opportunities welcome !</span>
        </li>
      </ul>
      {/* Formulaire toggle */}
      {showForm && (
        <form className={styles.messageForm} onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit">Send</button>
        </form>
      )}
    </footer>
  );
};
