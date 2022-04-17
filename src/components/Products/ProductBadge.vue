<script setup lang="ts">
const props = defineProps<{
    name: String,
    background: String,
    description: String,
    icon: String
}>();
</script>

<template lang="pug">
.root
    .background(:style="{ background }")
        img.icon(:src="icon")
    .title {{name}}
    .description {{description}}
</template>

<style scoped lang="sass">
.root
    display: inline-block
    margin-left: 20px
    text-align: center

.background
    width: 200px
    height: 100px
    border-radius: 30px
    padding: 15px
    .icon
        height: 70px

.title
    margin-top: 20px
    font-family: 'BrandonTextW01-Bold'
    font-weight: 800
    font-size: 40px

.description
    font-family: 'Montserrat',
    font-size: 12px
    font-weight: 200
    text-transform: uppercase
    transform: translate(0, -5px)
</style>