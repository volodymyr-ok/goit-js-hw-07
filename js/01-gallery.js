import { galleryItems } from "./gallery-items.js";
// Change code below this line
const getEl = (selector) => document.querySelector(selector);
const galleryEl = getEl(".gallery");

const galleryImages = galleryItems
  .map(({ original, preview, description }) => {
    return `<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`;
  })
  .join(" ");
galleryEl.insertAdjacentHTML("beforeend", galleryImages);

galleryEl.addEventListener("click", (event) => {
  event.preventDefault();
  const {
    nodeName,
    dataset: { source },
  } = event.target;

  if (nodeName !== "IMG") {
    return;
  }
  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`);

  instance.show();
});

galleryEl.addEventListener("keydown", ({ key }) => {
  if (key !== "Escape") {
    return;
  }
  getEl(".basicLightbox").remove(".basicLightbox--visible");
});
