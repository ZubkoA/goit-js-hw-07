import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWrapEl = document.querySelector(".gallery");
const cardsImg = creatImgCards(galleryItems);
galleryWrapEl.insertAdjacentHTML("beforeend", cardsImg);

function creatImgCards(galleryItems) {
  return galleryItems
    .map(({ preview, original }) => {
      return `
      <div class="gallery__item">
    <a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="Image description" />
</a>
        </div>
        `;
    })
    .join("");
}
const galleryIMG = new SimpleLightbox(".gallery a");
console.log(galleryIMG);
