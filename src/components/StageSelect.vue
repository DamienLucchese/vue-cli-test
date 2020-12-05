<template>
  <section class="stageSelect__section">
    <div class="stageSelect__bg"></div>
    <div class="stageSelect__bg"></div>
    <div class="stageSelect__bg"></div>
    <div class="stageSelect">
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
        <h3 class="stageSelect__square--name">
          <span class="stageSelect__square--name1">{{ stage.name }}</span>
          <span class="stageSelect__square--name2">{{ getTitle2(stage.name) }}</span>
        </h3>
      </button>
    </div>
  </section>
</template>

<script>
export default {
  name: "StageSelect",
  computed: {
    stages() {
      return this.$store.state.mm2.stages;
    }
  },
  methods: {
    getTitle2(name) {
      switch (name) {
        case "SPLASH":
          return "WOMAN";

        case "Dr.":
          return "WILY";

        default:
          return "MAN";
      }
    }
  }
};
</script>

<style scoped lang="scss">
.stageSelect__section {
  background: #1863d6;
}

.stageSelect__bg {
  background: rgb(24,99,214);
  background: -moz-linear-gradient(top,  rgba(24,99,214,1) 0%, rgba(24,99,214,1) 38%, rgba(74,206,222,1) 39%, rgba(74,206,222,1) 39%, rgba(74,206,222,1) 40%, rgba(24,99,214,1) 41%, rgba(24,99,214,1) 41%, rgba(24,99,214,1) 42%, rgba(74,206,222,1) 43%, rgba(74,206,222,1) 43%, rgba(74,206,222,1) 44%, rgba(74,206,222,1) 44%, rgba(24,99,214,1) 45%, rgba(24,99,214,1) 45%, rgba(24,99,214,1) 46%, rgba(24,99,214,1) 46%, rgba(74,206,222,1) 47%, rgba(74,206,222,1) 53%, rgba(24,99,214,1) 54%, rgba(24,99,214,1) 55%, rgba(74,206,222,1) 56%, rgba(74,206,222,1) 57%, rgba(24,99,214,1) 58%, rgba(24,99,214,1) 59%, rgba(74,206,222,1) 60%, rgba(74,206,222,1) 61%, rgba(24,99,214,1) 62%, rgba(24,99,214,1) 100%);
  background: -webkit-linear-gradient(top,  rgba(24,99,214,1) 0%,rgba(24,99,214,1) 38%,rgba(74,206,222,1) 39%,rgba(74,206,222,1) 39%,rgba(74,206,222,1) 40%,rgba(24,99,214,1) 41%,rgba(24,99,214,1) 41%,rgba(24,99,214,1) 42%,rgba(74,206,222,1) 43%,rgba(74,206,222,1) 43%,rgba(74,206,222,1) 44%,rgba(74,206,222,1) 44%,rgba(24,99,214,1) 45%,rgba(24,99,214,1) 45%,rgba(24,99,214,1) 46%,rgba(24,99,214,1) 46%,rgba(74,206,222,1) 47%,rgba(74,206,222,1) 53%,rgba(24,99,214,1) 54%,rgba(24,99,214,1) 55%,rgba(74,206,222,1) 56%,rgba(74,206,222,1) 57%,rgba(24,99,214,1) 58%,rgba(24,99,214,1) 59%,rgba(74,206,222,1) 60%,rgba(74,206,222,1) 61%,rgba(24,99,214,1) 62%,rgba(24,99,214,1) 100%);
  background: linear-gradient(to bottom,  rgba(24,99,214,1) 0%,rgba(24,99,214,1) 38%,rgba(74,206,222,1) 39%,rgba(74,206,222,1) 39%,rgba(74,206,222,1) 40%,rgba(24,99,214,1) 41%,rgba(24,99,214,1) 41%,rgba(24,99,214,1) 42%,rgba(74,206,222,1) 43%,rgba(74,206,222,1) 43%,rgba(74,206,222,1) 44%,rgba(74,206,222,1) 44%,rgba(24,99,214,1) 45%,rgba(24,99,214,1) 45%,rgba(24,99,214,1) 46%,rgba(24,99,214,1) 46%,rgba(74,206,222,1) 47%,rgba(74,206,222,1) 53%,rgba(24,99,214,1) 54%,rgba(24,99,214,1) 55%,rgba(74,206,222,1) 56%,rgba(74,206,222,1) 57%,rgba(24,99,214,1) 58%,rgba(24,99,214,1) 59%,rgba(74,206,222,1) 60%,rgba(74,206,222,1) 61%,rgba(24,99,214,1) 62%,rgba(24,99,214,1) 100%);
  filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#1863d6', endColorstr='#1863d6',GradientType=0 );
  height: 10vw;
  width: 100%;
}

.stageSelect {
  background: #1863d6;
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
    background: none;
    border: none;
    cursor: pointer;
    font-family: "Press Start 2P", cursive;
    margin-bottom: 1vw;

    &--frame {
      background-image: url("../assets/mm2_robotMasters.png");
      background-size: 310%;
      height: 100px;
      width: 100px;
    }

    &--name {
      color: #fff;
      margin: 1vw auto;
      width: 94%;

      &1 {
        display: block;
        text-align: left;
      }

      &2 {
        display: block;
        text-align: right;
      }
    }
  }
}
</style>
