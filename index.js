import Card from "./Cards/cards.js";
const cardElements = document.querySelectorAll('[data-js="card"]');

cardElements.forEach((cardElement) => {
  Card(cardElement);
});
