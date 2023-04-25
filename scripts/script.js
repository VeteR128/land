const links = document.querySelectorAll(".header__link");

class scrollLink {
  constructor(links) {
    this._links = links;
  }
  setEventListeners() {
    for (let link of this._links) {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const id = link.getAttribute("href");
        this._scroll(id);
      });
    }
  }
  _scroll(id) {
    document
      .querySelector(id)
      .scrollIntoView({ behavior: "smooth", block: "start" });
  }
}

const scrollLinks = new scrollLink(links);
scrollLinks.setEventListeners();
