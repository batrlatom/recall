<template>


   <!--
     This is where your pages will get
     injected into your Layout
   -->



      <q-carousel style="min-height:100% !important;" full-height quick-nav class="absolute-full text-black text-center">
          <q-carousel-slide  v-for="(item, i) in items">
          <h1>{{item.name}}</h1>
          <h3>{{item.subtitle}}</h3>
          <div v-if="i+1 == items.length" class="row justify-center">
            <h3><router-link :to="{ name: 'sensors', params: {} }">Go through the rabit hole</router-link></h3>
          </div>
      </q-carousel-slide>
</q-carousel>


</template>

<script>
import {


    QCarousel,
    QCarouselSlide

} from "quasar-framework/dist/quasar.ios.esm";


export default {
    name: 'WelcomeWizard',

    data: function() {
        return {
            search: "",
            isOpened: true,
            items: [{
                name: 'Recall',
                subtitle: 'your own magic',
                color: 'bg-green'
            }, {
                name: 'AI in your hands',
                subtitle: 'Use mobile to sense, memorize, learn and predict anything',
                color: 'bg-green'
            }, {
                name: 'Lets make it happen',
                subtitle: '',
                color: 'bg-blue'
            }]
        }
    },


    created: function() {
        console.log("wishes created")
    },
    methods: {
        close: function() {
            console.log("clicked close")

            this.$store.commit('setModalsClose')
                //this.$emit('close');
        }
    },
    components: {

        QCarousel,
        QCarouselSlide
    }

}
</script>

<style scoped>
h1 {
    font-size: 3rem;
}

h3 {
    font-size: 2rem;
}


a {
  font-size: 2rem;
    color: #42b983;
}
</style>
