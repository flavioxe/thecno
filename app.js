const vm = new Vue({
    el: "#app", 
    data: {
        produtos: []
    },
    methods: {
        // Método que vai puxar os produtos
        fetchProdutos() {
            fetch("./api/produtos.json")
                .then(r => r.json()) //transforma a resposta em json
                .then(r => { //coloca a resposta dentro dos produtos
                    this.produtos = r;
                })
        }
    }, 
    created() {
        this.fetchProdutos();
    }
})