import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      mm2: {
        stages: [
          {
            name: "Bubble Man",
            stageIMG: "0px 0px"
          },
          {
            name: "Air Man",
            stageIMG: "-105px 0px"
          },
          {
            name: "Quick Man",
            stageIMG: "-211px 0px"
          },
          {
            name: "Heat Man",
            stageIMG: "0px -104px"
          },
          {
            name: "Dr. Wily",
            stageIMG: "-105px -104px"
          },
          {
            name: "Wood Man",
            stageIMG: "-211px -104px"
          },
          {
            name: "Metal Man",
            stageIMG: "0px -209px"
          },
          {
            name: "Flash Man",
            stageIMG: "-105px -209px"
          },
          {
            name: "Crash Man",
            stageIMG: "-211px -209px"
          }
        ]
      }
    };
  },
  // computed: {
  //   selectedGame: this.state.mm2
  // },
  mutations: {},
  actions: {},
  modules: {}
});

export default store;
