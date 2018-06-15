<template>
<div>
        <q-search class="q-pa-sm" v-model="search" color="white" />
    <!--  <q-search v-model="search" /> -->

    <div>
        <q-carousel style="min-height:400px !important;" quick-nav view="p" class="text-black text-center">
            <q-carousel-slide class="white" v-for="item in items">
              {{item.name}}
                {{ item.image }}
                <q-card inline class="q-ma-sm">
                    <q-card-media>
                        <img :src=item.image />
                        <q-card-title slot="overlay">
                            {{ item.name }}

                        </q-card-title>
                        <q-card-actions class="justify-center" slot="overlay">
                            <q-btn color="red" @click="$router.push('/app')" label="Recall" icon="blur_on" />
                        </q-card-actions>
                    </q-card-media>
                </q-card>
            </q-carousel-slide>

        </q-carousel>
    </div>
</div>
</template>

<script>
import CloseButton from './CloseButton'
import { loadRecalls} from './../decentral/decentral.js'

import {
    QBtn,
    QCarousel,
    QCarouselSlide,
    QCarouselControl,

    QSearch,
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardSeparator,
    QCardActions,
    QProgress



} from "quasar-framework/dist/quasar.ios.esm";


export default {
    name: 'MarketplaceBase',

    data: function() {
        return {
            search: "",
            recalls: []
        }
    },

    computed: {
        isOpened: function() {
            if (this.$store.state.opened_modal == 1) {
                return true
            } else {
                return false
            }
        },
        items:  function() {
          /*  if (this.$store.state.database) {
                var all = this.$store.state.database.query((doc) => doc.followers >= 0)
                return all;
            }*/

            return this.recalls
            /*
var recalls =   loadRecalls("0xc4521fe040288e94901ceb51545a63a1fb7b0de4");


console.log("-----")
if (recalls.length > 0){
  console.log(recalls[0])

}


console.log("-----")
            return  recalls*/

        }
    },

    created: async function() {

      this.recalls = await loadRecalls("0xc4521fe040288e94901ceb51545a63a1fb7b0de4");
console.log(this.recalls)



    },
    methods: {
        close: function() {
            console.log("clicked close")

            this.$store.commit('setModalsClose')
                //this.$emit('close');
        },
        LoadRecall: function() {
            console.log("clicked load recall")
        }
    },
    components: {
      QBtn,
      QCarousel,
      QCarouselSlide,
      QCarouselControl,

      QSearch,
      QCard,
      QCardTitle,
      QCardMain,
      QCardMedia,
      QCardSeparator,
      QCardActions,
      QProgress

    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-size: 3rem;
}

a {
    color: #42b983;
}
</style>
