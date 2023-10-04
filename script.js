function loco(){
  gsap.registerPlugin(ScrollTrigger);
const locoScroll = new LocomotiveScroll({
  el: document.querySelector("#main"),
  smooth: true
});locoScroll.on("scroll", ScrollTrigger.update);ScrollTrigger.scrollerProxy("#main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
});ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}
loco();

gsap.to('#page>.page-video>video',{
  scrollTrigger:{
    trigger:`#page>.page-video>video`,
    start:`1% top`,
    end:`bottom top`,
    scroller:`#main`,
    scrub:2,
  },
  onStart:()=>{
    document.querySelector('#page>.page-video>video').play()
  }
});

gsap.to('#page',{
  scrollTrigger:{
    trigger:`#page`,
    start:`top top`,
    end:`bottom top`,
    scroller:`#main`,
    pin:true,
  }
})


gsap.to('.page-text',{
  scrollTrigger:{
    trigger:`#page`,
    start:`5% top`,
    end:`bottom top`,
    scroller:`#main`,
  },
  opacity:0
})

var tl=gsap.timeline({
  scrollTrigger:{
    trigger:`#page1`,
    start:`top top`,
    scrub:1,
    scroller:'#main',
    pin:true,
    duration:1,
  }
})

tl.to('#page1>h1',{
  top:`-50%`,
  scrub:2,
  yoyo: true,
})

var tl2=gsap.timeline({
  scrollTrigger:{
    trigger:`#page2`,
    start:`top top`,
    scrub:1,
    scroller:'#main',
    pin:true,
    duration:1,
  }
})

tl2.to('#page2>h1',{
  top:`20%`,
  scrub:2,
  yoyo: true,
})