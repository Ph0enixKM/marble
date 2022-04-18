<script setup lang="ts">
import ProductBadge from '@/components/Products/ProductBadge.vue'
import { reactive } from 'vue'
const cards = reactive([
    {
        name: 'Flame',
        description: 'The language',
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
    .background
            template(v-for="card in cards" :key="card.name")
                ProductBadge(v-bind="card")
</template>

<style scoped lang="sass">
.background
    width: 90vw
    display: inline-block
    margin-top: 10px
    padding: 20px
    border-radius: 20px
    margin: 0 auto
    text-align: center

@media only screen and (min-width: 768px)
    .background
        position: absolute
        left: 50vw
        top: calc(50vh - 70px)
        transform: translate(-50%, -50%)
</style>