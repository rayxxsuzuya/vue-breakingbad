<template>
  <div id="wrapper">
    <header class="header">Header</header>
    <AsideLinks/>
    <main class="main">
      Main
    </main>
  </div>
  
</template>

<script>
import axios from 'axios'
import AsideLinks from '@/components/AsideLinks.vue'

export default {
  components: { AsideLinks },
  name: 'App',
  data() {
    return {
      characters: []
    }
  },
  async mounted() {
    const response = await axios.get('https://breakingbadapi.com/api/characters');
    this.characters = response.data;
    console.log(this.characters[0].name);
  }
}
</script>

<style>

html {
  height: 100vh;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  
}

#wrapper {
  display: grid;
  grid-template-columns: repeat(12, 1fr);
}

.header {
  grid-column: span 12;
}

.aside {
  grid-column: span 4;
}

.main {
  grid-column: span 8;
}

</style>
