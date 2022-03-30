const bookmark = document.querySelector ('[data-js="bookmark"]')
const bookmarkActive = document.querySelector ('[data-js="bookmarkActive"]')

bookmark.addEventListener("click", () => {
    bookmark.classList.toggle("hidden");
    bookmarkActive.classList.toggle("hidden");
  });

  bookmarkActive.addEventListener("click", () => {
    bookmarkActive.classList.toggle("hidden");
    bookmark.classList.toggle("hidden");
  });

const button = document.querySelector ('[data-js="answer_button"]')
const answer = document.querySelector ('[data-js="answer"]')
const buttonHide = document.querySelector ('[data-js="answer_button_hide"]')

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
