<template>
<div id="app">





    <q-layout>

        <!-- We place it on header -->

        <!-- REQUIRED -->
        <q-page-container>

            <!--
            Here it's where Vue Router injects children
            Page components.

            <router-view/> tag below can be replaced by an
            actual page content should you wish to do so.
          -->

            <!--
            First child of QPageContainer must be a QPage,
            so make sure that your layout route children components
            encapsulate a QPage.
          -->

            <!--    <AppTitle/>
          <recallOutput/>

            <SenseHub/>
            <RecallButton/>
            <BrainHub/>
            <MarketplaceModal/>
            <WishesMarketplace/>
            <SensorsModal/>-->


             <router-view></router-view>


        </q-page-container>



    </q-layout>






</div>
</template>


<script>

import {
    QLayout,
    QPageContainer


} from "quasar-framework/dist/quasar.mat.esm";


export default {
    name: 'App',
    components: {

        QLayout,
        QPageContainer

    },
    created: function() {

        // remote console
  /*      let ckeditor = document.createElement('script');
        ckeditor.setAttribute('src', "//console.re/connector.js");
        ckeditor.setAttribute('data-channel', "recall");
        ckeditor.setAttribute('id', "consolerescript");
        document.head.appendChild(ckeditor);
        console.re.log('remote log test');
*/


    }

}
</script>



<style>
#app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}
</style>
