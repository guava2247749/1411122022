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

gsap.from("#CONTACT",{
  scrollTrigger:{
    trigger: "#CONTACT",
    end: "top",
    scrub: 2, 
    markers: false
  },
  y:'+=200',
  opacity: 0,
  duration: 2
});

// 處理 分頁 效果
gsap.from("#AllWork",{
  scale: 0.8,
  opacity: 0,
  duration: 1
});


gsap.from("#animation",{
  scale: 0.8,
  opacity: 0,
  duration: 1
});

//處理 About_Me  效果
gsap.from("#About_Me",{
  scale: 0.8,
  opacity: 0,
  duration: 1
});