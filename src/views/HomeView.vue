<template class="hero">
  <div class="background-hero">
    <div :class="['menu', { active: isActive }]">
      <div class="btn trigger" @click="toggleMenu">
        <span class="line"></span>
      </div>
      <div class="rotate">
        <div class="btn btn-icon">
          <img src="../assets/logo1.png" alt="">
        </div>
      </div>
      <div class="rotate">
        <div class="btn btn-icon">
          <i class="fa fa-facebook"></i>
        </div>
      </div>
      <div class="rotate">
        <div class="btn btn-icon">
          <i class="fa fa-google-plus"></i>
        </div>
      </div>
      <div class="rotate">
        <div class="btn btn-icon">
          <i class="fa fa-twitter"></i>
        </div>
      </div>
      <div class="rotate">
        <div class="btn btn-icon">
          <i class="fa fa-linkedin"></i>
        </div>
      </div>
      <div class="rotate">
        <div class="btn btn-icon">
          <i class="fa fa-github"></i>
        </div>
      </div>
      <div class="rotate">
        <div class="btn btn-icon">
          <i class="fa fa-behance"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';

const isActive = ref(false);

const toggleMenu = () => {
  isActive.value = !isActive.value;
};
</script>

<style scoped>

</style>
