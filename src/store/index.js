import { createStore } from "vuex";

const store = createStore({
  state() {
    return {
      mm2: {
        stages: [
          {
            name: "BUBBLE",
            stageIMG: "0px 0px"
          },
          {
            name: "AIR",
            stageIMG: "-105px 0px"
          },
          {
            name: "QUICK",
            stageIMG: "-211px 0px"
          },
          {
            name: "HEAT",
            stageIMG: "0px -105px"
          },
          {
            name: "Dr.",
            stageIMG: "-105px -105px"
          },
          {
            name: "WOOD",
            stageIMG: "-211px -105px"
          },
          {
            name: "METAL",
            stageIMG: "0px -209px"
          },
          {
            name: "FLASH",
            stageIMG: "-105px -209px"
          },
          {
            name: "CRASH",
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
