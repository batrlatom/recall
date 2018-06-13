<template>
<!-- Expandable -->
    <q-page-sticky position="bottom-right" :offset="[18, 18]">
        <q-fab color="red" icon="blur_on" direction="up" push>
            <q-fab-action color="purple"  @click="clicked_sensors" icon="track_changes" />
            <q-fab-action color="purple"  @click="clicked_wishes" icon="card_giftcard" />
            <q-fab-action color="purple"   @click="clicked_recall" icon="public" />
        </q-fab>
    </q-page-sticky>
</template>

<script>
import {
    QBtn,
    QSlider,
    QFab,
    QFabAction,
    QPageSticky,
    QLayout,
    QModal

} from "quasar-framework/dist/quasar.ios.esm";


export default {
    name: 'RecallButton',

    data() {
        return {
            msg: this.$store.state.test,
            opened: false
        }
    },
    methods: {
        clicked: function() {
            console.log("clicked")
            this.$store.commit('setRecallMarketplaceOpen')
            this.opened = true;
        },
        clicked_recall: function() {
            console.log("clicked recall ")
            this.$store.commit('setOpenedModal', 1)
        },
        clicked_wishes: function() {
            console.log("clicked wishes")
            this.$store.commit('setOpenedModal', 2)
        },
        clicked_sensors: function() {
            console.log("clicked sensors")
            this.$store.commit('setOpenedModal', 3)
        }
    },
    components: {
        QBtn,
        QFab,
        QFabAction,

        QPageSticky,
        QLayout,
        QModal
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
