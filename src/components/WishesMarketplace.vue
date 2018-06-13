<template>
<q-modal v-model="isOpened" maximized  class="justify-center item-center">
<div class="row justify-center">
  <h1>Recall wishes</h1>
</div>

    <q-list :separator=true >
        <q-collapsible group="somegroup" v-bind:label="item.name" v-for="item in items">

          <template slot="header">
              <q-chip color="primary" small class="q-mr-sm">
                {{item.raised  | units}}
              </q-chip>
              <q-item-main v-bind:label="item.name"  />
            </template>

            <q-item>

                {{item.need }}

                <q-item-side right>
                      <q-item-tile avatar>
                        <q-btn round dense color="dark" icon="chat" @click="$router.push('/chat')">                       <!--   <q-chip floating color="red">22</q-chip>-->
     </q-btn>


                      </q-item-tile>
                    </q-item-side>

            </q-item>


            <!-- icon on left side -->
        </q-collapsible>
    </q-list>
    <div class="row item-center justify-center">

    <CloseButton></CloseButton>

  </div>

</q-modal>
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
    QChip

} from "quasar-framework/dist/quasar.ios.esm";

import CloseButton from './CloseButton'

export default {
    name: 'WishesMarketplace',

    data: function() {
        return {
            search: "",
            items: [{
                name: 'Wish one',
                need: 'snskjnknknkj',
                raised: 10000
            }, {
                name: 'Wish two',
                need: 'snskjnknknkj fsdfasdf afsdfasdf fasdfasdfa sdfasdfasdfasdf sadfasdfadsfa',
                raised: 23000000
            }, {
                name: 'Wish three',
                need: 'snskjnknknkj fasdfasdf fdsfawdrqštghe zujezruhdf gsdfgsdfger twertqertwertqe',
                raised: 342
            }]
        }
    },

    computed: {
      isOpened: function() {
          if (this.$store.state.opened_modal == 2) {
              return true
          } else {
              return false
          }
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
        CloseButton
    },
    filters: {
  units: function (value) {
    console.log("CAPITALIZE")
    if (!value) return ''
    var newval = value
    if (value > 1000000){
      newval = value / 1000000
      newval = newval + "M"
      return newval
    }
    if (value > 1000){
      newval = value / 1000
      newval = newval + "k"
      return newval
    }
    return value
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
    color: #42b983;
}
</style>
