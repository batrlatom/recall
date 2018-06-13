<template>
<q-modal v-model="isOpened" maximized>
    <MarketplaceBase/>
    <CloseButton></CloseButton>
</q-modal>
</template>

<script>

import CloseButton from './CloseButton'
import MarketplaceBase from './MarketplaceBase'


import {
    QBtn,
    QCarousel,
    QCarouselSlide,
    QCarouselControl,
    QModal,
    QSearch,
    QCard,
    QCardTitle,
    QCardMain,
    QCardMedia,
    QCardSeparator,
    QCardActions


} from "quasar-framework/dist/quasar.mat.esm";


export default {
    name: 'MarketplaceModal',
extends: MarketplaceBase,

    components: {
        QBtn,
        QCarousel,
        QCarouselSlide,
        QCarouselControl,
        QModal,
        QSearch,
        QCard,
        QCardTitle,
        QCardMain,
        QCardMedia,
        QCardSeparator,
        QCardActions,
        CloseButton,
        MarketplaceBase

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
