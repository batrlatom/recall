<template>
<!-- Expandable -->
<q-page-sticky position="bottom" :offset="[0, 18]">
    <q-btn rounded packed flat color="red" icon="close" label="" @click="close" />


</q-page-sticky>
</template>

<script>
import {
    QBtn,

    QFab,
    QFabAction,
    QPageSticky


} from "quasar-framework/dist/quasar.mat.esm";


export default {
    name: 'CloseButton',
    methods: {
        close: function() {
            console.log("!!!!!!!!!!!!!!! clicked close")

            this.$store.commit('setModalsClose')
                //this.$emit('close');
        }
    },
    components: {
        QBtn,
        QFab,

        QPageSticky
    }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
