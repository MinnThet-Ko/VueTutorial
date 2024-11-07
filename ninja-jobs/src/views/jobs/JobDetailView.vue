<template>
  <div v-if="job">
    <h1>{{ job.title }}</h1>
    <div>Job Id: {{ job.id }}</div>
    <p>{{job.description}}</p>
  </div>
  <div v-else>
    <p>Loading job detail...</p>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      job: null
    }
  },
  mounted() {
    fetch("http://localhost:3000/jobs/" + this.id)
      .then((resp) => resp.json())
      .then((data) => (this.job= data))
      .catch((err) => console.log(err.message));
  },
};
</script>

<style>
</style>