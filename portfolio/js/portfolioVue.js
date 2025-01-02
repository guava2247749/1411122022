const {createApp,ref}  = Vue;

createApp({
    data() {
        return{
            portfoliojs:[
                {imageUrl:'images/portfolioCF/illustration_0001.jpg',Palt:"aillustration_title",Plink:"Illustration.html",Pheading:"繪圖",Ptext:"日常畫的小廢圖"},
                {imageUrl:'images/portfolioCF/GIF_0001.gif',Palt:"animate_title",Plink:"gif.html",Pheading:"小動畫",Ptext:"自製GIF循環動畫"},
                {imageUrl:'images/portfolioCF/animate_title.png',Palt:"illustration_title",Plink:"animate.html",Pheading:"動畫",Ptext:"長篇動畫"}
            ]
        }
    }
}).mount("#PortfolioCF")