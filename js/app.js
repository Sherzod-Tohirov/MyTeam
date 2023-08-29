const elBarBtn = document.querySelector('.js-bar-btn');
const elCloseBtn = document.querySelector('.js-close-btn');
const elHeaderInner = document.querySelector('.js-header-inner');

elBarBtn.addEventListener('click', (evt) => {
  elHeaderInner.classList.toggle('move-nav');  
});

elCloseBtn.addEventListener('click', (evt) => {
    elHeaderInner.classList.remove('move-nav');  
});