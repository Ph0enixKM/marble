<script setup>
import Navigation from '@/components/organisms/navigation/Navigation.vue'
import NavigationAmber from '@/components/organisms/navigation/variants/NavigationAmber.vue'
</script>

<template lang="pug">
template(v-if="$route.path == '/amber'")
    NavigationAmber

template(v-else)
    Navigation
</template>
