<script setup>
import { RouterLink } from 'vue-router'
import NavigationMenu from '@/components/molecules/navigation/NavigationMenu.vue'
</script>

<template lang="pug">
.root
    RouterLink(to="/")
        picture
            source(srcset="/marbl-dark.svg" media="(prefers-color-scheme: dark)")
            img.logo(src="/marbl.svg")
    NavigationMenu.menu
</template>

<style lang="sass" scoped>
.root
    position: fixed
    width: 100vw
    height: 70px
    padding: 20px
    z-index: 100
    background: var(--color-background)
.logo
    width: 100px
    display: inline-block
    vertical-align: middle

.menu
    position: absolute
    right: 10px
</style>
