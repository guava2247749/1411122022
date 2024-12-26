// 處理 carousel 效果
gsap.to("#carousel",{
  scrollTrigger:{
      trigger: "#TOP",
      start: "200px",
      end: "400px",
      scrub: 3, 
      markers: false
  },
  scale: 0.7,
  opacity: 0.5,
  duration: 5
});

// 處理 star 效果
gsap.to("#star",{
  scrollTrigger:{
    trigger: "#Transition",
    start: "top 700px",
    end: "bottom 200",
    scrub: 2,
    markers: false
  },
  x:'190%',
  y:'+=1500',
  scale: 1.5,
  opacity:1,
});

// 處理 designer 效果
gsap.from("#designer",{
  scrollTrigger:{
      trigger: "#Transition",
      start: "center",
      end: "650px",
      scrub: 2, 
      markers: false
  },
  scale: 0.5,
  opacity: 0,
  duration: 3
});

// 處理 PORTFOLIO 效果
gsap.from("#PORTFOLIO",{
  scrollTrigger:{
    trigger: "#PORTFOLIO",
    end: "top",
    scrub: 2, 
    markers: false
  },
  y:'+=100',
  opacity: 0.3,
  duration: 2
});