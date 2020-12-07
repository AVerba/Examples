//------------- tabs
const tabLinks = document.querySelectorAll(".tabs a");
const tabPanels = document.querySelectorAll(".tabs-panel");

for (let el of tabLinks) {
  el.addEventListener("click", e => {
    e.preventDefault();

    document.querySelector(".tabs li.active").classList.remove("active");
    document.querySelector(".tabs-panel.active").classList.remove("active");

    const parentListItem = el.parentElement;
    parentListItem.classList.add("active");
    const index = [...parentListItem.parentElement.children].indexOf(parentListItem);

    const panel = [...tabPanels].filter(el => el.getAttribute("data-index") == index);
    panel[0].classList.add("active");
    });
  }

  //-----acordion
  const accordions = document.getElementsByClassName('accordion__head');

  for ( const acc of accordions ) {
    acc.addEventListener('click', function() {
      const body = this.nextElementSibling;
      body.classList.toggle('open');
      const indication = this.querySelector('.state-indication');
      if ( indication.classList.contains('plus') ) {
        indication.classList.remove('plus');
        indication.classList.add('minus');
      } else if ( indication.classList.contains('minus') ) {
        indication.classList.remove('minus');
        indication.classList.add('plus');
      }
    } );
  }  


//---------------

//---------------burgerMenu
let header__burger = document.querySelector('.header__burger');
let header_menu = document.querySelector('.header__menu');
let back = document.querySelector('body');
let header__list = document.querySelector('.header__list');

header__burger.onclick = function(){
    header__burger.classList.toggle('active');
    header_menu.classList.toggle('active');
    back.classList.toggle('lock');
}

header__list.onclick = function () {
    header__list.classList.remove('active');
    back.classList.toggle('lock');
}

//----------Scroll
const menu = document.querySelector("header");

document.addEventListener("scroll", () => {

   if (document.documentElement.scrollTop > 0)
    menu.classList.add("header--scroll");
  else
    menu.classList.remove("header--scroll");

});

//---------


let headerMenu = document.getElementById("headerList");
let menuItems = headerMenu.getElementsByClassName("header__link");
console.log (menuItems);
for (var i = 0; i < menuItems.length; i++) {
  menuItems[i].addEventListener("click", function() {
    let current = document.getElementsByClassName(" active-link");
    current[0].className = current[0].className.replace(" active-link", "");
    this.className += " active-link";
    console.log (menuItems);
  });
}

//----
let swiper = new Swiper('.products__slider', {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
/*    autoplay: {
  delay: 10000,
  disableOnInteraction: false,
}, */
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
      nextEl: '.prod__next',
      prevEl: '.prod__prev',
    },
    zoom: {
      maxRatio: 5,
    }, 
    
    breakpoints: {
      480: {
        slidesPerView: 1,
        spaceBetween: 20
      },
      640: {
        slidesPerView: 2,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 3,
        spaceBetween: 40
      }
    }  
});

let reviewSlider = new Swiper('.review-container', {
  spaceBetween: 30,
  effect: 'fade',
  loop: true,
  autoplay: {
		delay: 3000,
		disableOnInteraction: false,
	},
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  navigation: {
    nextEl: '.next__button',
    prevEl: '.prev__button',
  },
});