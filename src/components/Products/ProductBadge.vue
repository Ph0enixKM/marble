<script setup lang="ts">
const props = withDefaults(defineProps<{
    name: string,
    background: string,
    description: string,
    icon: string,
    href: string
}>(), {
    href: '#'
});
</script>

<template lang="pug">
.badge
    a(:href="href")
        .background(:style="{ background }")
            img.icon(:src="icon")
    .title {{name}}
    .description {{description}}
</template>

<style scoped lang="sass">
.badge
    display: inline-block
    margin-left: 40px
    margin-top: 20px
    text-align: center

.background
    width: 200px
    height: 100px
    border-radius: 30px
    padding: 15px
    .icon
        height: 70px

.title
    font-family: 'BrandonTextW01-Bold'
    font-weight: 800
    font-size: 40px

.description
    font-family: 'Montserrat',
    font-size: 12px
    font-weight: 300
    text-transform: uppercase
    transform: translate(0, -5px)
</style>
