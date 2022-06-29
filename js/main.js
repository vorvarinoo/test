
const burger = new justBurger({
  animationSpeed: 400,
  activeClass: 'custom-class',
  menuId: 'menuList',
  isOpen: (burger) => {
    document.getElementById('overlay').classList.add('open');
    
     
  },
  isClose: (burger) => {
    document.getElementById('overlay').classList.remove('open');
   
  }
});
const da=new DynamicAdapt("max");da.init();

 var mySwiper = new Swiper ('.reviews-slide', {
    // Optional parameters
    
    speed: 400,
    spaceBetween: 30,
    slidesPerView: 1,
    
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      type: 'progressbar',
      clickable: true,
   },
    
    navigation: {
      nextEl: '.swiper-next',
      prevEl: '.swiper-prev',
  },
    breakpoints: {
      321: {
            slidesPerView: 1,
      },

      640: {
            slidesPerView: 2,
      },

      769: {
            slidesPerView: 3,
      },
        
    },
  })

const scroll = new SmoothScroll('a[href^="#"]:not(a[href="#"])', {
  speed: 900,
  speedAsDuration: true,
  updateURL: false
});

let tabBlock = document.querySelectorAll(".info");

tabBlock.forEach((element)=>{

let tabsParent = element.querySelector(".info-tabs");
let tabs = element.querySelectorAll(".info-tabs__menu");
let tabsContent = element.querySelectorAll(".info-tabs__item");

tabHideContent();
tabShowContent();

tabsParent.addEventListener("click", function (e) {        
    if (e.target) {
      tabs.forEach((element, i) => {
        if (e.target == element) {
          tabHideContent();
          tabShowContent(i);
        }
      });
    }
  });

  function tabHideContent() {
    tabs.forEach((element) => {
      element.classList.remove("info-tabs__menu--active");
    });

    tabsContent.forEach((element) => {
      element.classList.remove("info-tabs__item--active");
    });
  }

  function tabShowContent(i = 0) {
    tabs[i].classList.add("info-tabs__menu--active");
    tabsContent[i].classList.add("info-tabs__item--active");
  }

});

//# sourceMappingURL=main.js.map
