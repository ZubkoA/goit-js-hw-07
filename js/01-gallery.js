import { galleryItems } from "./gallery-items.js";
// Change code below this line

const galleryWrapEl = document.querySelector(".gallery");
const cardsImg = creatImgCards(galleryItems);
galleryWrapEl.insertAdjacentHTML("beforeend", cardsImg);

galleryWrapEl.addEventListener("click", onImgContainerClick);
function creatImgCards(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `
      <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img
        class="gallery__image"
        src="${preview}"
        data-source="${original}"
        alt="${description}"
        />
        </a>
        </div>
        `;
    })
    .join("");
}

function onImgContainerClick(e) {
  e.preventDefault();

  const imgTarget = e.target.closest("a");

  if (!imgTarget) {
    return;
  }
  const closeModal = (e) => {
    if (e.code === "Escape") {
      instance.close();
    }
  };
  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" width="800" height="600">`,
    {
      onShow: (instance) => {
        window.addEventListener("keydown", closeModal);
      },
      onClose: (instance) => {
        window.removeEventListener("keydown", closeModal);
      },
    }
  );
  instance.show();
}
