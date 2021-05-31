// HOME SHOWCASE SLIDER
const slides = document.querySelector('.sliders').children;
const allPrd = document.querySelector('.info').children;
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');
const indicator = document.querySelector('.indicator');
let index = 0;


prev.addEventListener('click', function () {
  prevSlide();
  // Call updateindicator Func
  updateCircleIndicator();
  // Call Reset Timer Func
  resetTimer();
})

next.addEventListener("click", function () {
  nextSlide();
  // Call updateindicator Func
  updateCircleIndicator();
  // Call Reset Timer Func
  resetTimer();
})

// Now Create Circle Indicators
function circleIndicator() {
  for (let i = 0; i < slides.length; i++) {
    const div = document.createElement('div');
    div.setAttribute('onclick', 'indicateSlide(this)');
    div.id = i;
    if (i == 0) {
      div.className = 'active';
    }
    indicator.appendChild(div);
    // i starting from 0
  }
}
// Call To circleIndicator() Func
circleIndicator();

// Click to Indicators indicatorSlide(this) Func
function indicateSlide(element) {
  // Change Index Value to Actual Circle
  index = element.id;

  // Call Change Slide Func
  changeSlides();

  // Call updateincidatorcircle Func
  updateCircleIndicator();

  // Call Reset Timer Func
  resetTimer();
}

// Update Circle Indicator func
function updateCircleIndicator() {

  for (let i = 0; i < indicator.children.length; i++) {
    // remove Class From All Circle Indicators
    indicator.children[i].classList.remove("active");
  }

  indicator.children[index].classList.add("active");
}


// Prev Slide Func
function prevSlide() {
  if (index == 0) {
    index = slides.length - 1;
  }
  else {
    index--;
  }
  // Call changeSlide
  changeSlides();
}

// Next Slide Func
function nextSlide() {
  if (index == slides.length - 1) {
    index = 0;
  }
  else {
    index++;
  }

  // Call changeSlide
  changeSlides();
}

function changeSlides() {
  // Remove Active Class From All Slides
  for (let i = 0; i < slides.length; i++) {
    slides[i].classList.remove('active');
    allPrd[i].classList.remove('active');
  }

  slides[index].classList.add('active');
  allPrd[index].classList.add('active');
}

// Reset Time Func ( Whem click to indicators or controls button )
function resetTimer() {
  // Stop Timer
  clearInterval(timer);

  // then started again timer
  timer = setInterval(autoPlay, 3000);
}

// Auto Play Func
function autoPlay() {
  // Call NextSlide Func
  nextSlide();
  // Call updateindicator Func
  updateCircleIndicator();
}

let timer = setInterval(autoPlay, 3000);

// PULSE SLIDER
let isSliding = false;
let slideControl = document.querySelector('.slide-control');
slideControl.addEventListener('mouseover', clearIntervalFunc);
slideControl.addEventListener('mouseout', setIntervalFunc);
slideControl.addEventListener('click', slide);

function clearIntervalFunc() {
  clearInterval(timer);
}

function setIntervalFunc() {
  timer = setInterval(autoPlay, 3000);
};

function slide() {

  if (isSliding) return
  // VARIABLES
  let listItems,
    slider,
    reverseItems;

  isSliding = true;
  if (index == 0) {
    // IMAGE SLIDE MOBILE
    listItems = document.querySelectorAll('.mobile_slide');
    slider = document.querySelector('.mobile_slider');
    console.log(listItems);
    reverseItems = Array.from(listItems).slice().reverse();
    console.log(reverseItems);
    

  } else if (index == 1) {
    // IMAGE SLIDE UI
    listItems = document.querySelectorAll('.ui_slide');
    slider = document.querySelector('.ui_slider');
    reverseItems = Array.from(listItems).slice().reverse();

  } else if (index == 2) {
    // IMAGE SLIDE ERP
    listItems = document.querySelectorAll('.erp_slide');
    slider = document.querySelector('.erp_slider');
    reverseItems = Array.from(listItems).slice().reverse();

  } else {
    // IMAGE SLIDE EB
    listItems = document.querySelectorAll('.web_slide');
    slider = document.querySelector('.web_slider');
    reverseItems = Array.from(listItems).slice().reverse();
  }


  top = reverseItems[0].offsetTop + 'px'
  left = reverseItems[0].offsetLeft + 'px'
  height = reverseItems[0].offsetHeight + 'px'
  width = reverseItems[0].offsetWidth + 'px'
  zIndex = reverseItems[0].style.zIndex;


  reverseItems.forEach((el, index) => {
    if (index < listItems.length - 1) {
      // console.log(listItems.length - 1);
      // console.log(reverseItems[index + 1]);

      el.style.top = reverseItems[index + 1].offsetTop + 'px'
      el.style.left = reverseItems[index + 1].offsetLeft + 'px'
      el.style.zIndex = reverseItems[index + 1].style.zIndex
      el.style.transform = 'unset'
      el.style.opacity = 1
    }
    if (index === listItems.length - 1) {
      el.style.transform = 'scale(1.2)'
      el.style.opacity = '0'

      let cln = el.cloneNode(true)

      setTimeout(() => {

        el.remove();

        cln.style.transform = 'scale(1)'
        cln.style.top = '-3rem'
        cln.style.left = left
        cln.style.opacity = '1'
        cln.style.zIndex = '2'


        slider.appendChild(cln)

        isSliding = false
      }, 1000);
    }
  });
}
// PRODUCT INFO BTNS
// const prdInfoBtns = document.querySelector('.product-info-btns');
// prdInfoBtns.addEventListener('mouseover', clearIntervalFunc);
// prdInfoBtns.addEventListener('mouseout', setIntervalFunc);

// HOME PAGE STUFF
try {
  // HEADER SCROLL
  document.addEventListener("scroll", () => {
    if (scrollY > 100) {
      document.querySelector("header").classList.add("header_shadow");

    }
    else {
      document.querySelector("header").classList.remove("header_shadow");
    }
  });
  // PORTFOLIO TABS
  let tabs = document.querySelector(".tabs");
  let tabHeader = tabs.querySelector(".tab-header");
  let tabBody = tabs.querySelector(".tab-body");
  let tabHeaderNodes = tabs.querySelectorAll(".tab-header > div");
  let tabBodyNodes = tabs.querySelectorAll(".tab-body > div");

  for (let i = 0; i < tabHeaderNodes.length; i++) {
    tabHeaderNodes[i].addEventListener("click", function () {
      tabHeader.querySelector(".active").classList.remove("active");
      tabHeaderNodes[i].classList.add("active");
      tabBody.querySelector(".active").classList.remove("active");
      tabBodyNodes[i].classList.add("active");
    });
  }
  // PORFOLIO CARD INFO
  let card = document.querySelectorAll(".product__card");
  let cardInfoBtn = tabs.querySelectorAll(".prd_info_toggle");

  for (let i = 0; i < cardInfoBtn.length; i++) {
    cardInfoBtn[i].addEventListener("click", function () {

      if (this.parentElement.parentElement.parentElement.classList.contains('open')) {
        removeActiveClass();
      } else {
        removeActiveClass();
        card[i].classList.add('open');
      }


    });
  }
  function removeActiveClass() {
    card.forEach(card => {
      card.classList.remove('open');
    });
  }
  // WORKING TECHNOLOGIES LIST
  const reqIdSelected = document.querySelector(".home_req .selected");
  const reqIdOptionsContainer = document.querySelector(".home_req .options-container");

  const reqIdOptionsList = document.querySelectorAll(".home_req .option");

  reqIdSelected.addEventListener("click", () => {
    reqIdOptionsContainer.classList.toggle("active");
  });

  reqIdOptionsList.forEach(o => {
    o.addEventListener("click", () => {
      reqIdSelected.innerHTML = o.querySelector("label").innerHTML;
      reqIdOptionsContainer.classList.remove("active");
    });
  });

} catch (err) {
  console.log(err);
}
