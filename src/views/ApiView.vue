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
  <my-modal v-if="isModal" @hide="hideModal">
    <character-detail @click.stop :character="character" />
  </my-modal>
</template>

<script>
import SearchForm from '@/components/SearchForm.vue';
import CharacterItem from '@/components/CharacterItem.vue';
import MyModal from '@/components/UI/MyModal.vue';
import CharacterDetail from '@/components/CharacterDetail.vue';

export default {
  components: {
    SearchForm, CharacterItem, MyModal, CharacterDetail,
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
.characters {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  max-width: 1200px;
  margin: 50px auto;
}

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
