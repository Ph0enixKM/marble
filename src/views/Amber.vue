<script setup>
</script>

<template lang='pug'>
.amber
    img.shards-big(src="/amber-shards-big.png")
    img.shards-little(src="/amber-shards-little.png")
    div.title
        img(src="/amber-medium.png")
        h1 Amber
        h2 The one compiled to Bash
</template>

<style lang='sass'>
.amber
    background: linear-gradient(135deg, #FFC700, #CF0067)
    height: 100vh
    .shards-big
        position: absolute
        height: 100vh
        right: 10vw
        transform: translate(0, -25%)
        opacity: 50%
        filter: blur(5px)
        animation: big-shards 5s 3s forwards infinite alternate ease-in-out
    .shards-little
        position: absolute
        height: 50vh
        opacity: 70%
        top: 50vh
        left: 10vw
        transform: translate(0, -50%)
        animation: little-shards 3s forwards infinite alternate ease-in-out
    .title
        position: absolute
        left: 50vw
        top: 50vh
        transform: translate(-50%, -50%)
        text-align: center
        img
            height: 250px
        h1
            font-family: 'BrandonTextW01-Bold'
            color: white
            font-size: 92px
        h2
            font-family: 'Montserrat'
            font-size: 30px
            font-weight: bold
            text-transform: uppercase
            color: white

@media only screen and (max-width: 900px)
    .amber
        .title
            width: 100vw
            h1
                font-size: 64px
            h2
                font-size: 20px
        .shards-big
            display: none
        .shards-little
            display: none

@media only screen and (max-width: 1300px)
    .amber
        .title
            width: 100vw
        .shards-big
            height: 70vh
        .shards-little
            left: 2vw
            

@keyframes little-shards
    from
        transform: translate(0, -50%)
    to
        transform: translate(0, -47%)

@keyframes big-shards
    from
        transform: translate(0, -25%)
    to
        transform: translate(0, -23%)
</style>