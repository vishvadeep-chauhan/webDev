'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal')
const btnsOpenModal = document.querySelectorAll('.show-modal')

console.log(btnsOpenModal);
// --------------------------------------------
// 84. working with classes 
// ------------------------------------------------


// for(let i = 0; i < btnsOpenModal.length; i++ ){
//     btnsOpenModal[i].addEventListener('click', function(){
//         console.log("button clicked");
//         modal.classList.remove('hidden')
//         overlay.classList.remove('hidden')
//     })
// }

// btnCloseModal.addEventListener('click', function(){
//      modal.classList.add('hidden');
//      overlay.classList.add('hidden')

// })

const openModal = function(){
    modal.classList.remove('hidden');
    overlay.classList.remove('hidden');

}

const closeModal = function(){
    modal.classList.add('hidden');
    overlay.classList.add('hidden');

}

for(let i = 0; i < btnsOpenModal.length; i++){
    btnsOpenModal[i].addEventListener('click', openModal)
}
btnCloseModal.addEventListener('click', closeModal);



// ------------------------------------
// 85. Handling an "Esc" Keypress Event
// ------------------------------------------------

document.addEventListener('keydown', function(e) {
    // console.log(e)
    // console.log(e.key)

//      if (e.key === 'Escape') {
//     if (!modal.classList.contains('hidden')) {
//       closeModal();
//     }
//   }



    if(e.key === 'Escape' && !modal.classList.contains('hidden') ){
            closeModal();
    }
});

