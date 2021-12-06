<template>
  <b-table class="table is-fullwidth" :data="data" narrowed hoverable>
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
    >
      <img src="@/assets/ic-edit.svg" class="ic_edit" />
      <img src="@/assets/ic-delete.svg" class="ic_delete" />
    </b-table-column>
  </b-table>
</template>

<script>
export default {
  data() {
    return {
      data: [
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
    };
  },
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
      console.log(letter);
      console.log(alphabet.indexOf(letter));
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
