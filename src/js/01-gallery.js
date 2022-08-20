// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const galleryEl = document.querySelector(".gallery");

const renderGallery = (galleryItems) => {
   const result = galleryItems.map(({ description, original, preview }) =>
        `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`).join("");

    return result
}


const insertGalleryItems = (string) => {
  galleryEl.insertAdjacentHTML("beforeend", string);
};

insertGalleryItems(renderGallery(galleryItems))

let gallery = new SimpleLightbox('.gallery a', {
        captionDelay: 250,
        captionsData: "alt",
        
    });