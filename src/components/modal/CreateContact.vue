<template>
  <section>
    <b-modal
      :active="isModalActive"
      has-modal-card
      trap-focus
      :destroy-on-hide="false"
      aria-role="dialog"
      aria-label="Example Modal"
      aria-modal
      can-cancel
      :on-cancel="closeModal"
    >
      <template #default>
        <form action="">
          <div class="modal-card" style="width: auto">
            <header class="modal-card-head">
              <p class="modal-card-title">{{ modalTitle }}</p>
            </header>
            <section class="modal-card-body">
              <div v-if="isDelete" class="container">
                <h2 class="has-text-black is-size-6 pb-6">
                  Deseja realmente excluir o contato?
                </h2>
              </div>
              <div v-if="isCreate || isEdit" class="container">
                <b-field label="Nome">
                  <b-input type="text" v-model="contact.name"> </b-input>
                </b-field>

                <b-field label="E-mail">
                  <b-input type="email" v-model="contact.email"> </b-input>
                </b-field>

                <b-field label="Telefone">
                  <b-input
                    type="text"
                    v-model="contact.phone"
                    @keypress.native="isNumber"
                  >
                  </b-input>
                </b-field>
              </div>
            </section>
            <footer class="modal-card-foot is-flex is-justify-content-flex-end">
              <b-button label="Cancelar" type="is-ghost" @click="closeModal" />
              <b-button
                :label="modalLabel"
                rounded
                type="is-link"
                class="save-button"
                :disabled="!validInput"
                @click="closeSave"
              />
            </footer>
          </div>
        </form>
      </template>
    </b-modal>
  </section>
</template>
<script>
import { ModalMixin } from "@/mixins/modal";

export default {
  mixins: [ModalMixin],
  computed: {
    validInput() {
      return (
        this.contact.name !== "" ||
        this.contact.phone !== "" ||
        this.validEmail ||
        this.isDelete
      );
    },
    validEmail() {
      const [name, domain] = this.contact.email.split("@");
      return name !== "" && !!domain && domain !== "";
    },
  },
  methods: {
    isNumber(evt) {
      const keyPressed = evt.key;
      let keysAllowed = [
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "-",
        "+",
        "(",
        ")",
        " ",
      ];

      if (!keysAllowed.includes(keyPressed)) evt.preventDefault();
    },
  },
};
</script>

<style lang="scss" scoped>
@import "../../styles/main.scss";

.modal-card-head {
  border-top-left-radius: 1em;
  border-top-right-radius: 1em;
  padding: 1em;

  .modal-card-title {
    font-size: 1em;
    font-weight: $weight-normal;
    color: $black;
  }
}

.modal-card-body {
  width: 432px;
  .field {
    /deep/ .label {
      font-size: 14px;
      font-weight: $weight-normal;
      color: $black;
    }
    /deep/ input {
      border: 1px solid #c0c3d2;
    }
  }
}

.modal-card-foot {
  border-bottom-left-radius: 1em;
  border-bottom-right-radius: 1em;
  .save-button:not([disabled]) {
    @extend .button-with-shadow;
  }
}
</style>
