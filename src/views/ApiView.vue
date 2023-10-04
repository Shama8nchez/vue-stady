<template>
  <div>
    <search-form></search-form>
    <div class="characters">
      <character-item
        v-for="character in characters"
        :character="character"
        :key="character.id"
        @show="showModal"
      />
    </div>
  </div>

  <div class="modal" v-if="isModal" @click="hideModal" @keyDown="hideModal">
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
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import CharacterItem from '@/components/CharacterItem.vue';

export default {
  components: {
    SearchForm, CharacterItem,
  },
  data() {
    return {
      characters: [],
      isModal: false,
      character: null,
    };
  },
  methods: {
    showModal(character) {
      this.isModal = true;
      this.character = character;
    },

    hideModal() {
      this.isModal = false;
    },

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

.modal {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0,0,0,0.5);
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
