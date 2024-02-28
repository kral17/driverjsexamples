import { createStore } from 'vuex'
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import { driverObj, steps } from "../drivermaterials/driverobjects"

export default createStore({
  state: {
    driverObj: null,
    steps: [
      {
        element: '#element1',
        popover: {
          title: 'Title 1',
          description: 'Description 1',
          side: "bottom",
          align: 'center'
        },


      },
      {
        element: '#element2',
        popover: {
          title: 'Title 1',
          description: 'Description 2',
          side: "bottom",
          align: 'center'
        },


      },
      {
        element: '#element3',
        popover: {
          title: 'Title 1',
          description: 'Description 1',
          side: "start",
          align: 'center'
        },


      },
      // Diğer adımları buraya ekleyin...
    ]
  },
  getters: {
  },
  mutations: {
    SET_DRIVER_OBJ(state, driverObj) {
      state.driverObj = driverObj;
    }
  },
  actions: {
    startDriver({ commit, state }) {
      const driverObj = driver({
        steps: state.steps,
      });

      commit('SET_DRIVER_OBJ', driverObj);
      driverObj.drive();
    },
    stopDriver({ commit, state }) {
      if (state.driverObj) {
        state.driverObj.stop();
        commit('SET_DRIVER_OBJ', null);
      }
    }
  },
  modules: {
  }
})
