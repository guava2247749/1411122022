const {createApp,ref}  = Vue;

/*
createApp({
    data() {
        return{
            GifBD:[
                {imageUrl:'images/portfolioCF/GIF_0001.gif',alt:"GIF_0001",heading:"BONK!!",text:"日常被現實打擊"},
                {imageUrl:'images/portfolioCF/GIF_0002.gif',alt:"GIF_0002",heading:"燕東夏生賀圖",text:"誰能想到禮物裡面有變態"},
                {imageUrl:'images/portfolioCF/GIF_0003.gif',alt:"GIF_0003",heading:"芙露爾生賀圖",text:"芙芙超卡哇"},
                {imageUrl:'images/portfolioCF/GIF_0004.gif',alt:"GIF_0004",heading:"薯條控",text:"薯條夢女日常"},
                {imageUrl:'images/portfolioCF/GIF_0005.gif',alt:"GIF_0005",heading:"夢男物理",text:"偷吸別人的紙傘味..."},
                {imageUrl:'images/portfolioCF/GIF_0006.gif',alt:"GIF_0006",heading:"平行時空的行星熱戀",text:"不小心OOC了哈哈..."},
                {imageUrl:'images/portfolioCF/GIF_0007.gif',alt:"GIF_0007",heading:"飴村亂數生賀圖",text:"做這東西太累人了"},
            ]
        }
    }
}).mount("#WorkCF")
*/

createApp({
    data() {
        return{
            GifBD:[ ]
        };
    },
    mounted() {
        fetch("/portfolioGIF-data")
            .then((response) => {
                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                return response.json();
            })
            .then((data) => {
                console.log("Received data:", data); // 檢查返回資料
                this.GifBD = data; // 將資料分配給 GifBD
            })
            .catch((error) => {
                console.error("加載數據失敗:", error);
            });
    }
}).mount('.portfolioGIF-data');