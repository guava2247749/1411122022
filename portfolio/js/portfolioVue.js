const {createApp,ref}  = Vue;

createApp({
    data() {
        return{
            portfoliojs:[
                {Pimg:"illustration_title.jpg",Palt:"animate_title",Pheading:"繪圖",Ptext:"日常畫的小廢圖"},
                {Pimg:"animate_title.gif",Palt:"animate_title",Pheading:"小動畫",Ptext:"自製GIF循環動畫"},
                {Pimg:"illustration_title.jpg",Palt:"",Pheading:"動畫",Ptext:"長篇動畫"}
            ]
        }
    }
}).mount("#PortfolioCF")