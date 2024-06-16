// animations
gsap.utils.toArray("h2, p:not(#response-msg):not(.copyright-p)").forEach((el) => {
    gsap.from(el, {
      duration: 1,
      opacity: 0,
      y: 50,
      stagger: 0.5,
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });
  
  gsap.from(".hero-button", { duration: 1, opacity: 0, delay: 0.5, stagger: 0.3 });
  
  gsap.from(".skills-div i", {
    duration: 1.5,
    opacity: 0,
    x: 50,
    stagger: 0.1,
    scrollTrigger: {
      trigger: ".skills-div i",
      start: "top 68%",
      end: "bottom 30%",
    },
  });