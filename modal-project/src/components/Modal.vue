<template>
  <div class="backdrop" @click.self="handleBackdropClick">
    <div class="modal" :class="{ halloween: theme === 'halloween' }">
        <slot>Default contents</slot>
        <div class="actions">
            <slot name="links"></slot>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["header", "text", "theme"],
  methods: {
    handleBackdropClick(){
        this.$emit("close")
    }
  }
};
</script>
>
<style scoped>
.backdrop {
  top: 0%;
  left: 0%;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
}

.modal {
  width: 400px;
  margin: 100px auto;
  padding: 20px;
  border-radius: 10px;
  background: wheat;
}

.modal h1 {
  color: teal;
}

.modal.halloween {
  background: black;
  color: orangered;
}
.modal.halloween h1 {
  color: orangered;
}
</style>