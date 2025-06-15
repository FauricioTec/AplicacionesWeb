<script setup lang="ts">
import { useRoute } from 'vue-router'
import Profile from '@/assets/img/profile.jpg'

const route = useRoute()
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary fixed-top" id="sideNav">
    <a class="navbar-brand" @click="$router.push('/about')">
      <span class="d-block d-lg-none">Start Bootstrap</span>
      <span class="d-none d-lg-block">
        <img class="img-fluid img-profile rounded-circle mx-auto mb-2" :src="Profile" alt="" />
      </span>
    </a>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarSupportedContent"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav">
        <li class="nav-item">
          <router-link class="nav-link" :class="{ active: route.path === '/about' }" to="/about"
            >About</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ active: route.path === '/experience' }"
            to="/experience"
            >Experience</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ active: route.path === '/education' }"
            to="/education"
            >Education</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="{ active: route.path === '/skills' }" to="/skills"
            >Skills</router-link
          >
        </li>
        <li class="nav-item">
          <router-link
            class="nav-link"
            :class="{ active: route.path === '/interests' }"
            to="/interests"
            >Interests</router-link
          >
        </li>
        <li class="nav-item">
          <router-link class="nav-link" :class="{ active: route.path === '/awards' }" to="/awards"
            >Awards</router-link
          >
        </li>
      </ul>
    </div>
  </nav>
</template>
