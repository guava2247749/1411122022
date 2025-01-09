const { createApp } = Vue;

createApp({
    data() {
        return {
            IlustBD: []
        };
    },
    created() {
        fetch('/portfolioIlust-data')
            .then(response => response.json())
            .then(data => {
                this.IlustBD = data;
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }
}).mount('.portfolioIlust-data');
