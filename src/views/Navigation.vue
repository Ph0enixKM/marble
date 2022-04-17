<script setup>
import NavigationButton from '@/components/Navigation/NavigationButton.vue'
</script>

<template lang="pug">
.root
    picture
        source(srcset="/marbl-dark.svg" media="(prefers-color-scheme: dark)")
        img.logo(src="/marbl.svg")
    NavigationButton(name="contact" path="#")
    NavigationButton(name="about" path="#")
</template>

<style lang="sass" scoped>
.root
    padding: 20px
    height: 70px
.logo
    width: 100px
    display: inline-block
    vertical-align: middle
</style>
