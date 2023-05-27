const home = {template: 
    
`<div class="container text-center">

    <h1 class="h2 pb-4">¿Listo para ir a comprar?</h1>

    <img src="img/home.png" class="imgSize1 p-3">





</div>`


, name: "Home" };

const lista = {template: `<view-lista></view-lista>`, name:"Lista_de_compras"};

const ofertas = {template: `<view-ofertas></view-ofertas>`, name:"Agregar_ofertas"};

const routes = [

{ path: '/', component: home},
{ path: '/view-lista', component: lista},
{ path: '/view-ofertas', component: ofertas}

];

const router = new VueRouter({


    routes


});





var app = new Vue({
    el: '#app',
    router
    
});


