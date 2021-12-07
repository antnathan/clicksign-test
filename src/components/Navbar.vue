<template>
  <nav class="navbar level">
    <div class="level-left">
      <div class="level-item">
        <img
          src="../assets/ic-logo.png"
          srcset="../assets/ic-logo@2x.png 2x, ../assets/ic-logo@3x.png 3x"
          alt="Logo Ubook: um livro laranja com a letra u seguido do nome Ubook"
        />
      </div>
      <div v-if="hasContacts" class="level-item">
        <b-button
          type="is-primary"
          icon-left="plus"
          rounded
          class="create-button"
          @click="openCreateContact"
        >
          Criar contato
        </b-button>
      </div>
    </div>
    <!-- Right side -->
    <div class="level-right">
      <b-field class="search-input">
        <b-input
          placeholder="Buscar..."
          type="search"
          expanded
          icon-right="magnify"
          icon-right-clickable
          @icon-right-click="searchIconClick"
        >
        </b-input>
      </b-field>
    </div>
  </nav>
</template>

<script>
import { mapState } from "vuex";
import { ModalMixin } from "@/mixins/modal";

export default {
  mixins: [ModalMixin],
  computed: {
    hasContacts() {
      return this.contacts.length > 0;
    },
    ...mapState(["contacts"]),
  },
  methods: {
    searchIconClick(ev) {
      console.log(ev);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/main.scss";

.navbar {
  margin-top: 16px;
}

.create-button {
  margin-left: 60px;
  font-weight: $weight-medium;
  @extend .button-with-shadow;
}

.level-right {
  width: 100%;
  @include from(768px) {
    width: 70%;
  }
  .search-input {
    width: 100%;
    /deep/ input {
      background-color: $pale-grey;
      &::placeholder {
        color: $bluey-grey;
      }
    }
  }
}
</style>
