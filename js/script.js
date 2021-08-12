
const tl = gsap.timeline();

tl.from(".logo",{
  y: "-100%",
  opacity: 0,
  duration: .8
});
tl.from(".menu-items, .social-links-ul li",{
  y: "-100%",
  opacity: 0,
  duration: .8,
  stagger: {
    amount: .4
  }
},"-=.5");
tl.from(".c0",{
  y: "100%",
  opacity: 0,
  duration: .5,
  opacity: .8
},"-=.7");


var blocks = document.getElementsByClassName("container");
var content = document.getElementsByClassName("content");
var horizontal = new HorizontalScroll.default({
  blocks: blocks,
  container: content,
  isAnimated: true,
  springEffect: 5
})