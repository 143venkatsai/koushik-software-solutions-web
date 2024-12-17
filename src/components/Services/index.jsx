import React from "react";

import "./index.css";

const servicesList = [
  {
    id: 1,
    title: "Web Development",
    description:
      "Custom websites that are fast, secure, and responsive across all devices.",
    image: "bi bi-globe",
  },
  {
    id: 2,
    title: "Mobile Apps",
    description:
      "Native and cross-platform mobile applications for iOS and Android.",
    image: "bi bi-phone",
  },
  {
    id: 3,
    title: "Custom Software",
    description:
      "Tailored software solutions to meet your specific business needs.",
    image: "bi bi-code",
  },
];

const Services = () => (
  <div className="services-container" id="services">
    <h1 className="services-heading">Our Services</h1>
    <p className="services-description">
      Comprehensive digital solutions for your business
    </p>
    <ul className="services-list">
      {servicesList.map((item) => (
        <li key={item.id} className="service-item">
          <button className="service-image">
            <i class={item.image}></i>
          </button>
          <h5 className="service-title">{item.title}</h5>
          <p className="service-details">{item.description}</p>
        </li>
      ))}
    </ul>
  </div>
);

export default Services;
