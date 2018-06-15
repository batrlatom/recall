<template>
  <webcam v-touch-swipe.left="handleSwipe" ref="webcam" facingMode="environment" style="height:100%; width:100%"/>
</template>


<script>
//import webcam from './RearCameraComponent';
import webcam from './webcam';
import {
TouchSwipe
} from "quasar-framework/dist/quasar.ios.esm";



export default {
    name: 'SenseHub',
    data() {
        return {
            img: null,
            sensors: []
        };
    },
    directives: {
      TouchSwipe
    },
    methods: {
      handleSwipe ({ direction, duration, distance, evt }) {
        //this.info = { direction, duration, distance }
        // native Javascript event
        console.log("swipe")
        console.log(evt)
      },

        photo() {

console.log("making photo :)")
                var can = this.$refs.webcam.getCanvas();
                if (can != null) {
                    this.$store.commit("setImage", can);
                }
        }
    },


    created: function() {
        var obj = this;
        setInterval(function() {
          console.log("sense");

            obj.photo();

          /*  if (navigator.geolocation) {
                navigator.geolocation.getCurrentPosition(position => {
                    this.position = position.coords;
                    console.log(this.position)
                })
            }*/

        }, 1000)
    },
    components: {
        //RearCameraComponent
        webcam
    }
}
</script>
