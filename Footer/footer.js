export default function Footer(footerElement, siteElement) {
const houseIcon = footerElement.querySelector('[data-js="house_icon"]')
const bookmarkIcon = footerElement.querySelector('[data-js="bookmark_icon"]')
const pageIcon = footerElement.querySelector('[data-js="page_icon"]')
const accountIcon = footerElement.querySelector('[data-js="account_icon"]')

const houseIconFilled = footerElement.querySelector('[data-js="house_icon_filled"]')
const bookmarkIconFilled = footerElement.querySelector('[data-js="bookmark_icon_filled"]')
const pageIconFilled = footerElement.querySelector('[data-js="page_icon_filled"]')
const accountIconFilled = footerElement.querySelector('[data-js="account_icon_filled"]')

const indexSite = siteElement.querySelector('[data-js="index_site"]')
const bookmarkSite = siteElement.querySelector('[data-js="bookmark_site"]')
const createSite = siteElement.querySelector('[data-js="create_site"]')
const profileSite = siteElement.querySelector('[data-js="profile_site"]')

houseIcon.addEventListener("click", () => {
  indexSite.classList.remove("hidden");
  bookmarkSite.classList.add("hidden");
  createSite.classList.add("hidden");
  profileSite.classList.add("hidden");

  houseIconFilled.classList.remove("hidden");
    houseIcon.classList.add("hidden");
    bookmarkIconFilled.classList.add("hidden");
    pageIconFilled.classList.add("hidden");
    accountIconFilled.classList.add("hidden");
    bookmarkIcon.classList.remove("hidden");
    pageIcon.classList.remove("hidden");
    accountIcon.classList.remove("hidden");
  });

  houseIconFilled.addEventListener("click", () => {
    indexSite.classList.remove("hidden");
    bookmarkSite.classList.add("hidden");
    createSite.classList.add("hidden");
    profileSite.classList.add("hidden");

    houseIconFilled.classList.remove("hidden");
      houseIcon.classList.add("hidden");
      bookmarkIconFilled.classList.add("hidden");
      pageIconFilled.classList.add("hidden");
      accountIconFilled.classList.add("hidden");
      bookmarkIcon.classList.remove("hidden");
      pageIcon.classList.remove("hidden");
      account.classList.remove("hidden");
    });

  bookmarkIcon.addEventListener("click", () => {
    bookmarkSite.classList.remove("hidden");
    indexSite.classList.add("hidden");
    createSite.classList.add("hidden");
    profileSite.classList.add("hidden");

    bookmarkIconFilled.classList.remove("hidden");
    bookmarkIcon.classList.add("hidden");
    houseIconFilled.classList.add("hidden");
    pageIconFilled.classList.add("hidden");
    accountIconFilled.classList.add("hidden");
    houseIcon.classList.remove("hidden");
    pageIcon.classList.remove("hidden");
    accountIcon.classList.remove("hidden");
  });

  pageIcon.addEventListener("click", () => {
    bookmarkSite.classList.add("hidden");
    indexSite.classList.add("hidden");
    createSite.classList.remove("hidden");
    profileSite.classList.add("hidden");

    pageIconFilled.classList.remove("hidden");
    pageIcon.classList.add("hidden");
    houseIconFilled.classList.add("hidden");
    bookmarkIconFilled.classList.add("hidden");
    accountIconFilled.classList.add("hidden");
    houseIcon.classList.remove("hidden");
    bookmarkIcon.classList.remove("hidden");
    accountIcon.classList.remove("hidden");
  });

  accountIcon.addEventListener("click", () => {
    bookmarkSite.classList.add("hidden");
    indexSite.classList.add("hidden");
    createSite.classList.add("hidden");
    profileSite.classList.remove("hidden");

    accountIconFilled.classList.remove("hidden");
    accountIcon.classList.add("hidden");
    houseIconFilled.classList.add("hidden");
    bookmarkIconFilled.classList.add("hidden");
    pageIconFilled.classList.add("hidden");
    houseIcon.classList.remove("hidden");
    bookmarkIcon.classList.remove("hidden");
    pageIcon.classList.remove("hidden");
  });
}