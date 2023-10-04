<template>
  <div>
    <form class="searchForm" @submit.prevent>
      <label for="searchQuery">
        <input type="text" name="searchQuery" class="searchQuery" placeholder="Search..."/>
      </label>
      <button class="searchButton">SEARCH</button>
    </form>

    <div class="characters">
      <div v-for="character in characters" :key="character.id" class="characters__item">
        <h2 class="character__item_name">{{ character.name }}</h2>
        <img :src="character.image" alt="character" class="avatar"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [],
    };
  },
  methods: {
    async getCharacters() {
      try {
        const responce = await fetch('https://rickandmortyapi.com/api/character');
        if (responce.status === 200) {
          const data = await responce.json();
          this.characters = data.results;
        }
      } catch (e) {
        console.log(e);
      }
    },
  },
  mounted() {
    this.getCharacters();
  },
};
</script>

<style>
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

.characters {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 50px auto;
}

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
