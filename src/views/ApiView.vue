<template>
  <div>
    <search-form @find="findCharacter"/>
    <div class="characters">
      <character-item
        v-for="character in characters"
        :character="character"
        :key="character.id"
        @show="showModal"
      />
    </div>
    <div class="pagination">
      <my-button @click="prevPage" :class="currentPage === 1 ? 'disableButton' : ''">
        Prev
      </my-button>
      <span class="currentPage"> {{ currentPage }} / {{ pages }}</span>
      <my-button @click="nextPage" :class="currentPage === pages ? 'disableButton' : ''">
        Next
      </my-button>
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
      query: '',
      character: null,
      currentPage: 1,
      pages: 1,
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

    setQuery(name) {
      this.query = name;
    },

    findCharacter(name) {
      this.getCharacters(name);
      this.setQuery(name);
      this.currentPage = 1;
    },

    nextPage() {
      if (this.currentPage < this.pages) {
        this.currentPage += 1;
        this.getCharacters(this.query, this.currentPage);
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.getCharacters(this.query, this.currentPage);
      }
    },

    async getCharacters(name = '', page = '') {
      try {
        const responce = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${name}`);
        if (responce.status === 200) {
          const data = await responce.json();
          this.characters = data.results;
          this.pages = data.info.pages;
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

.pagination {
  margin-bottom: 20px;
}

.currentPage {
  display: inline-block;
  width: 50px;
}
</style>
