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
    <div class="radioButtons">
      Gender:
      <label for="All">
        <input type="radio" id="All" value="" v-model="picked" /> All
      </label>
      <label for="Male">
        <input type="radio" id="Male" value="Male" v-model="picked" /> Male
      </label>
      <label for="Female">
        <input type="radio" id="Female" value="Female" v-model="picked" /> Female
      </label>
      <label for="Genderless">
        <input type="radio" id="Genderless" value="Genderless" v-model="picked" /> Genderless
      </label>
      <label for="Unknown">
        <input type="radio" id="Unknown" value="Unknown" v-model="picked" /> Unknown
      </label>
    </div>
  </form>
</template>

<script>
export default {
  name: 'search-form',
  data() {
    return {
      queryString: '',
      picked: '',
    };
  },
  methods: {
    findCharacters() {
      this.$emit('find', this.queryString, this.picked);
    },
  },
  watch: {
    picked() {
      this.findCharacters();
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

.radioButtons {
  padding-top: 15px;
}

.radioButtons label {
  margin-right: 10px;
  margin-left: 10px;
}
</style>
