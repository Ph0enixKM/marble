<script setup lang="ts">
import { reactive } from 'vue';
import { RouterLink } from 'vue-router';

const props = defineProps<{
    name: string,
    path: string
}>();

</script>

<template lang="pug">
RouterLink(:to="path")
    span.button {{name}}
</template>

<style scoped lang="sass">
.button
    font-family: Lato
    font-size: 18px
    color: rgb(72,72,72)
    font-weight: 400
    float: right
    margin-right: 20px
    vertical-align: middle
    display: inline-block

@media (prefers-color-scheme: dark)
    .button
        color: #aaa
</style>
