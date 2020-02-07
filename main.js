let mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 1,
    loop:true,
    navigation: {
          nextEl: '.arrow',
      },


breakpoints: {
    530: {
      slidesPerView: 2
    }
  }
});

let menuButton = document.querySelector('.btn');
let menu = document.querySelector('.header');
menuButton.addEventListener('click', function(){
    console.log('rfjr')
    menuButton.classList.toggle('btn-active');
    menu.classList.toggle('header-active');
})