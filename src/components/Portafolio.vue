<template>
  <v-app>
    <v-main>
      <v-row class="containerqs">
        <v-col xs="12" sm="5" md="5" lg="3">
          <v-container class="izq-perfil">
            <div v-for="(p, i) in perfil" :key="i" class="perfil">
              <v-img src="../assets/img/perfil1.png" class="imgperfil"></v-img>
              <h1>{{ p.nombre }}</h1>
              <p>{{ p.edad }}</p>
              <p>{{ p.titulo }}</p>
              <h2>Mi Slack Tecnológico</h2>
              <div>
                <img
                  v-for="(image, i) in herramientas"
                  :src="image.imgSrc"
                  :key="i"
                  :width="image.ancho"
                  :alt="image.altext"
                />
              </div>
            </div>
            <v-row class="btngroup">
              <v-col class="fadeIn-1">
                <v-btn
                  href="https://www.linkedin.com/in/alealmonacid/" target="_blank"
                  block
                  x-large
                  dark
                  color="blue"
                  >Linkedin
                </v-btn>
              </v-col>
              <v-col class="fadeIn-2">
                <v-btn href="https://drive.google.com/file/d/1crVlp6iistI4iu5aApUZ7Nww_YJHy5y5/view?usp=sharing" target="_blank" block x-large dark color="teal"
                  >Mi CV</v-btn
                >
              </v-col>
              <v-col class="fadeIn-2">
                <v-btn href="https://blog.alejandroalmonacid.cl/" target="_blank" block x-large dark color="primary"
                  >Blog</v-btn
                >
              </v-col>
            </v-row>
          </v-container>
        </v-col>
        <v-col xs="12" sm="7" md="7" lg="9">
          <v-container>
            <v-card>
              <v-app-bar>
                <v-tabs v-model="tab">
                  <v-tab v-for="tab in tabs" :key="tab.name" exact>{{
                    tab.name
                  }}</v-tab>
                </v-tabs>
              </v-app-bar>
              <div class="der-perfil">
                <v-tabs-items v-model="tab">
                  <v-tab-item v-for="tab in tabs" :key="tab.id">
                    <v-card flat>
                      <v-card-text>
                        <component v-bind:is="tab.content"></component>
                      </v-card-text>
                    </v-card>
                  </v-tab-item>
                </v-tabs-items>
              </div>
            </v-card>
          </v-container>
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>
<script>
import Quiensoy from "./Quiensoy";
import Portafolio from "./Misproyectos";
import Trucos from "./CheatSheet";
import Contacto from "./Contacto";
export default {
  name: "SobreMi",
  components: {
    Quiensoy,
    Portafolio,
    Trucos,
    Contacto,
  },
  data: () => ({
    herramientas: [
      {
        imgSrc: "https://img.icons8.com/color/48/000000/html-5--v1.png",
        altext: "Logo HTML",
        ancho: "50px",
      },
      {
        imgSrc: "https://img.icons8.com/color/48/000000/css3.png",
        altext: "Logo CSS3",
        ancho: "50px",
      },
      {
        imgSrc: "https://img.icons8.com/color/48/000000/bootstrap.png",
        altext: "Logo Bootstrap",
        ancho: "50px",
      },
      {
        imgSrc: "https://img.icons8.com/color/48/000000/javascript.png",
        altext: "Logo Javascript",
        ancho: "50px",
      },
      {
        imgSrc: "https://img.icons8.com/color/48/000000/sass.png",
        altext: "Logo Sass",
        ancho: "50px",
      },
      {
        imgSrc: "https://img.icons8.com/color/48/000000/github.png",
        altext: "Logo Github",
        ancho: "50px",
      },
      {
        imgSrc: "https://img.icons8.com/color/48/000000/firebase.png",
        altext: "Logo Firebase",
        ancho: "50px",
      },
      {
        imgSrc: "https://img.icons8.com/color/48/000000/vue-js.png",
        altext: "Logo Bootstrap Vue",
        ancho: "50px",
      },
      {
        imgSrc: "https://bootstrap-vue.org/_nuxt/icons/icon_512x512.67aef2.png",
        altext: "Logo Bootstrap Vue",
        ancho: "50px",
      },
      {
        imgSrc: "https://iconape.com/wp-content/png_logo_vector/vuetify.png",
        altext: "Logo Vuetify",
        ancho: "50px",
      },
      {
        imgSrc: "https://img.icons8.com/color/48/000000/figma.png",
        altext: "Logo Figma",
        ancho: "50px",
      },
      {
        imgSrc: "https://img.icons8.com/color/48/000000/adobe-photoshop.png",
        altext: "Logo Photoshop",
        ancho: "50px",
      },
      {
        imgSrc: "https://img.icons8.com/color/48/000000/adobe-lightroom.png",
        altext: "Logo Lightroom",
        ancho: "50px",
      },
    ],
    perfil: [
      {
        nombre: "Alejandro Almonacid Erazo",
        ciduad: "Curicó",
        edad: "28 Años",
        titulo: "Técnico Programador y Desarrollador Front End",
        imgPerfil: "",
        contacto: [
          {
            whatsapp: "",
            email: "",
            linkedin: "",
            github: "",
            curriculum: "",
          },
        ],
      },
    ],
    tab: null,
    tabs: [
      { id: 1, name: "Quien Soy", content: "Quiensoy" },
      { id: 2, name: "Mi Portafolio", content: "Portafolio" },
      { id: 3, name: "Contacto", content: "Contacto" },
    ],
  }),
  mounted() {},
  methods: {
    contacto() {
      this.$swal({
        title: "<h2>Hablemos?</h2>",
        html:
          '<img src="https://pbs.twimg.com/profile_images/470979760789532672/G-tNcWgj_400x400.jpeg" width="100px"><br>' +
          "<h3>Solo debes seleccionar <b>una de estas 3 opciones</b></h3><br> " +
          '<a href="#"><img src="https://i.pinimg.com/originals/3b/78/47/3b7847675982776e5219e12a680ecd84.png" width="100px"></a> ' +
          '<a href="#"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png" width="100px"></a> ' +
          '<a href="#"><img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png" width="100px"></a> ',
        showCloseButton: true,
        focusConfirm: false,
        confirmButtonText: "Cerrar",
      });
    },
  },
};
</script>
<style scoped>
/*Animaciones*/

.fadeInDown {
  -webkit-animation-name: fadeInDown;
  animation-name: fadeInDown;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

@keyframes fadeInDown {
  0% {
    opacity: 0;
    -webkit-transform: translate3d(0, -100%, 0);
    transform: translate3d(0, -100%, 0);
  }

  100% {
    opacity: 1;
    -webkit-transform: none;
    transform: none;
  }
}

.fadeIn {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  animation-delay: 1s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeIn-1 {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  animation-delay: 2s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

.fadeIn-2 {
  -webkit-animation-name: fadeIn;
  animation-name: fadeIn;
  -webkit-animation-duration: 1s;
  animation-duration: 1s;
  animation-delay: 3s;
  -webkit-animation-fill-mode: both;
  animation-fill-mode: both;
}

@-webkit-keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

@keyframes fadeIn {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}

/*Fin Animaciones*/
.containerqs {
  margin: 2% 10% 2% 10%;
}
.perfil {
  padding: 5%;
  text-align: center;
}
.izq-perfil .imgperfil {
  border-radius: 50%;
  margin: 10%;
}
.terminal {
  background-color: rgb(50, 50, 65);
  height: 100%;
  color: #f2f2f2;
}
.izq-perfil {
  padding: 9%;
  border-radius: 15px;
  color: #020202;
  background-color: #f2f2f2;
  height: 100%;
  -webkit-box-shadow: 0px 0px 31px -7px rgba(133, 133, 133, 1);
  -moz-box-shadow: 0px 0px 31px -7px rgba(133, 133, 133, 1);
  box-shadow: 0px 0px 31px -7px rgba(133, 133, 133, 1);
}
.der-perfil {
  padding: 5%;
  -webkit-box-shadow: 0px 0px 31px -7px rgba(133, 133, 133, 1);
  -moz-box-shadow: 0px 0px 31px -7px rgba(133, 133, 133, 1);
  box-shadow: 0px 0px 31px -7px rgba(133, 133, 133, 1);
}

.terminal p {
  color: #f2f2f2;
}

.btngroup {
  margin-top: 5%;
}

h1 {
  color: #383838;
  font-size: 2rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 100;
}

p {
  font-size: 1rem;
  font-family: "Open Sans", sans-serif;
  font-weight: 700;
}
</style>
