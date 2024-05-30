<script setup>

import { RouterLink, RouterView } from 'vue-router'

import { onMounted, ref } from 'vue'

import { auth } from './firebase.js'
import { signOut, onAuthStateChanged } from 'firebase/auth'

import router from './router'



let isLoggedIn = ref(false)

onMounted(() => {
  onAuthStateChanged(auth, (user) => {
    if (user) {
      isLoggedIn.value = true
      console.log('User logged in', auth.currentUser)

    } else {
      isLoggedIn.value = false
      console.log('User logged out', auth.currentUser)

    }
  })
})

let logOut = () => {
  signOut(auth)
  .then(() => {
    console.log('User logged out', auth.currentUser)
    router.push('/login')
  })
  .catch((error) => {
    console.log(error)
  })


  
}


</script>


<template>
  <div class="Prompt-1">
    <header>
      <img alt="remedy" class="logo" src="@/assets/logony1.png" width="125" height="125" />

      <div class="wrapper">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <!-- <RouterLink to="/navguard">NavGuard</RouterLink>
          <RouterLink to="/login">Login</RouterLink> -->
          <RouterLink to="/chatgpt">Prompt</RouterLink>
        </nav>
        <button @click="logOut" v-if="isLoggedIn">Log Out</button>
      </div>

    </header>

    <main>
      <router-view v-slot="{ Component, route }">
        <Transition name="fade" mode="out-in">
          <div :key="route.name">
            <component :is="Component"></component>
          </div>
        </Transition>
      </router-view>

      <div :class="['menu', { active: isActive }]">
    <div class="btn trigger" @click="toggleMenu">
      <span class="line"></span>
    </div>
    <!-- Rest of the HTML code -->
  </div>
    </main>
  </div>

  

</template>

<style scoped>

  

html, template, .prompt-1 {
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  /* width: 100%;
  height: 100%;
  overflow: hidden; */
 
}

.prompt-1{

  flex-direction: column;
  justify-content: center;
  align-items: center;
 background-size: 100% 100%;

}

header {
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  padding-bottom: 4rem;
  font-family: bookman;
  /* Optional: Add some background to the header */
}

.wrapper {
  display: flex;
  align-items: center;
  
}

nav {
  display: flex;
  gap: 1rem;
}

main {
  flex: 1;
  /* display: flex; */
  width: 100%;
  justify-content: center;
  align-items: center;
}

button {
  margin-left: 1rem;
}

 

.fade-enter-active {
  transition: opacity 0.5s ease;
}

.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}




header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
  height: auto;
  size: 120%;
}

nav {
  width: 100%;
  font-size: 15px;
  text-align: center;
  margin-top: 2rem;
}
nav a.router {
  color: #a3a3a3
 /*  color: #d384f2 */
}

nav a.router-link-exact-active {
  color: #ffe1f2
 /*  color: #d384f2 */
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid;
color: rgb(253, 250, 255);}

nav a:first-of-type {
  border: 0;
}



@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
