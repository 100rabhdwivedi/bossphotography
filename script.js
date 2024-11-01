function page1anime() {
  var t1 = gsap.timeline();

  t1.from("#nav img", {
    y: -50,
    opacity: 0,
    duration: 0.8,
    delay: 0.5,
  });
  t1.from(
    "#navright h3,#navright button ",
    {
      y: -50,
      opacity: 0,
      duration: 0.6,
      delay: 0.2,
      stagger: 0.3,
    },
    "na"
  );
  t1.from(
    "#navright i ",
    {
      y: -50,
      opacity: 0,
      duration: 0.6,
      delay: 0.1,
    },
    "na"
  );
  t1.from(
    "#page1-center-left  h1",
    {
      x: -300,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    },
    "a"
  );
  t1.from(
    "#page1-center-right  img",
    {
      x: 300,
      opacity: 0,
      duration: 0.8,
      delay: 0.2,
    },
    "a"
  );
  t1.from("#btns #btn1,#btn2", {
    y: -100,
    opacity: 0,
    duration: 1,
    delay: 0.2,
    stagger: 0.3,
  });
}
page1anime();

gsap.to("#nav", {
  backdropFilter: "blur(6px)",
  y: -10,
  scrollTrigger: {
    trigger: "#nav",
    scroller: "body",
    start: "top -18%",
    end: "top 100%",
  },
});

var t2 = gsap.timeline({
  scrollTrigger: {
    scroller: "body",
    trigger: "#page2",
    start: "top 70%",
    end: "top -60%",
  },
});
t2.to(
  ".marquee",
  {
    transform: "translateX(-1800px)",
    delay: 0.3,
    duration: 7,
    ease: "none",
    yoyo: true,
    repeat: -1,
  },
  "e"
);

t2.to(
  ".marquee img",
  {
    delay: 0.3,
    rotate: 180,
    yoyo: true,
    // repeat:-1
  },
  "e"
);
t2.from(".about",{
    opacity:0,
    duration:0.6,
    delay:0.6,
    x:-100,  

})
var t3 = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#page2",
      start: "top 35%",
      end: "top -60%",
    },
  });
t3.from("h1 .a ",{
    duration:1,
    delay:0.5,
    y:100,
    opacity:0,
    stagger:0.10,
},"animation")
t3.from("h1 .b ",{
    duration:1,
    y:-100,
    opacity:0,
    stagger:0.10,
},"animation")

t3.from("h1 .c",{
    duration:1,
    y:100,
    opacity:0,
    stagger:0.10,
},"animation")
t3.from("h2 span",{
    duration:0.4,
    opacity:0,
    stagger:0.05,
    delay:1.2
},"animation")
var t4 = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#show",
      start: "top 60%",
      end: "top 28%",
      scrub:1,
    },
  });
t4.from(
    "#show p",
    {
      x: -300,
      opacity: 0,
      duration: 0.4,
    },
    "sc"
  );
  t4.from(
    "#show-img  img",
    {   
        y:200,
        scale:0.6,
      opacity: 0,
      duration: 0.4,
    },
    "sc"
  );

  var t5 = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#page3",
      start: "top 20%",
      end: "top -150%",
      pin:true,
      scrub:2,
    },
  });
  t5.to(".photovideo",{
    transform:"translateX(-300%)",
    duration:2,
  })
  var t6 = gsap.timeline({
    scrollTrigger: {
      scroller: "body",
      trigger: "#page4",
      start: "top 20%",
      end: "top -150%",
      pin:true,
      scrub:2,
    },
  });
  t6.to("#collection",{
    transform:"translateX(-2500px)",
    duration:2,
  })