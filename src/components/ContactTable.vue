<template>
  <b-table class="table is-fullwidth" :data="contacts" narrowed hoverable>
    <b-table-column
      header-class="table-header"
      label=""
      width="40"
      v-slot="props"
    >
      <div
        class="letter-icon"
        :style="backgroundColor(props.row.first_name[0])"
      >
        {{ props.row.first_name[0] }}
      </div>
    </b-table-column>
    <b-table-column header-class="table-header" label="Contatos" v-slot="props">
      {{ props.row.first_name }}
    </b-table-column>
    <b-table-column header-class="table-header" label="E-mail" v-slot="props">
      {{ props.row.email }}
    </b-table-column>
    <b-table-column header-class="table-header" label="Telefone" v-slot="props">
      {{ props.row.phone }}
    </b-table-column>
    <b-table-column
      header-class="table-header"
      :td-attrs="columnTdAttrs"
      numeric
      label=""
      v-slot="props"
    >
      <img src="@/assets/ic-edit.svg" class="ic_edit" />
      <img
        src="@/assets/ic-delete.svg"
        class="ic_delete"
        @click="() => removeContact(props.row.id)"
      />
    </b-table-column>
  </b-table>
</template>

<script>
import { mapState } from "vuex";
export default {
  computed: mapState(["contacts"]),
  methods: {
    backgroundColor(letter) {
      const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const colors = [
        "#fa8d68",
        "#90d26c",
        "#68a0fa",
        "#fab668",
        "#8368fa",
        "#fa68b5",
        "#5fe2c4",
        "#f55a5a",
      ];
      return {
        "background-color": colors[alphabet.indexOf(letter) % colors.length],
      };
    },
    columnTdAttrs() {
      return {
        style: {
          "justify-content": "center !important",
        },
      };
    },
    removeContact(id) {
      console.log(id);
      this.$store.commit("remove", id);
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../styles/_variables.scss";
.table {
  border: 1px solid $pale-grey;
  border-radius: 4px;
  /deep/ .table-header {
    font-weight: 500;
    font-size: 13px;
    padding: 16px 9px 6px;
    border-width: 0 0 1px;
  }
}
img.ic_edit,
img.ic_delete {
  width: 16px;
  height: 16px;
  margin: 4px 16px;
  object-fit: contain;
  cursor: pointer;
  &:hover {
    filter: brightness(30%);
  }
}
.letter-icon {
  display: inline-block;
  font-size: 1em;
  width: 1.5em;
  height: 1.5em;
  line-height: 1.3em;
  text-align: center;
  border-radius: 50%;
  color: white;
  text-transform: uppercase;
}
</style>
