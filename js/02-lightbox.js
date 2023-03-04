import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWrapEl = document.querySelector(".gallery");
const cardsImg = creatImgCards(galleryItems);
galleryWrapEl.insertAdjacentHTML("beforeend", cardsImg);

function creatImgCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>
        </div>
        `;
    })
    .join("");
}
const galleryIMG = new SimpleLightbox(".gallery a", {
  captionsData: "alt",
  captionDelay: 250,
});
console.log(galleryIMG);
