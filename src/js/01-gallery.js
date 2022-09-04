import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox"
import "simplelightbox/dist/simple-lightbox.min.css"


const gallery = document.querySelector(`.gallery`);

function createGallery(images) {
  return images
    .map((item) => {
      return `
    <a class="gallery__item" href="${item.original}">
      <img
        class="gallery__image"
        src="${item.preview}"
        alt="${item.description}"/>
    </a>`;
    })
    .join("");
}
gallery.insertAdjacentHTML("beforeend", createGallery(galleryItems));
console.log(galleryItems);

 new SimpleLightbox ('.gallery a',{ captionsData: 'alt', captionDelay: 250 });