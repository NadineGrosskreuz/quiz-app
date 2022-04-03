export default function Card(cardElement) {
const bookmark = cardElement.querySelector ('[data-js="bookmark"]')
const bookmarkActive = cardElement.querySelector ('[data-js="bookmarkActive"]')
const button = cardElement.querySelector ('[data-js="answer_button"]')
const answer = cardElement.querySelector ('[data-js="answer"]')
const buttonHide = cardElement.querySelector ('[data-js="answer_button_hide"]')


bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("hidden");
    bookmarkActive.classList.toggle("hidden");
  });

  bookmarkActive.addEventListener("click", () => {
    bookmarkActive.classList.toggle("hidden");
    bookmark.classList.toggle("hidden");
  });

button.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    button.classList.toggle("hidden");
    buttonHide.classList.toggle("hidden");
  });

  buttonHide.addEventListener("click", () => {
    answer.classList.toggle("hidden");
    button.classList.toggle("hidden");
    buttonHide.classList.toggle("hidden");
  });
}