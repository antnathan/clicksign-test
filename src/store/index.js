import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import VueCookies from "vue-cookies";

Vue.use(Vuex);
Vue.use(VueCookies);
Vue.$cookies.config("7d");

export default new Vuex.Store({
  state: {
    contacts: [
      {
        id: 1,
        first_name: "Leanne",
        email: "Sincere@april.biz",
        phone: "1-770-736-8031",
      },
      {
        id: 2,
        first_name: "John",
        email: "Shanna@melissa.tv",
        phone: "010-692-6593",
      },
      {
        id: 3,
        first_name: "Tina",
        email: "Nathan@yesenia.net",
        phone: "1-463-123-4447",
      },
      {
        id: 4,
        first_name: "Clarence",
        email: "Julianne.OConner@kory.org",
        phone: "493-170-9623 x156",
      },
      {
        id: 5,
        first_name: "Anne",
        email: "Lucio_Hettinger@annie.ca",
        phone: "(254)954-1289",
      },
    ],
  },
  mutations: {
    push(state, contact) {
      state.contacts.push(contact);
    },
    remove(state, id) {
      console.log(id);
      const index = state.contacts.findIndex((contact) => contact.id === id);
      state.contacts.splice(index, 1);
    },
  },
  actions: {},
  modules: {},
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Vue.$cookies.get(key),
        setItem: (key, value) => Vue.$cookies.set(key, value),
        removeItem: (key) => Vue.$cookies.remove(key),
      },
    }),
  ],
});
