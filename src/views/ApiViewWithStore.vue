<template>
  <div>
    <search-form @find="findCharacter"/>
    <my-loader v-if="isLoading"/>
    <div v-else-if="characters.length">
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
    <div v-else class="notresult">Nothing was found for your request...</div>
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
import { mapState, mapActions, mapMutations } from 'vuex';

export default {
  components: {
    SearchForm, CharacterItem, MyModal, CharacterDetail,
  },
  data() {
    return {
      isModal: false,
      query: '',
      character: null,
      currentPage: 1,
      pages: 1,
      picked: '',
    };
  },
  computed: {
    ...mapState({
      characters: (state) => state.api.characters,
      isLoading: (state) => state.api.isLoading,
    }),
  },
  methods: {
    ...mapMutations({

    }),
    ...mapActions({
      getCharacters: 'getCharacters',

    }),
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

    setPick(picked) {
      this.picked = picked;
    },

    findCharacter(name, picked) {
      this.getCharacters(name, 1, picked);
      this.setQuery(name);
      this.setPick(picked);
      this.currentPage = 1;
    },

    nextPage() {
      if (this.currentPage < this.pages) {
        this.currentPage += 1;
        this.getCharacters(this.query, this.currentPage, this.picked);
      }
    },

    prevPage() {
      if (this.currentPage > 1) {
        this.currentPage -= 1;
        this.getCharacters(this.query, this.currentPage, this.picke);
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

.notresult {
  margin: 50px auto;
  text-align: center;
}

.pagination {
  margin-bottom: 20px;
}

.currentPage {
  display: inline-block;
  width: 50px;
}
</style>
