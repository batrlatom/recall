<template>

<q-modal v-model="isOpened" maximized class="justify-center text-center item-center vertical-middle	">
<h1>Manage your data sensors</h1>

<q-list>

    <q-item tag="label" v-for="item in items">

      <q-item-main>

        <q-item-tile title>{{item.name}}</q-item-tile>
      </q-item-main>

      <q-item-side right>

        <q-toggle v-model="arr_checked" v-bind:val="item.name" v-bind:icon="item.icon" v-bind:checked-icon="item.icon" class="purple" style="color:black !important"	/>


      </q-item-side>
    </q-item>

</q-list>



  <CloseButton></CloseButton>
</q-modal>
</template>


<script>

import SensorsBase from './SensorsBase'
export default {
  extends: SensorsBase,
    name: 'SensorsModal',

computed: {
  isOpened: function() {
      if (this.$store.state.opened_modal == 3) {
          return true
      } else {
          return false
      }
  }
},

data: function() {
    return {
        search: "",
        items: [{
            name: 'camera',
            icon: 'camera'
        },{
            name: 'microphone',
            icon: 'mic'
        },{
            name: 'location',
            icon: 'location_on'
        },{
            name: 'gyro',
            icon: 'gesture'
        }],

        arr_checked: []
    }
},

    methods: {
        close: function() {
            console.log("clicked close")

            this.$store.commit('setModalsClose')
                //this.$emit('close');
        }
    }

}
</script>
<style scoped>
h1 {
    font-size: 3rem;
}

a {
  font-size: 2rem;
    color: #42b983;
}




</style>
