const app = Vue.createApp({
    data() {
        return {
            showBooks: true,
            title: "The False Prince",
            author: "Jennifer A. Nielsen",
            published_date: "April 1, 2012",
            score: 0,
            x: 0,
            y: 0,
            characters: [
                {name: "Zhongli", element: "Geo", img_source: "assets/Zhongli.jpg", isDPS: false},
                {name: "Nahida", element: "Dendro", img_source: "assets/Nahida.jpg", isDPS: false},
                {name: "Yae Miko", element: "Electro", img_source: "assets/Yae Miko.jpg", isDPS: false},
                {name: "Al Haitham", element: "Dendro", img_source: "assets/Al Haitham.jpg", isDPS: true},
                
            ],
        }
    },
    methods: {
        changeTitle(bookTitle) {
            this.title = bookTitle
        },
        toggleBookDisplay(){
            this.showBooks = !this.showBooks
        },
        handleEvent(e, number){
            console.log(e.type)
            if(number){
                console.log(number)
            }
        },
        handleMouseChange(e){
            this.x = e.offsetX
            this.y = e.offsetY
        }
    },
    computed: {
        filteredCharacters(){
            return this.characters.filter((character) => character.isDPS)
        }
    }
})

app.mount("#app")