gsap.registerPlugin(ScrollTrigger);
gsap.to("f-content-wrapper", {
scrollTrigger: {
 trigger: ".f-content-wrapper",
 start: "top top",
 scrub:2
},
opacity:1
});
