<template>
  <form class="searchForm" @submit.prevent>
    <label for="searchQuery">
      <input type="text" name="searchQuery" class="searchQuery" placeholder="Search..." />
    </label>
    <button class="searchButton">SEARCH</button>
  </form>
</template>

<script>
export default {
  name: 'search-form',
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
