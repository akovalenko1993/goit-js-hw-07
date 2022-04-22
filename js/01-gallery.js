import { galleryItems } from './gallery-items.js';
// import * as basicLightbox from '../node_modules/basiclightbox/src/scripts/main.js';
// Change code below this line

 //  ===>  div.gallery SELECTED

const galleryRef = document.querySelector('.gallery');   

//        ===>  create gallery markup

const galleryMarkup=galleryItems.map(elm=>{     
return `
            <div class="gallery__item">
            <a class="gallery__link" href="${elm.original}">
              <img
                class="gallery__image"
                src="${elm.preview}"
                data-source="${elm.original}"
                alt="${elm.description}"
              />
            </a>
            </div>
        
        `
}).join('');

//      insert galleryMarkup
galleryRef.insertAdjacentHTML('beforeend',galleryMarkup);    



galleryRef  /*  <<<<===   DIV.GALLERY   */ .addEventListener('click', (e)=>{
  e.preventDefault();

if (e.target!==e.currentTarget){

  const instance = basicLightbox.create(
    `
    <img src="${e.target.dataset.source}" alt="${e.target.description}">
    `
  )
  
  instance.show();
  
  document.addEventListener('keydown',e=>{
    if (e.code==='Escape'){
      instance.close();
      }
    });
  };
});



