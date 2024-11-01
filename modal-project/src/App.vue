<template>
  <h1>{{ title }}</h1>
  <br />
  <input type="text" ref="name" />
  <button @click="handleClick">Click me!</button>
  <button @click.alt="handleModalDisplay">Show Modal (alt)</button>
  <div v-if="showModal">
    <Modal theme="halloween" @close="handleModalDisplay">
      <template v-slot:links>
        <ul >
          <li>
            <a href="#"> Sign Up</a>
          </li>
          <li>
            <a href="#"> More info</a>
          </li>
        </ul>
      </template>
      <h1>{{ header }}</h1>
      <p>{{ text }}</p>
      
    </Modal>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue";
export default {
  name: "App",
  components: {
    Modal,
  },
  data() {
    return {
      title: "Rise up into my.....world~~~",
      header: "Halloween Discount!",
      text: "Get everything 20% off",
      showModal: false,
    };
  },
  methods: {
    handleClick() {
      console.log(this.$refs.name);
      this.$refs.name.classList.add("active");
      this.$refs.name.focus();
    },

    handleModalDisplay() {
      this.showModal = !this.showModal;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1 {
  border-bottom: 1px solid black;
  display: inline-block;
  padding-bottom: 10px;
}

.active {
  background-color: blueviolet;
}
</style>
