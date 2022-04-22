import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from '../node_modules/basiclightbox/src/scripts/main.js';
// Change code below this line

const galleryRef = document.querySelector('.gallery');   

const galleryMarkup=galleryItems.map(elm=>{ 
     return `
        <a class="gallery__item" href="${elm.original}">
            <img class="gallery__image" src="${elm.preview}" alt="${elm.description}" />
        </a>
        `
}).join('');

galleryRef.insertAdjacentHTML('beforeend',galleryMarkup);    

new SimpleLightbox('.gallery a', { caption:true, captionSelector: 'img', captionsData:'alt', captionDelay:250});          //   
