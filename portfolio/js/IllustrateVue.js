const {createApp,ref}  = Vue;

createApp({
    data() {
        return{
            portfoliojs:[
                {imageUrl:'images/portfolioCF/illustration_0001.jpg',alt:"illustration_0001",heading:"燕東夏生賀圖",text:"お誕生日おめでとう"},
                {imageUrl:'images/portfolioCF/illustration_0002.jpg',alt:"illustration_0002",heading:"表裏",text:"現實與虛假"},
                {imageUrl:'images/portfolioCF/illustration_0003.jpg',alt:"illustration_0003",heading:"2024萬聖節",text:"吸血鬼和魔女(男)二選一？"},
                {imageUrl:'images/portfolioCF/illustration_0004.jpg',alt:"illustration_0004",heading:"XXX生賀圖",text:"獻給朋友"},
                {imageUrl:'images/portfolioCF/illustration_0005.jpg',alt:"illustration_0005",heading:"紅心芭樂",text:"在現實與虛擬穿梭"},
                {imageUrl:'images/portfolioCF/illustration_0006.jpg',alt:"illustration_0006",heading:"鴆寶",text:"鴆寶我老婆嘿嘿嘿嘿嘿..."},
                {imageUrl:'images/portfolioCF/illustration_0007.jpg',alt:"illustration_0007",heading:"花心的女倫",text:"我也不想暈船啊但他叫我愚民欸..."},
                {imageUrl:'images/portfolioCF/illustration_0008.jpg',alt:"illustration_0008",heading:"IF飯屋集合？",text:"如果他們在西打出現..."},
                {imageUrl:'images/portfolioCF/illustration_0009.jpg',alt:"illustration_0009",heading:"ありがとう　またね",text:"獻給在2022/7/28畢業的黛灰"},

            ]
        }
    }
}).mount("#WorkCF")