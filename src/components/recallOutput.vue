<template>

<span v-if="$store.state.processing" > {{ output }}</span>
</template>

<script>
export default {
    name: 'recallOutput',

    data: function() {
        return {
        }
    },
    computed: {
      output: function(){
        return this.$store.state.output
      }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
span {
    font-size: 1rem;
}

a {
    color: #42b983;
}
</style>
