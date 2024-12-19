window.addEventListener("scroll", () => {
  
  const scrollY = window.scrollY; // 滾動距離
  const windowHeight = window.innerHeight; // 瀏覽器視窗的高度
  //因為carousel是從頂端開始，所以會跟star取得的數值不同

  // 處理 carousel 效果
  const carousel = document.getElementById("carousel"); // 選取輪播的區塊
  // 設定縮放與透明效果
  if (scrollY < 300) { // 當滾動距離小於 300px 時
    const scale = 1 - scrollY / 1000; // 縮放比例：隨滾動距離逐漸減少
    const opacity = 1 - scrollY / 300; // 透明度：隨滾動距離逐漸減少
  
    carousel.style.transform = `scale(${scale})`; // 更新縮放效果
    carousel.style.opacity = opacity; // 更新透明效果
  } 


  // 處理 star 效果
  const star = document.getElementById("star");
  const boxPosition = star.getBoundingClientRect().top; // 取得元素與視窗頂部的距離

  if (boxPosition < windowHeight - 400 ) { // 當元素距離視窗頂部小於一定值時
    star.style.transform = 'translateX(130%) translateY(100%) scale(2)'; // 從左到右，放大
    star.style.opacity = '1'; // 漸變為完全不透明
  }else {
    // 當 star 超出視窗範圍（回到初始值）
    star.style.transform = 'translateX(-100%) translateY(-150%) scale(0.5)';
    star.style.opacity = '0';
  }

  //designer

  const designer = document.getElementById("designer");
  const boxPosition2 = designer.getBoundingClientRect().top;


});

