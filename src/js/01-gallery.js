import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
const unorderedListElement = document.querySelector(".gallery");

galleryItems.forEach((item) => {
  const listEl = document.createElement("li");
  listEl.classList.add("gallery__item");
  listEl.innerHTML = `<a class="gallery__link" href="${item.original}">
    <img
      class="gallery__image"
      src="${item.preview}"
      alt="${item.description}"
    />
  </a>`;

  unorderedListElement.append(listEl);
});

let lightbox = new SimpleLightbox(".gallery a", {
  captionDelay: 250,
  captionsData: "alt",
  captionSelector: 'img',
});
