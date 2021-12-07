import { mapState } from "vuex";

export const ModalMixin = {
  computed: {
    isModalActive() {
      return this.isCreate || this.isEdit || this.isDelete;
    },
    modalTitle() {
      return this.isCreate ? "Criar novo contato" : "Editar contato";
    },
    modalLabel() {
      return this.isDelete ? "Excluir" : "Salvar";
    },
    ...mapState({
      contact: "currentContact",
      isCreate: "createModal",
      isEdit: "editModal",
      isDelete: "deleteModal",
      id: "modalId",
    }),
  },
  methods: {
    closeModal() {
      if (this.isCreate) this.closeCreateContact();
      if (this.isEdit) this.closeEditContact();
      if (this.isDelete) this.closeDeleteContact();
    },
    closeSave() {
      if (this.isCreate) this.createContact();
      if (this.isEdit) this.updateContact();
      if (this.isDelete) this.removeContact();
    },
    openCreateContact() {
      this.$store.dispatch("openCreateModal");
    },
    openConfirmDelete(id) {
      this.$store.dispatch("openDeleteModal");
      this.$store.commit("setModalId", id);
    },
    openEditContact(id) {
      this.$store.dispatch("openEditModal");
      const targetContact = this.$store.state.contacts.find(
        (contact) => contact.id === id
      );
      this.$store.commit("setCurrentContact", targetContact);
      this.$store.commit("setModalId", id);
    },
    closeCreateContact() {
      this.$store.dispatch("closeCreateModal");
      this.cleanContact();
    },
    closeEditContact() {
      this.$store.dispatch("closeEditModal");
      this.$store.commit("setModalId", -1);
      this.cleanContact();
    },
    closeDeleteContact() {
      this.$store.dispatch("closeDeleteModal");
      this.$store.commit("setModalId", -1);
      this.cleanContact();
    },
    createContact() {
      if (this.contact.name === "")
        this.contact.name =
          this.contact.phone !== "" ? this.contact.phone : this.contact.email;
      this.$store.commit("push", this.contact);
      this.closeCreateContact();
    },
    removeContact() {
      this.$store.commit("remove", this.id);
      this.closeDeleteContact();
    },
    updateContact() {
      this.$store.commit("update", { id: this.id, contact: this.contact });
      this.closeEditContact();
    },
    cleanContact() {
      this.$store.commit("setCurrentContact", {
        name: "",
        email: "",
        phone: "",
      });
    },
  },
};
