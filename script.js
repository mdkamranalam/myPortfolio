// typed.js 
let name = new Typed('.name', {
    strings: ["Md. Kamran Alam"],
    typeSpeed: 50,
});

let fswd = new Typed('.fswd', {
    strings: ["Full Stack Web Developer"],
    typeSpeed: 70,
});



// gsap 
gsap.to("#nav", {
    backgroundColor: "#000",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: "#nav",
        scroller: "body",
        // markers:true,
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    },
});

gsap.to("#hero", {
    backgroundColor: "#000",
    scrollTrigger: {
      trigger: "#main",
      scroller: "body",
      // markers: true,
      start: "top -25%",
      end: "top -70%",
      scrub: 2,
    },
  });
  
