<script setup lang="ts">
import { RouterView } from 'vue-router'
import SideNav from './components/SideNav.vue'
</script>

<template>
  <main id="page-top">
    <SideNav />
    <div class="container-fluid p-0">
      <RouterView />
    </div>
  </main>
</template>

<style scoped></style>
