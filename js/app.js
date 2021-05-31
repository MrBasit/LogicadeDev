// Home Nav
try {
    const headerNavToggle = document.querySelector('.portfolio-nav-toggle');
    const headerNav = document.querySelector('.main_nav');
    const headerLogo = document.querySelector('.main_nav .logo img');
    let navOpen = false;
    headerNavToggle.addEventListener('click', headerNavFunc);
    function headerNavFunc() {
        headerNav.classList.toggle('active');
        
        if (!navOpen) {
            navOpen = true;
            setTimeout(() => {
                headerLogo.src = './img/logo_color.png';
            }, 500);
        } else {
            navOpen = false;
            headerNav.classList.remove('stop');
            setTimeout(() => {
                headerLogo.src = './img/logo_color.png';
            }, 250);
        }
    }

} catch (err) {
    console.log(err);
}
// Header List ACCORDIANS
const porfolioListItemToggler = document.querySelectorAll('.porfolio_list_item');
const porfolioListItems = document.querySelectorAll('.porfolio_list_items');
porfolioListItemToggler.forEach(icon => {

    icon.addEventListener('click', (e) => {

        document.querySelector('.main_nav').classList.add('stop');

        if(!e.target.parentElement.classList.contains('active')){
            console.log('no');
            
            removeAllActiveClassesFrmPrflioItems();
        }

        e.target.parentElement.classList.toggle('active');
        e.target.parentElement.parentElement.parentElement.parentElement.classList.toggle('active');

        if (e.target.parentElement.classList.contains('active')) {
            console.log('yes');
            e.target.nextElementSibling.style.maxHeight = e.target.nextElementSibling.scrollHeight + 'px';
            minizeAllItems();
            e.target.parentElement.style.height = '100%';
            e.target.parentElement.style.opacity = 1;
            e.target.parentElement.style.pointerEvents = 'all'; 
        }
        else {
            e.target.nextElementSibling.style.maxHeight = 0;
            showAllItems();
        }
    });

});
function removeAllActiveClassesFrmPrflioItems(){
    porfolioListItemToggler.forEach(item => {
        item.parentElement.classList.remove('active');
    });
}

function showAllItems(){

    porfolioListItems.forEach(item => {
        item.style.height = 'auto'; 
        item.style.opacity = 1;       
        item.style.marginTop = 1.4 + 'rem';       
        item.style.pointerEvents = 'all';       
    });

}
function minizeAllItems(){
    porfolioListItems.forEach(item => {
        item.style.height = 0;       
        item.style.opacity = 0;    
        item.style.marginTop = 0 + 'rem';  
        item.style.pointerEvents = 'none';      
    });
}

function minizeHeight(){

    porfolioListItems.forEach(item => {

        if(item.classList.contains('active')){

            porfolioListItems.forEach(item => {
                if(item.classList.contains('active')){
                    
                    item.style.height = '100%';
                }else{
                    item.style.height = 0;
                }
            });
            return false;
        }else{
            porfolioListItems.forEach(item => {
                item.style.height = 'auto';              
            });
            return false;
        }
        
    });
}
// Mobile Porfolio List Toggler
let mobilePorfolioToggler = document.querySelector('.porfolio_btn');
let mobilePorfolioList = document.querySelector('.porfolio_list');
let mainList = document.querySelector('.header_list');

let mainMenu = document.querySelector('.main_nav');
mobilePorfolioToggler.addEventListener("click", openPortfolioList);
function openPortfolioList(){
    mainMenu.classList.toggle('open_porfolio');
    if (mainMenu.classList.contains('open_porfolio')) {
        mobilePorfolioList.style.maxHeight = mobilePorfolioList.scrollHeight + 'px';
        mainList.style.maxHeight = 0;
    }
    else {
        mainList.style.maxHeight = mobilePorfolioList.scrollHeight + 'px';
        mobilePorfolioList.style.maxHeight = 0;
    }
   
}

// MENU
let headerForMenu = document.querySelector('header');
let widthForMenu = headerForMenu.offsetWidth;
// let profolioSearchMain = document.querySelector('');
// let headerList = document.querySelector('');
// let porfolioListBtn = document.querySelector('');
// let searchBtn = document.querySelector('');


window.addEventListener("resize", checkWidthForMenu);

function checkWidthForMenu() {
  widthForMenu = headerForMenu.offsetWidth;
  setParamsForMenu(widthForMenu);
}

function setParamsForMenu(w) {
    console.log(w);
  
    // if (w < 551) {
    //     slidesPerPage = 1;
    // } else {
    //     if (w < 901) {
    //         slidesPerPage = 2;
    //     } else {
    //         if (w < 1101) {
    //             slidesPerPage = 3;
    //         } else {
    //             slidesPerPage = 3;
    //         }
    //     }
    // }

    // slider.style.marginLeft = currentMargin + '%';
    // if (currentPosition > 0) {
    //     buttons[0].classList.remove('inactive');
    // }
    // if (currentPosition < slidesCount) {
    //     buttons[1].classList.remove('inactive');
    // }
    // if (currentPosition >= slidesCount) {
    //     buttons[1].classList.add('inactive');
    // }
}

// SERVICES CARDS SLIDER
var container = document.querySelector('.services')
var slider = document.querySelector('.services-card');
var serviceCards = document.getElementsByClassName('services-inner-container').length;
var buttons = document.getElementsByClassName('services-prenext-btn');

var currentPosition = 0;
var currentMargin = 0;
var slidesPerPage = 0;
var slidesCount = serviceCards - slidesPerPage;
var containerWidth = container.offsetWidth;
var prevKeyActive = false;
var nextKeyActive = true;

window.addEventListener("resize", checkWidth);

function checkWidth() {
    containerWidth = container.offsetWidth;
    setParams(containerWidth);
}

function setParams(w) {
    if (w < 551) {
        slidesPerPage = 2;
    } else {
        if (w < 901) {
            slidesPerPage = 2;
        } else {
            if (w < 1101) {
                slidesPerPage = 3;
            } else {
                slidesPerPage = 3;
            }
        }
    }
    slidesCount = serviceCards - slidesPerPage;
    if (currentPosition > slidesCount) {
        currentPosition -= slidesPerPage;
    };
    currentMargin = - currentPosition * (100 / slidesPerPage);

    slider.style.marginLeft = currentMargin + '%';
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
    if (currentPosition >= slidesCount) {
        buttons[1].classList.add('inactive');
    }
}

setParams();

function slideRight() {
    if (currentPosition != 0) {
        slider.style.marginLeft = currentMargin + (100 / slidesPerPage) + '%';
        currentMargin += (100 / slidesPerPage);
        currentPosition--;
       
        
    };
    if (currentPosition === 0) {
        buttons[0].classList.add('inactive');
    }
    if (currentPosition < slidesCount) {
        buttons[1].classList.remove('inactive');
    }
};

function slideLeft() {
    if (currentPosition != slidesCount) {
        slider.style.marginLeft = currentMargin - (100  / slidesPerPage) + '%';
        currentMargin -= (100 / slidesPerPage);
        console.log( currentMargin);
        
        currentPosition++;
        console.log(currentPosition);
    };
    if (currentPosition == slidesCount) {
        buttons[1].classList.add('inactive');
    }
    if (currentPosition > 0) {
        buttons[0].classList.remove('inactive');
    }
};

// TEAM CARD SLIDER
var teamContainer = document.querySelector('.home_team')
var teamSlider = document.querySelector('.team_row');
var teamCards = document.getElementsByClassName('team_card').length;
var teamButtons = document.getElementsByClassName('teamCard-prenext-btn');

var teamCurrentPosition = 0;
var teamCurrentMargin = 0;
var teamSlidesPerPage = 0;
var teamSlidesCount = teamCards - teamSlidesPerPage;
var teamContainerWidth = teamContainer.offsetWidth;
var teamPrevKeyActive = false;
var teamNextKeyActive = true;

window.addEventListener("resize", checkWidthTeam);
function checkWidthTeam() {
    teamContainerWidth = teamContainer.offsetWidth;
    setParamsTeam(teamContainerWidth);
}
function setParamsTeam(w) {
    if (w < 551) {
        teamSlidesPerPage = 2;
    } else {
        if (w < 901) {
            teamSlidesPerPage = 2;
        } else {
            if (w < 1101) {
                teamSlidesPerPage = 3;
            } else {
                teamSlidesPerPage = 3;
            }
        }
    }
    teamSlidesCount = teamCards - teamSlidesPerPage;
    if (teamCurrentPosition > teamSlidesCount) {
        teamCurrentPosition -= teamSlidesPerPage;
    };
    teamCurrentMargin = - teamCurrentPosition * (100 / teamSlidesPerPage);
        console.log(teamCurrentMargin);
        
    teamSlider.style.marginLeft = teamCurrentMargin + '%';
    if (teamCurrentPosition > 0) {
        teamButtons[0].classList.remove('inactive');
    }
    if (teamCurrentPosition < teamSlidesCount) {
        teamButtons[1].classList.remove('inactive');
    }
    if (teamCurrentPosition >= teamSlidesCount) {
        teamButtons[1].classList.add('inactive');
    }
}
setParamsTeam();

function slideRightTeam() {
    if (teamCurrentPosition != 0) {
        teamSlider.style.marginLeft = teamCurrentMargin + (100 / teamSlidesPerPage) + '%';
        teamCurrentMargin += (100 / teamSlidesPerPage);
        teamCurrentPosition--; 
    };
    if (teamCurrentPosition === 0) {
        teamButtons[0].classList.add('inactive');
    }
    if (teamCurrentPosition < teamSlidesCount) {
        teamButtons[1].classList.remove('inactive');
    }
};

function slideLeftTeam() {
    if (teamCurrentPosition != teamSlidesCount) {
        teamSlider.style.marginLeft = teamCurrentMargin - (100  / teamSlidesPerPage) + '%';
        teamCurrentMargin -= (100 / teamSlidesPerPage);
        
        teamCurrentPosition++;
    };
    if (teamCurrentPosition == teamSlidesCount) {
        teamButtons[1].classList.add('inactive');
    }
    if (teamCurrentPosition > 0) {
        teamButtons[0].classList.remove('inactive');
    }
};

// HOME SCROLL SPY
document.addEventListener("DOMContentLoaded", () => {
    (function scrollSpy() {
     const targets = document.querySelectorAll(".home_sec"),
      options = {
       threshold: 0.3
      };
     // check if IntersectionObserver is supported
     if ("IntersectionObserver" in window) {
      (() => {
       const inView = target => {
        const interSecObs = new IntersectionObserver(entries => {
         entries.forEach(entry => {
          const elem = entry.target;
          let currentNav = document.querySelector(
           `.header_list .header_list_item a[href='#${elem.id}']`
          );
          entry.isIntersecting
           ? currentNav.classList.add("active")
           : currentNav.classList.remove("active");
         });
        }, options);
        interSecObs.observe(target);
       };
       targets.forEach(inView);
      })();
     }
    })();
});
   
// SMOOTH SCROLL
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.header_list .header_list_item a[href^="#"]');
    Array.from(links).forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            if (!link.classList.contains('active')) {
                links.forEach(link => link.classList.remove('active'));
                link.classList.add('active');
            }
            let targetId = link.getAttribute('href'),
                targetEl = document.querySelector(targetId),
                targetElTop = Math.floor(targetEl.getBoundingClientRect().top) - 130;
            window.scrollBy({
                top: targetElTop,
                behavior: 'smooth'
            });
            window.history.pushState('', '', targetId);
        });
    });
});
