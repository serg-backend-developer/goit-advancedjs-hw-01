import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';


const gallery = document.querySelector('.gallery');

const markup = galleryItems
  .map(
    ({ description, preview, original }) => `
   <li class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img class="gallery__image" src="${preview}" alt="${description}" />
        </a>
      </li>`
  )
  .join('');

gallery.insertAdjacentHTML('afterbegin', markup);

new SimpleLightbox('.gallery__link', {
  captionsData: 'alt',
  captionDelay: 250,
  animationSpeed: 500,
});