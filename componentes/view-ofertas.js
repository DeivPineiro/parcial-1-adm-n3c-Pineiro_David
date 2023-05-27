Vue.component('view-ofertas', {

    data: function () {

        return {

            oferta: {
                marca: '',
                nombre: '',
                comercio: '',
                precio: '0',

            },

            lOfertas: [],
            vMar: true,
            vNom: true,
            vPre: true,
            vComer: true,
            cargarOfertas: {

                marca: '',
                nombre: '',
                comercio: '',
                precio: '0',


            },
            mostrar: false

        }
    },

    template: `
    
    <table class="table container back ">

    <thead>
      <tr>
        <th scope="col"></th>
        <th :class="vMar ? 'correcto' : 'incorrecto'" scope="col"> Ingrese Marca </th>
        <th :class="vNom ? 'correcto' : 'incorrecto'" scope="col"> Ingrese nombre </th>
        <th :class="vPre ? 'correcto' : 'incorrecto'" scope="col"> Ingrese precio </th>
        <th :class="vComer ? 'correcto' : 'incorrecto'" scope="col"> Ingrese comercio </th>

      </tr>
    </thead>
    <thead class = "pt-4">
      <tr>
        <th scope="col"> <button class="btn btn-outline-success" @click="agregarOferta"
            type="button">Ingresar oferta</button></th>

            <th scope="col"> <input v-model="oferta.marca" class="form-control me-3" type="search" placeholder="Marca"
            aria-label="marca"></th>
        <th scope="col"> <input v-model="oferta.nombre" class="form-control me-3" type="search" placeholder="Nombre"
            aria-label="oferta"></th>
        <th scope="col"> <input v-model="oferta.precio" class="form-control me-3" type="search" placeholder="Precio" aria-label="pre"></th>
        <th scope="col"> <input v-model="oferta.comercio" class="form-control me-3" type="search" placeholder="Comercio"
            aria-label="comercio"></th>

      </tr>
    </thead>
    <thead>
      <tr>
        <th scope="col"></th>
        <th scope="col">Marca</th>
        <th scope="col">Nombre</th>
        <th scope="col">Precio</th>
        <th scope="col">Comercio</th>
      </tr>
    </thead>

    
    <template v-if="lOfertas.length === 0">
      
    <p class = "m-3"> No hay ofertas ingresadas </p>
    
    </template>
    <template v-else>
    <tbody>
          <tr v-for="(oferta) in lOfertas" class="mb-3">

            <th scope="col"></th>
            <th scope="col">{{oferta.marca}}</th>
            <th scope="col">{{oferta.nombre}}</th>
            <th scope="col">{{oferta.precio}}</th>  
            <th scope="col">{{oferta.comercio}}</th>  
        
          
            </tr>
    </tbody>
    </template>  
   

    <tr>
    
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"></th>
    <th scope="col"><button class="btn btn-outline-success d-block m-3" @click="cargar" type="button"> Ofertas anteriores</button></th>
    <th scope="col"><button class="btn btn-outline-success d-block m-3" @click="guardar" type="button"> Guardar Ofertas</button></th>
    </tr>

    <template v-if="mostrar">
      <tbody>
   
      <tr>
      <th scope="col"></th>
      <th scope="col">Marca</th>
      <th scope="col">Nombre</th>
      <th scope="col">Precio</th>
      <th scope="col">Comercio</th>
    </tr>
 
            <tr v-for="(oferta) in cargarOfertas" class="mb-3">
              
              <th scope="col"></th>    
              <th scope="col">{{oferta.marca}}</th>
              <th scope="col">{{oferta.nombre}}</th>  
              <th scope="col">$ {{oferta.precio}}</th>  
              <th scope="col">{{oferta.comercio}}</th>  
            
              </tr>
      </tbody>
      </template>  

    </table>
    
    
    `,

    methods: {

        agregarOferta: function () {

            if (this.oferta.marca.length === 0) {

                this.vMar = false
                return

            }
            if (this.oferta.nombre.length === 0) {

                this.vNom = false
                return

            }
            if (this.oferta.precio.length === 0) {

                this.vPre = false
                return

            }
            if (this.oferta.comercio.length === 0) {

                this.vComer = false
                return

            }

            if (this.oferta.nombre.length !== 0 && this.oferta.precio.length !== 0 && this.oferta.comercio.length !== 0 && this.oferta.marca.length !== 0) {

                this.lOfertas.push({
                    marca: this.oferta.marca,
                    nombre: this.oferta.nombre,
                    precio: this.oferta.precio,
                    comercio: this.oferta.comercio

                })

                this.oferta.marca = ''
                this.oferta.nombre = ''
                this.oferta.precio = ''
                this.oferta.comercio = ''
                this.vMar = true
                this.vNom = true
                this.vPre = true
                this.vComer = true

            }

        },

        guardar: function () {

            localStorage.clear();
            localStorage.setItem("Lista_Oferta", JSON.stringify(this.lOfertas));
            
        },
        cargar: function () {
            
            this.cargarOfertas =  JSON.parse(localStorage.getItem("Lista_Oferta"))
         
            this.mostrar = true
            console.log(this.cargarOfertas)

        }

    }

})





