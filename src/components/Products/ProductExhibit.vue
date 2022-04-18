<script setup lang="ts">
import ProductBadge from '@/components/Products/ProductBadge.vue'
import { reactive } from 'vue'
const cards = reactive([
    {
        name: 'Flame',
        description: 'Highest low level language',
        background: 'linear-gradient(90deg, #F68407, #A71439)',
        icon: '/flame.png'
    },
    {
        name: 'Amber',
        description: 'The one compiled to Bash',
        background: 'linear-gradient(90deg, #F9B00D, #D61F58)',
        icon: '/amber.png'
    },
    {
        name: 'Illiade',
        description: 'The funky IDE',
        background: 'linear-gradient(135deg, #370253, #AB1889)',
        icon: '/illiade.png'
    }
])
</script>

<template lang="pug">
.root
    ProductBadge(v-for="card in cards" v-bind="card")
</template>

<style scoped lang="sass">
.root
    margin-top: 10px
    padding: 20px
    border-radius: 20px
    margin: 0 auto
    text-align: center

@media only screen and (min-width: 768px)
    .root
        position: absolute
        left: 50vw
        top: 50vh
        transform: translate(-50%, -50%)
</style>