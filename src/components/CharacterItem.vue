<template>
  <div class="characters__item" @click="showModal" @keyDown="showModal">
    <h2 class="character__item_name">{{ character.name }}</h2>
    <img :src="character.image" alt="character" class="avatar" />
  </div>
</template>

<script>
export default {
  props: {
    character: {
      type: Object,
      required: true,
    },
  },
  methods: {
    showModal() {
      this.$emit('show', this.character);
    },
  },
};
</script>

<style scoped>
.characters__item {
  width: 224px;
  padding: 15px 12px;
  border: 1px solid #2c3e50;
  border-radius: 4px;
}

.character__item_name {
  height: 45px;
  font-size: 1.2em;
}

.avatar {
  display: block;
  margin: 0 auto;
  width: 200px;
}
</style>
