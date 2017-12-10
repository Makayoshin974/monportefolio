



function clickSet() {
 circularnav.classList.toggle("closed")
 circularnav.classList.toggle("clicked");
 if (circularnav.classList.contains("closed")) {
    // freshly closed button
    var pseudoBefore = window.getComputedStyle(
      document.querySelector('.ss-icon'), ':before'
      ).animation
  }
}
// spin

var circularnav = document.getElementsByClassName("ss-icon")[0];
circularnav.addEventListener("click", clickSet, false);

circularnav.addEventListener("keydown", function (e) {
  if (e.keyCode === 13) {  
    clickSet();
  }
});

const wrapperEl = document.querySelector('.wrapper');
const numberOfEls = 70;
const duration = 8000;
const delay = duration / numberOfEls;

let tl = anime.timeline({
  duration: delay,
  complete: function() { tl.restart(); }
});

function createEl(i) {
  let el = document.createElement('div');
  const rotate = (360 / numberOfEls) * i;
  const translateY = -50;
  const hue = Math.round(360 / numberOfEls * i);
  el.classList.add('el');
  el.style.backgroundColor = 'hsl(' + hue + ', 40%, 60%)';
  el.style.transform = 'rotate(' + rotate + 'deg) translateY(' + translateY + '%)';
  tl.add({
    begin: function() {
      anime({
        targets: el,
        backgroundColor: ['hsl(' + hue + ', 40%, 60%)', 'hsl(' + hue + ', 60%, 80%)'],
        rotate: [rotate + 'deg', rotate + 10 +'deg'],
        translateY: [translateY + '%', translateY + 10 + '%'],
        scale: [1, 1.25],
        easing: 'easeInOutSine',
        direction: 'alternate',
        duration: duration * .1
      });
    }
  });
  wrapperEl.appendChild(el);
};

for (let i = 0; i < numberOfEls; i++) createEl(i);
  // TOAST......


iziToast.settings({
      timeout: false, // default timeout
      resetOnHover: true,
      // icon: '', // icon class
      transitionIn: 'flipInX',
      transitionOut: 'flipOutX',
      position: 'topRight', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter, center
      onOpen: function () {
        console.log('callback abriu!');
      },
      onClose: function () {
        console.log("callback fechou!");
      }
    });
let cfdt = document.getElementById('cfdt');
let gt = document.getElementById('git');
let cv = document.getElementById('cv');
let blog = document.getElementById('blog');

$('.customClick1').click(function () {


  iziToast.show({
    color: 'darkblue',
    messageSize:'20',
    titleSize:'30',
    titleColor:'orange',
    messageColor:'blue',
    backgroundColor:'white',
    transitionIn:'bounceInUp',
    icon: 'fa fa-dot-circle-o',
    title: 'Cliquez ',
    message: 'sur un bouton pour acceder a la page!',
        position: 'topCenter', // bottomRight, bottomLeft, topRight, topLeft, topCenter, bottomCenter
        progressBarColor: 'rgb(0, 255, 184)',
        buttons: [
        [ // cv
        "<button class='btn btn-default' id='cv'>Cv</button>",
        function (instance, toast) {
          iziToast.success({
            title: 'Patientez',
            position: 'topCenter',
            message: 'votre page arrive tout de suite!',
          });
          cv.click();
        }
        ],
        [//github
        "<button id='git'>Github</button>",
        function (instance, toast) {
          iziToast.success({
            title: 'Patientez',
            position: 'topCenter',
            message: 'votre page arrive tout de suite!',
          });
          gt.click(); 
        }
        ],
        [// cfdt
        "<button id='cfdt'>CFDT</button>",
        function (instance, toast) {
          iziToast.success({
            title: 'Patientez',
            position: 'topCenter',
            message: 'votre page arrive tout de suite!',
          });
          cfdt.click();
          
        }
        ],
        [// blog-bang
        "<button id='blog'>Blog</button>",
        function (instance, toast) {
          iziToast.success({
            title: 'Patientez',
            position: 'topCenter',
            message: 'votre page arrive tout de suite!',
          });
          blog.click();
        }
        ]
        ]

      });  

});

    //! .click()


