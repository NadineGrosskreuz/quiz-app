export default function Footer(footerElement, siteElement) {
const houseIcon = footerElement.querySelector('[data-js="house_icon"]')
const bookmarkIcon = footerElement.querySelector('[data-js="bookmark_icon"]')
const pageIcon = footerElement.querySelector('[data-js="page_icon"]')
const accountIcon = footerElement.querySelector('[data-js="account_icon"]')

const indexSite = siteElement.querySelector('[data-js="index_site"]')
const bookmarkSite = siteElement.querySelector('[data-js="bookmark_site"]')
const createSite = siteElement.querySelector('[data-js="create_site"]')
const profileSite = siteElement.querySelector('[data-js="profile_site"]')

houseIcon.addEventListener("click", () => {
  indexSite.classList.remove("hidden");
  bookmarkSite.classList.add("hidden");
  createSite.classList.add("hidden");
  profileSite.classList.add("hidden");
  });

  bookmarkIcon.addEventListener("click", () => {
    bookmarkSite.classList.remove("hidden");
    indexSite.classList.add("hidden");
    createSite.classList.add("hidden");
    profileSite.classList.add("hidden");
  });

  pageIcon.addEventListener("click", () => {
    bookmarkSite.classList.add("hidden");
    indexSite.classList.add("hidden");
    createSite.classList.remove("hidden");
    profileSite.classList.add("hidden");
  });

  accountIcon.addEventListener("click", () => {
    bookmarkSite.classList.add("hidden");
    indexSite.classList.add("hidden");
    createSite.classList.add("hidden");
    profileSite.classList.remove("hidden");
  });
}