// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

console.log(galleryItems);

import SimpleLightbox from "simplelightbox";

import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector(".gallery");

gallery.insertAdjacentHTML(
    "beforeend",
    galleryItems
      .map(
        ({ preview, original, description }) =>
          `         
            <a class="gallery__link"  href="${original}">
              <img
                class="gallery__image"
                src="${preview}"
                data-painting="${original}"
                alt="${description}"
              />
            </a>
          
          `
      )
      .join("")
);
  
// Simple-lightbox init.
const options = { captionsData: 'alt', captionDelay: 450 };

var lightbox = new SimpleLightbox('.gallery a', options);