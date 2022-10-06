import { galleryItems } from './gallery-items.js';
// Change code below this line
const getEl = selector => document.querySelector(selector);
const galleryEl = getEl('.gallery');

const galleryImages = galleryItems
  .map(
    ({ original, preview, description }) =>
      `<a class="gallery__item" href="${original}">
            <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>`,
  )
  .join(' ');

galleryEl.insertAdjacentHTML('beforeend', galleryImages);

const lightbox = new SimpleLightbox('.gallery a', {
  captionDelay: 250,
  captionsData: 'alt',
});
