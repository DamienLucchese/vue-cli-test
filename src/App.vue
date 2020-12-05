<template>
  <Header />
  <StageSelect />
</template>

<script>
import Header from "./components/Header.vue";
import StageSelect from "./components/StageSelect.vue";

export default {
  name: "App",
  components: {
    Header,
    StageSelect
  }
};
</script>

<style lang="scss">
html,
body {
  background-color: #c5e4e8;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: "Press Start 2P", cursive;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
