var navbar = new Vue({
    el:'#navbar',
    data: {
        logomarca: '\logoSimplificada.png',
        alt: 'Logo CarFinder.',
        homePage: "HomePage.html"
    } 
})

var audiA4 = new Vue({
    el: '#audiA4',
    data: {
        modelo: 'Audi A4',
        ano: '2020',
        image: './carTemplate.png',
        alt: 'Audi A4 cinza chumbo, mostrado à 45 graus.',
        carPage: "car.html",
        disponivel: true,
        preço: 'R$ 300.000',
        quantidade: 7,
        detalhes: ["Direção hidráulica", "Freios ABS"],

        potencias: [
            {
                id: 1,
                cilindros: "V6",
                cilindradas: "1800 cilindradas",
            },
            {
                id: 2,
                cilindros: "V8",
                cilindradas: "2600 cilindradas",
            },
        ],

        pinturas: [
            {
                id: 1,
                cor: "CHUMBO",
                box: "black",
                foto: './carTemplate.png',
            },
            {
                id: 2,
                cor: "PRATA",
                box: "grey",
                foto: './carTemplate2.png',
            },
        ],
    },
    methods: {
        somaQtd() {
            this.quantidade++
        },

        subtraiQtd() {
            this.quantidade--
        },

        atualizaImg(foto) {
            this.image = foto
        },
    },
})

var toyotaSupra = new Vue({
    el: '#toyotaSupra',
    data: {
        modelo: 'Toyota Supra',
        ano: '2018',
        image: '\carTemplate2.png',
        alt: 'Toyota Supra.'
    }
})

document.getElementById("logo").addEventListener("click", safeExit);

function safeExit()
{

}