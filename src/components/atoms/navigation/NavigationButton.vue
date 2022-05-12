<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
    name: string,
    path: string,
    color: string
}>();

const color = props.color || 'auto';
</script>

<template lang="pug">
RouterLink(:to="path")
    span.button(:style='{ color }') {{name}}
</template>

<style scoped lang="sass">
.button
    font-family: Lato
    font-size: 18px
    color: rgb(72,72,72)
    font-weight: 400
    margin-right: 20px
    vertical-align: middle
    display: inline-block

@media (prefers-color-scheme: dark)
    .button
        color: #aaa
</style>
