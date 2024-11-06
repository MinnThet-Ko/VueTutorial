<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link :to="{name: 'jobs'}">Jobs</router-link>
  </nav>
  <button @click="handleRedirect">Redirect</button>
  <button @click="handleBack">Go Back</button>
  <button @click="handleForward">Go Forward</button>
  <router-view/>
</template>
<script>
  export default {
    methods: {
      handleRedirect(){
        this.$router.push({name: "home"})
      },
      handleBack(){
        this.$router.go(-1)
      },
      handleForward(){
        this.$router.go(1)
      }
    },
  }
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  background: red;
  color: white;
  padding: 5px;
  border-radius: 5px;
}

button {
  margin: 0 10px;
  padding: 10px;
  border: none;
  border-radius: 4px;
}
</style>
