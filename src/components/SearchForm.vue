<template>
  <form class="searchForm" @submit.prevent>
    <label for="searchQuery">
      <input type="text"
        name="searchQuery"
        class="searchQuery"
        placeholder="Search..."
        v-model="queryString"
      />
    </label>
    <my-button @click="findCharacters">SEARCH</my-button>
  </form>
</template>

<script>
export default {
  name: 'search-form',
  data() {
    return {
      queryString: '',
    };
  },
  methods: {
    findCharacters() {
      this.$emit('find', this.queryString);
    },
  },
};
</script>

<style scoped>
.searchForm {
  max-width: 1200px;
  margin: 0px auto;
}

.searchQuery {
  width: 500px;
  margin-right: 25px;
  height: 32px;
  padding: 0 15px;
}

.searchButton {
  width: 100px;
  height: 32px;
  background-color: white;
}
</style>
