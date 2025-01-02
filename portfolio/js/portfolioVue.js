const {createApp,ref}  = Vue;

createApp({
    data() {
        return{
            portfoliojs:[
                {imageUrl:'images/portfolioCF/illustration_title.jpg',Palt:"aillustration_title",Pheading:"繪圖",Ptext:"日常畫的小廢圖"},
                {imageUrl:'images/portfolioCF/animate_title.gif',Palt:"animate_title",Pheading:"小動畫",Ptext:"自製GIF循環動畫"},
                {imageUrl:'images/portfolioCF/illustration_title.jpg',Palt:"illustration_title",Pheading:"動畫",Ptext:"長篇動畫"}
            ]
        }
    }
}).mount("#PortfolioCF")