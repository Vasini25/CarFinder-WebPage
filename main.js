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
        image: '\carTemplate.png',
        alt: 'Audi A4 cinza chumbo, mostrado à 45 graus.',
        carPage: "car.html",
        disponivel: true,
        quantidade: 2,
    }
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