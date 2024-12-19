window.addEventListener("scroll", () => {
  const carousel = document.getElementById("carousel"); // 選取輪播的區塊
  const scrollY = window.scrollY; // 取得目前的滾動距離（離頂部的距離）
  //因為是從頂端開始，所以會跟中間滾動事件取得的數值不同
  
  // 設定縮放與透明效果
  if (scrollY < 300) { // 當滾動距離小於 300px 時
    const scale = 1 - scrollY / 1000; // 縮放比例：隨滾動距離逐漸減少
    const opacity = 1 - scrollY / 300; // 透明度：隨滾動距離逐漸減少
  
    carousel.style.transform = `scale(${scale})`; // 更新縮放效果
    carousel.style.opacity = opacity; // 更新透明效果
  } else {
      // 當滾動距離超過 300px，固定效果
      //carousel.style.transform = `scale(0.7)`; // 固定縮小到 70%
      //carousel.style.opacity = 0.7; // 固定透明度為 70%
  }
});

window.addEventListener("scroll", () => {
  const carousel = document.getElementById("star"); // 選取輪播的區塊
  const boxPosition = animatedBox.getBoundingClientRect().top; // 取得元素與視窗頂部的距離
  const windowHeight = window.innerHeight; // 瀏覽器視窗的高度

  if (boxPosition < windowHeight - 600) { // 當元素距離視窗頂部小於一定值時
    animatedBox.style.transform = 'translateX(200) scale(2)'; // 從左到右，放大
    animatedBox.style.opacity = '1'; // 漸變為完全不透明
  }

});
