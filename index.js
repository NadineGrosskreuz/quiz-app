import Card from "./Cards/cards.js";
import Footer from "./Footer/footer.js";

const cardElements = document.querySelectorAll('[data-js="card"]');

cardElements.forEach((cardElement) => {
  Card(cardElement);
});


const footerElement = document.querySelector('[data-js="footer"]');
const siteElement = document.querySelector('[data-js="site_elements"]');

  Footer(footerElement, siteElement);

