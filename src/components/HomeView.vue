<template>
<div  >
    <!--<BrainHub/>-->
    <recallOutput/>
    <SenseHub/>
    <MarketplaceModal/>
<SensorsModal/>
<WishesMarketplace/>
    <RecallButton/>

</div>
</template>

<script>
import AppTitle from './AppTitle'
import RecallButton from './RecallButton'
import SenseHub from './SenseHub'
import BrainHub from './BrainHub'
import recallOutput from './recallOutput'
import MarketplaceModal from './MarketplaceModal'
import WishesMarketplace from './WishesMarketplace'
import SensorsModal from './SensorsModal'
import WelcomeWizard from './WelcomeWizard'
import {
    QLayout,
    QPageContainer,
    QPage,
    QLayoutHeader,
    QLayoutFooter,
    QLayoutDrawer,
    QPageSticky,
    QToolbar


} from "quasar-framework/dist/quasar.ios.esm";



export default {
    name: 'HomeView',


    data: function() {
        return {}
    },
    created: function() {
        console.log("HOME VIEW")


    },
    methods: {

  },


    components: {
        AppTitle,
        RecallButton,
        SenseHub,
        BrainHub,
        recallOutput,
        MarketplaceModal,
        WishesMarketplace,
        SensorsModal,
        WelcomeWizard,

        QLayout,
        QPageContainer,
        QPage,
        QLayoutHeader,
        QLayoutFooter,
        QLayoutDrawer,
        QPageSticky
    },
}
</script>
