const elBarBtn = document.querySelector('.js-bar-btn');
const elCloseBtn = document.querySelector('.js-close-btn');
const elHeaderInner = document.querySelector('.js-header-inner');
const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let flag;


elBarBtn.addEventListener('click', (evt) => {
  elHeaderInner.style.display = 'flex';
  setTimeout(() => {
    elHeaderInner.classList.toggle('move-nav'); 
  }, 10); 

});

elCloseBtn.addEventListener('click', (evt) => {
    elHeaderInner.classList.remove('move-nav');


    setTimeout(() => {
      elHeaderInner.style.display = 'none';
    }, 400); 
   
});

window.addEventListener('resize', (evt) => {
  if(screen.width >= 501) {
    elHeaderInner.style.display = 'flex';
  }else {
    elHeaderInner.style.display = 'none';
  }
});




// Contact page, check the input fields. 

const elContactForm = document.querySelector('.js-contact-form');

elContactForm.addEventListener('submit', (evt) => {
  flag = true;
  evt.preventDefault();

  // Filter the nodes to get only input fields 

  let childNode = Array.from(evt.target.childNodes).filter(item => {
    if(item.classList) {
      return item.classList.contains('contact__input');
    }
  });

  
  for (let i = 0; i < childNode.length; i++) {
    

        // Check the input has value or not 
        if((childNode[i].name === 'user_email' ? !regexEmail.test(childNode[i].value.trim()) : true) 
                                                  && 
        (childNode[i].value.trim().length === 0 || childNode[i].value.trim() === '') 
                                                  && 
                     !childNode[i].classList.contains('invalid-input')) {
                      
          // If it is empty then add massage to the screen.
          const errElement = document.createElement("span");
            
          errElement.classList.add('error-msg');
            
          errElement.textContent = 'This field is required';

          if(childNode[i].name === 'user_email') {
            errElement.textContent = "Email must be valid and required !";
          }
            
          childNode[i].after(errElement);
            
          childNode[i].classList.add('invalid-input');
    
          flag = false;
           
        }else if(childNode[i].value.trim().length > 0 || childNode[i].value.trim() !== '' && childNode[i].classList.contains('invalid-input')) {
                 
           // If input has value, then remove its invalid-input class. 
            childNode[i].classList.remove('invalid-input');
            childNode[i].nextElementSibling.classList.contains("error-msg") ? childNode[i].nextElementSibling.remove() : "";
      }


      if(childNode[i].classList.contains('invalid-input')) {
             
        flag = false;
      
      }
    




  }

// Check if all inputs are valid or not.

const elInputs = document.querySelectorAll('.contact__input');
  
elInputs.forEach(item => {

  if(item.classList.contains('invalid-input')) {
    
      flag = false;
  }

});
if(flag) {

  evt.currentTarget.submit();

}





});


// let checkEmail = childNode[i].name === 'user_email' ? regexEmail.test(childNode[i].value.trim()) : false;
        
