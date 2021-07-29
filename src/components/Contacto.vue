<template>
  <div>
    <v-row>
      <v-col cols="6"
        ><v-btn color="green" dark block x-large href=""
          >Hablemos por Whatsapp</v-btn
        ></v-col
      >
      <v-col cols="6"
        ><v-btn color="red" dark block x-large>
          Hablemos por Correo</v-btn
        ></v-col
      >
      <v-col cols="12">
        <div
          class="typeform-widget"
          data-url="https://form.typeform.com/to/O1v2DIs4?typeform-medium=embed-snippet"
          style="width: 100%; height: 500px"
        ></div>
      </v-col>
    </v-row>
  </div>
</template>
<script>
export default {
    setup() {
        
    },
    mounted(){
      (function() { var qs,js,q,s,d=document, gi=d.getElementById, ce=d.createElement, gt=d.getElementsByTagName, id="typef_orm", b="https://embed.typeform.com/"; if(!gi.call(d,id)) { js=ce.call(d,"script"); js.id=id; js.src=b+"embed.js"; q=gt.call(d,"script")[0]; q.parentNode.insertBefore(js,q) } })()
    }
}
</script>
<style scoped>
.bordeform{
    border-radius: 25px;
}
</style>