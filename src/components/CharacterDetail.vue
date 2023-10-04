<template>
  <div class="modal__content" @click.stop>
    <div>
      <img :src="character.image" alt="character" class="avatar" />
    </div>
    <div class="info">
      <h2>{{ character.name }}</h2>
      <p><strong>Species:</strong> {{ character.species }} - {{ character.status }}</p>
      <p><strong>Gender:</strong> {{ character.gender }}</p>
      <p><strong>Origin:</strong> {{ character.origin.name }}</p>
      <p><strong>Location:</strong> {{ character.location.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'character-detail',
  props: {
    character: {
      type: [Object, null],
      required: true,
    },
  },
};
</script>

<style scoped>
.avatar {
  display: block;
  margin: 0 auto;
  width: 200px;
}

.modal__content {
  display: flex;
  gap: 10px;
  width: 500px;
  height: 250px;
  padding: 20px;
  background-color: white;
  border-radius: 5px;
}

.info {
  text-align: left;
}

.info h2 {
  margin-bottom: 15px;
}

.info p {
  margin-bottom: 10px;
}
</style>
