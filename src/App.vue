<template>
  <div id="wrapper">
    <MainHeader />
    <AsideLinks :mainlist="characters"/>
    <CharacterMain :mainlist="characters"/>
  </div>
  
</template>

<script>
import MainHeader from '@/components/MainHeader.vue'
import AsideLinks from '@/components/AsideLinks.vue'
import CharacterMain from '@/components/CharacterMain.vue'

export default {
  components: {
    MainHeader,
    AsideLinks,
    CharacterMain
  },
  name: 'App',
  data() {
    return {
    }
  },
  mounted() {
  this.$store.dispatch('GET_CHARACTERS');
	},
}
</script>

<style lang="scss">

$main-color: #42b883;

html {
  height: 100vh;
}

body {
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  height: 100%;
  
}

#wrapper {
  display: flex;
  flex-wrap: wrap;
  height: 100%;
}

</style>
