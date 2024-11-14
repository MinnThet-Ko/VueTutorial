<template>
  <div>
    <input type="text" v-model="searchTerm">
    <p>Seach term - {{searchTerm}}</p>
    <div v-for="name in filteredCharacters" :key="name">
      {{ name }}
    </div>
    <button @click="handleStopClick">Stop</button>
  </div>
</template>

<script>
import { computed, ref, watch, watchEffect } from 'vue';



export default {
  name: 'HomeView',
  setup(){
    const searchTerm = ref('')
    const characters = ref(['Venti', 'Zhongli','Ei', 'Nahida', 'Furina', 'Mavuika'])

    const stopWatch = watch(searchTerm, () => {
      console.log("I am being watched!")
    })

    const stopWatchEffect = watchEffect(
      console.log("I see everthing.", searchTerm.value)
    )

    const filteredCharacters = computed(() => {
      return characters.value.filter((name) => name.includes(searchTerm.value))
    })

    const handleStopClick = () =>{
      stopWatch()
      stopWatchEffect()
    }

    return {searchTerm, characters, filteredCharacters, handleStopClick}
  }

}
</script>
