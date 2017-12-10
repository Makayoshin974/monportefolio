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
const duration = 10000;
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

