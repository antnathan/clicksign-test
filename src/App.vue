<template>
  <div id="app">
    <div class="container">
      <Navbar />
      <router-view />
      <CreateContact />
    </div>
  </div>
</template>
<script>
import Navbar from "@/components/Navbar";
import CreateContact from "@/components/modal/CreateContact";

export default {
  components: {
    Navbar,
    CreateContact,
  },
};
</script>

<style lang="scss">
@import "./styles/main.scss";
.container {
  @include until(768px) {
    padding: 0 1em;
  }
}
</style>
