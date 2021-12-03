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
export default {
  methods: {
    searchIconClick(ev) {
      console.log(ev);
    },
  },
};
</script>

<style lang="scss">
@import "../styles/_variables.scss";

.navbar {
  margin-top: 16px;
}

.level-right {
  width: 70%;
  .search-input {
    width: 100%;
    input::placeholder {
      color: $bluey-gray;
    }
  }
}
</style>
