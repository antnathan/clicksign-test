import Vue from "vue";
import Vuex from "vuex";
import createPersistedState from "vuex-persistedstate";
import VueCookies from "vue-cookies";

Vue.use(Vuex);
Vue.use(VueCookies);
Vue.$cookies.config("7d");

export default new Vuex.Store({
  state: {
    contacts: [],
    currentContact: {
      name: "",
      email: "",
      phone: "",
    },
    createModal: false,
    editModal: false,
    deleteModal: false,
    currentId: -1,
    modalId: -1,
    search: "",
  },
  mutations: {
    push(state, contact) {
      state.currentId++;
      state.contacts.forEach((contact) => {
        contact.modifier = "idle";
      });
      const id = state.currentId;
      const modifier = "highlight";
      state.contacts.push({ ...contact, id, modifier });
    },
    update(state, { contact, id }) {
      const index = state.contacts.findIndex((contact) => contact.id === id);
      state.contacts.splice(index, 1, contact);
    },
    updateHighlight(state, { modifier, id }) {
      const index = state.contacts.findIndex((contact) => contact.id === id);
      if (index < 0) return false;
      const updatedContact = state.contacts[index];
      updatedContact.modifier = modifier;
      state.contacts.splice(index, 1, updatedContact);
    },
    remove(state, id) {
      const index = state.contacts.findIndex((contact) => contact.id === id);
      state.contacts.splice(index, 1);
    },
    setModalId(state, id) {
      state.modalId = id;
    },
    setSearch(state, searchInput) {
      state.search = searchInput;
    },
    setCurrentContact(state, contact) {
      state.currentContact = contact;
    },
    toggleCreateContact(state, boolean) {
      state.createModal = boolean;
    },
    toggleEditContact(state, boolean) {
      state.editModal = boolean;
    },
    toggleDeleteContact(state, boolean) {
      state.deleteModal = boolean;
    },
  },
  actions: {
    openCreateModal({ commit }) {
      commit("toggleCreateContact", true);
    },
    closeCreateModal({ commit }) {
      commit("toggleCreateContact", false);
    },
    openEditModal({ commit }) {
      commit("toggleEditContact", true);
    },
    closeEditModal({ commit }) {
      commit("toggleEditContact", false);
    },
    openDeleteModal({ commit }) {
      commit("toggleDeleteContact", true);
    },
    closeDeleteModal({ commit }) {
      commit("toggleDeleteContact", false);
    },
  },
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
