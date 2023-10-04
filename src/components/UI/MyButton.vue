<template>
    <button class="button">
      <slot></slot>
    </button>
</template>

<script>
export default {
  name: 'my-button',
};
</script>

<style scoped>
.button {
  width: 100px;
  height: 32px;
  background-color: white;
}

.disableButton {
  border-color: grey;
  color: grey;
}
</style>
