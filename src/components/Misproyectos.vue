<template>
  <div>
    <v-row>
      <v-col v-for="(items, i) in items" :key="i" md="auto" lg="4">
        <v-card class="mx-auto" max-width="344">
          <v-img :src="items.src" height="200px"></v-img>

          <v-card-title>
            {{ items.nombre }}
          </v-card-title>

          <v-card-subtitle>
            proyecto para: <img :src="items.logo" height="25px" alt="" />
          </v-card-subtitle>

          <v-card-actions>
            <v-dialog transition="dialog-top-transition" max-width="600">
              <template v-slot:activator="{ on, attrs }">
                <v-btn color="orange lighten-2" text v-bind="attrs" v-on="on">
                  Leer más
                </v-btn>
              </template>
              <template v-slot:default="dialog">
                <v-card>
                  <v-toolbar color="secondary" dark>{{
                    items.nombre
                  }}</v-toolbar>
                  <v-card-text>
                    <h3 class="pa-5">{{ items.descripcion }}</h3>
                    <div class="text-center">
                      <p>Hecho con:</p>
                      <img
                        v-for="(img, i) in items.herramientas"
                        :key="i"
                        :src="img.lang"
                        alt=""
                      />
                    </div>
                  </v-card-text>
                  <v-card-actions class="justify-end">
                    <v-btn text :href="items.url" target="_blank"> Ver Proyecto</v-btn>
                    <v-btn text @click="dialog.value = false">Close</v-btn>
                  </v-card-actions>
                </v-card>
              </template>
            </v-dialog>
          </v-card-actions>

          <v-expand-transition>
            <div v-show="show">
              <v-divider></v-divider>
              <v-card-text>
                {{ items.descripcion }}
              </v-card-text>
            </div>
          </v-expand-transition>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
  name: "Portafolio",
  data() {
    return {
      show: false,
      items: [
        {
          nombre: "Ferreteria El Roble",
          logo: "http://alejandroalmonacid.cl/assets/img/ferreteriaelroble.png",
          src: "http://alejandroalmonacid.cl/assets/img/losrobles.png",
          descripcion:
            "Diseño e implementacion web Los Robles, proyecto presentado el año 2017 en la ciudad de Curicó",
          url:"http://ferreteriaelroble.cl/",
          herramientas: [
            { lang: "https://img.icons8.com/color/48/000000/html-5--v1.png" },
            { lang: "https://img.icons8.com/color/48/000000/css3.png" },
            { lang: "https://img.icons8.com/color/48/000000/bootstrap.png" },
            {
              lang:
                "https://img.icons8.com/color/48/000000/adobe-photoshop.png",
            },
          ],
        },
        {
          nombre: "OSP",
          logo: "http://alejandroalmonacid.cl/assets/img/logoosp.png",
          src: "http://alejandroalmonacid.cl/assets/img/osp.png",
          descripcion:
            "Diseño e implementacion web OSP, proyecto presentado el año 2018 en la ciudad de Rancagua",
          url:"https://osp.cl/",
          herramientas:[
              {lang:"http://alejandroalmonacid.cl/assets/img/icons8-wordpress-96.png"}, 
              {lang:"https://img.icons8.com/color/48/000000/adobe-photoshop.png"},       
            ]
        },
        
        {
          nombre: "GMETAL",
          logo: "http://alejandroalmonacid.cl/assets/img/logogmetal.png",
          src: "http://alejandroalmonacid.cl/assets/img/gmetal.png",
          descripcion:
            "Diseño e implementacion web Gmetal, proyecto presentado el año 2020 en la ciudad de Curicó",
          url:"https://gmetal.cl/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
              {lang:"https://img.icons8.com/color/48/000000/adobe-photoshop.png"},       
            ]
        },
        
        {
          nombre: "Transportes PeñayLillo",
          logo: "http://alejandroalmonacid.cl/assets/img/logopyl.png",
          src: "http://alejandroalmonacid.cl/assets/img/transportespyl.png",
          descripcion:
            "Diseño e implementacion web Transportes PeñayLillo, proyecto presentado el año 2020 en la ciudad de Curicó",
          url:"http://transportespyl.cl/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
              {lang:"https://img.icons8.com/color/48/000000/adobe-photoshop.png"},       
            ]
        },
        
        {
          nombre: "Comercializadora Aragon",
          logo: "http://alejandroalmonacid.cl/assets/img/logocomaragon.png",
          src: "http://alejandroalmonacid.cl/assets/img/comaragon.png",
          descripcion:
            "Diseño e implementacion web con tienda virtual para Comercializadora Aragón, proyecto presentado el año 2020 en la ciudad de Curicó",
          url:"https://comercializadoraaragon.cl/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
              {lang:"https://img.icons8.com/color/48/000000/adobe-photoshop.png"},       
              {lang:"http://alejandroalmonacid.cl/assets/img/icons8-wordpress-96.png"},       
              {lang:"http://alejandroalmonacid.cl/assets/img/icons8-woocommerce-96.png"},       
            ]
        },
        
        {
          nombre: "Delifesta",
          logo: "http://alejandroalmonacid.cl/assets/img/logodelifesta.png",
          src: "http://alejandroalmonacid.cl/assets/img/delifesta.png",
          descripcion:
            "Diseño e implementacion OnePage para Deli Festa, proyecto presentado el año 2019 en la ciudad de La Serena",
          url:"https://alealmonacid.github.io/web_delifesta/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
              {lang:"https://img.icons8.com/color/48/000000/adobe-photoshop.png"},       
            ]
        },
        
        {
          nombre: "Casa de las balatas",
          logo: "http://alejandroalmonacid.cl/assets/img/logocasadelasbalatas.png",
          src: "http://alejandroalmonacid.cl/assets/img/casadelasbalatas.png",
          descripcion:
            "Diseño e implementacion de tienda virtual para Casa de las balatas, proyecto presentado el año 2021 en la ciudad de Curicó",
          url:"https://casadelasbalatas.cl/",
          herramientas:[
               {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
              {lang:"https://img.icons8.com/color/48/000000/adobe-photoshop.png"},       
              {lang:"http://alejandroalmonacid.cl/assets/img/icons8-wordpress-96.png"},       
              {lang:"http://alejandroalmonacid.cl/assets/img/icons8-woocommerce-96.png"},     
            ]
        },
        
        {
          nombre: "Garfias y Asociados",
          logo: "http://alejandroalmonacid.cl/assets/img/logogarfias.png",
          src: "http://alejandroalmonacid.cl/assets/img/garfiasyasociados.png",
          descripcion:
            "Diseño e implementacion de sitio corporativo para Garfias y Asociados, proyecto presentado el año 2019 en la ciudad de Curicó",
          url:"https://garfiasyasociados.cl/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
              {lang:"https://img.icons8.com/color/48/000000/adobe-photoshop.png"},       
            ]
        },
        
        {
          nombre: "Escuela Henri Cetty de Molina",
          logo: "http://alejandroalmonacid.cl/assets/img/logohenry.png",
          src: "http://alejandroalmonacid.cl/assets/img/henrycetti.png",
          descripcion:
            "Diseño e implementacion de sitio para Escuela Henri Cetty de Molina, proyecto presentado el año 2020 en la ciudad de Molina",
          url:"https://alealmonacid.github.io/web_escuelahenricetty/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
              {lang:"https://img.icons8.com/color/48/000000/adobe-photoshop.png"},       
            ]
        },
        
        {
          nombre: "Meet & Cofee",
          logo: "http://alejandroalmonacid.cl/assets/img/DFLogo.png",
          src: "http://alejandroalmonacid.cl/assets/img/meet_coffee.png",
          descripcion:
            "El proyecto Meet & Cofee fue hecho en la unidad HTML y CSS Parte I del Bootcamp de Desafio Latam",
          url:"https://alealmonacid.github.io/meetcofee/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},    
            ]
        },
        
        {
          nombre: "IguanaPage",
          logo: "http://alejandroalmonacid.cl/assets/img/DFLogo.png",
          src: "http://alejandroalmonacid.cl/assets/img/iguana_page.png",
          descripcion:
            "El proyecto Iguana Page fue hecho en la unidad HTML y CSS Parte II del Bootcamp de Desafio Latam",
          url:"https://alealmonacid.github.io/Iguana-Page/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},   
            ]
        },
        
        {
          nombre: "Suricata",
          logo: "http://alejandroalmonacid.cl/assets/img/DFLogo.png",
          src: "http://alejandroalmonacid.cl/assets/img/suricata.png",
          descripcion:
            "El proyecto Suricata fue hecho en la Unidad Bootstrap Parte I del Bootcamp de Desafio Latam",
          url:"https://alealmonacid.github.io/Suricata/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
            ]
        },
         {
          nombre: "Cuppon",
          logo: "http://alejandroalmonacid.cl/assets/img/DFLogo.png",
          src: "http://alejandroalmonacid.cl/assets/img/cuppon.png",
          descripcion:
            "El proyecto Cuppon fue hecho en la unidad Bootstrap Parte II del Bootcamp de Desafio Latam",
          url:"https://alealmonacid.github.io/Cuppon/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
            ]
        },
         {
          nombre: "Ricomida",
          logo: "http://alejandroalmonacid.cl/assets/img/DFLogo.png",
          src: "http://alejandroalmonacid.cl/assets/img/osp.png",
          descripcion:
            "El proyecto Ricomida fue hecho en la Primera unidad HTML y CSS Parte IIdel Bootcamp de Desafio Latam",
          url:"https://alealmonacid.github.io/desarrollo/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
            ]
        },
         {
          nombre: "Trekk in",
          logo: "http://alejandroalmonacid.cl/assets/img/DFLogo.png",
          src: "http://alejandroalmonacid.cl/assets/img/trekkin.png",
          descripcion:
            "El proyecto trekkin fue hecho como prueba en la unidad SVG, transiciones y animaciones del Bootcamp de Desafio Latam",
          url:"https://alealmonacid.github.io/Trekkin/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},    
            ]
        },
         {
          nombre: "Prueba - Rick and Morty, Info de personajes",
          logo: "http://alejandroalmonacid.cl/assets/img/DFLogo.png",
          src: "http://alejandroalmonacid.cl/assets/img/rickandmorty.png",
          descripcion:
            "Info cargada desde una api al sitio web, El proyecto rickandmorty fue hecho como prueba en la unidad de Programación con Javascript Bootcamp de Desafio Latam",
          url:"https://alealmonacid.github.io/prueba_RM/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
              {lang:"https://img.icons8.com/color/48/000000/javascript.png"},       
            ]
        },
         {
          nombre: "Prueba - Pokedex",
          logo: "http://alejandroalmonacid.cl/assets/img/DFLogo.png",
          src: "http://alejandroalmonacid.cl/assets/img/pokeapi.png",
          descripcion:
            "info cargada desde una api al sitio web, El proyecto Jugando con una Pokédex fue hecho como prueba en la unidad de Programación con Javascript Bootcamp de Desafio Latam",
          url:"https://alealmonacid.github.io/Pokedex-API/",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
              {lang:"https://img.icons8.com/color/48/000000/javascript.png"},               ]
        },
         {
          nombre: "Prueba OttoKlaus",
          logo: "http://alejandroalmonacid.cl/assets/img/DFLogo.png",
          src: "http://alejandroalmonacid.cl/assets/img/ottoklaus.png",
          descripcion:
            "Prueba final de modulo Vue avanzado, cuya finalidad es hacer un mantenedor de juguetes con firestore y firebase hosting, su logueo es mediante credencial o inicio de sesión de Google",
          url:"https://github.com/alealmonacid/CRUD_Tienda-Vuejs-Firebase",
          herramientas:[
              {lang:"https://img.icons8.com/color/48/000000/html-5--v1.png"},
              {lang:"https://img.icons8.com/color/48/000000/css3.png"},
              {lang:"https://img.icons8.com/color/48/000000/bootstrap.png"},
              {lang:"https://img.icons8.com/color/48/000000/javascript.png"},  
              {lang:"https://img.icons8.com/color/48/000000/vue-js.png"},        
              {lang:"https://bootstrap-vue.org/_nuxt/icons/icon_512x512.67aef2.png"},  
              {lang:"https://img.icons8.com/color/48/000000/firebase.png"},  
              {lang:"https://img.icons8.com/color/48/000000/figma.png"},  
            ]
        },
         
        
      ],
    };
  },
};
</script>
<style scoped>
.informacion {
  position: absolute;
  bottom: 0;
}
.btnfull {
  width: 100%;
}
</style>