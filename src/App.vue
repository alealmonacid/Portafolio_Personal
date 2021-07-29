<template>
  <v-app>
    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>
<style scoped>
 #app {     background-image: url("assets/img/fondomail.png"),linear-gradient(to bottom, #f2f2f2 50%, #020202 100%);
            background-blend-mode:overlay;
            background-color: #f2f2f2;
            background-size: 100vh;
            } 
</style>