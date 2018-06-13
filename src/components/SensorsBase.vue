<template>
<div>
    <h1>Turn on some sensors</h1>
    <q-list>

        <q-item tag="label" v-for="item in items">
            <q-item-main>

                <q-item-tile title>{{item.name | capitalize}}</q-item-tile>
            </q-item-main>
            <q-item-side left>
                <q-toggle v-model="checked" v-bind:icon="item.icon" />
            </q-item-side>
        </q-item>

    </q-list>



    <h3><router-link :to="{ name: 'marketplace', params: {} }">Choose Recall</router-link></h3>

</div>
</template>

<script>
import {
    QBtn,
    QModal,
    QSearch,
    QList,
    QListHeader,
    QItem,
    QItemMain,
    QItemSeparator,
    QItemSide,
    QItemTile,
    QCollapsible,
    QChip,
    QBtnGroup,
    QLayoutHeader,
    QLayoutFooter,
    QToggle

} from "quasar-framework/dist/quasar.ios.esm";

import CloseButton from './CloseButton'


export default {
    name: 'SensorsBase',

    data: function() {
        return {
            search: "",
            items: [{
                name: 'camera',
                icon: 'camera'
            }],
            checked: true
        }
    },

    computed: {

    },
    created: function() {
        console.log("sensors modal base created")
    },
    methods: {
        close: function() {
            console.log("clicked close")

            this.$store.commit('setModalsClose')
                //this.$emit('close');
        }
    },
    components: {
        QBtn,
        QModal,
        QSearch,
        QList,
        QListHeader,
        QItem,
        QItemMain,
        QItemSeparator,
        QItemSide,
        QItemTile,
        QCollapsible,
        QChip,
        QBtnGroup,
        QLayoutHeader,
        QLayoutFooter,
        CloseButton,
        QToggle
    },
    filters: {
        capitalize: function(value) {
            if (!value) return ''
            value = value.toString()
            return value.charAt(0).toUpperCase() + value.slice(1)
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
    font-size: 3rem;
}

a {
    font-size: 2rem;
    color: #42b983;
}
</style>
