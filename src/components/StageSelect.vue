<template>
  <section class="stageSelect">
    <h2 class="stageSelect__title">Stage Select</h2>
    <button
      v-for="stage in stages"
      :key="stage.name"
      class="stageSelect__square"
    >
      <div
        class="stageSelect__square--frame"
        :class="index"
        :style="{ backgroundPosition: stage.stageIMG }"
      >
      </div>
      <h3 class="stageSelect__square--title">{{ stage.name }}</h3>
    </button>
  </section>
</template>

<script>
export default {
  name: "StageSelect",
  computed: {
    stages() {
      return this.$store.state.mm2.stages;
    }
  }
};
</script>

<style scoped lang="scss">
.stageSelect {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 4vw auto;
  max-width: 374px;
  text-align: center;

  &__title {
    width: 100%;
  }

  &__square {
    border: none;
    cursor: pointer;
    margin-bottom: 1vw;

    &--frame {
      background-image: url("../assets/mm2_robotMasters.png");
      background-size: 310%;
      height: 100px;
      margin-bottom: 1vw;
      width: 100px;
    }
  }
}
</style>
