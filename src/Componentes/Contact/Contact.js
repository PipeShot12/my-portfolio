import "./contact.css";
import socialMedia from "./json";
export default function Contact() {
  return (
    <section id="contact" className="contact-section">
      <div className="lets">
        <h3>Let's work together...</h3>
        <p>How do you take your coffee?</p>
      </div>
      <div className="contact-container">
        {socialMedia.map((item) => {
          return (
            <a
              href={item.url}
              className="contacts"
              target="_blank"
              rel="noreferrer"
              key={item.title}
            >
              <i className={item.icon}></i>&nbsp;
              {item.title}
            </a>
          );
        })}
      </div>
    </section>
  );
}
