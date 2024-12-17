import "./index.css";

const contactDetails = [
  {
    id: 1,
    name: "Email",
    info: "contact@koushiksoftwaresolutions.in",
    image: "bi bi-envelope",
  },
  {
    id: 2,
    name: "Phone",
    info: "+91 6302787294",
    image: "bi bi-telephone",
  },
  {
    id: 3,
    name: "Location",
    info: "Visakhapatnam",
    image: "bi bi-geo-alt",
  },
];

const Contact = () => (
  <div className="contact-container" id="contact">
    <h1 className="contact-heading">Get in Touch</h1>
    <p className="contact-description">
      Let's discuss how we can help your business grow
    </p>
    <div className="contact-info">
      <form className="form-container shadow-lg">
        <div className="input-container">
          <label className="form-label" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            className="form-input shadow-sm"
            id="name"
            required
          />
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="email">
            Email
          </label>
          <input
            type="text"
            className="form-input shadow-sm"
            id="email"
            required
          />
        </div>
        <div className="input-container">
          <label className="form-label" htmlFor="message">
            Message
          </label>
          <textarea
            type="text"
            className="form-input shadow-sm"
            id="message"
            rows={3}
            required
          ></textarea>
        </div>
        <button type="submit" className="form-btn">
          Send Message
        </button>
      </form>
      <ul className="contact-details shadow-lg">
        {contactDetails.map((item) => (
          <li key={item.id} className="contact-item">
            <i className={item.image}></i>
            <div className="item-container">
              <h2 className="item-name">{item.name}</h2>
              <p className="item-info">{item.info}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  </div>
);

export default Contact;
