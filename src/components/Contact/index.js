import { FaLinkedin, FaGithub, FaEnvelope, FaPhoneAlt } from "react-icons/fa";

import "./index.css";

const Contact = () => (
  <div className="contact-container">
    <h1>Janardhanan</h1>
    <ul className="social-links">
      <li className="social-icons">
        <a href="https://www.linkedin.com/in/-janardhanan/" target="_blank">
          <FaLinkedin />
        </a>
      </li>
      <li className="social-icons">
        <a href="https://github.com/Jana1902" target="_blank">
          <FaGithub />
        </a>
      </li>
    </ul>
    <ul className="contact-list">
      <li>
        <FaEnvelope />
        jana7cr@gmail.com
      </li>
      <li>
        <FaPhoneAlt />
        +91 8148781902
      </li>
    </ul>
  </div>
);

export default Contact;
