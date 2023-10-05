export default {
  state: () => ({
    characters: [],
    isModal: false,
    query: '',
    character: null,
    currentPage: 1,
    pages: 1,
    picked: '',
    isLoading: false,
  }),
  getters: {
  },
  mutations: {
    setCharacters(state, characters) {
      state.characters = characters;
    },
    setIsModal(state, isModal) {
      state.isModal = isModal;
    },
    setQuery(state, query) {
      state.query = query;
    },
    setCharacter(state, character) {
      state.character = character;
    },
    setCurrentPage(state, currentPage) {
      state.currentPage = currentPage;
    },
    setPages(state, pages) {
      state.pages = pages;
    },
    setPicked(state, picked) {
      state.picked = picked;
    },
    setIsLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
  },
  actions: {
    async getCharacters({ commit }, name = '', page = '', gender = '') {
      try {
        commit('setIsLoading', true);
        const responce = await fetch(`https://rickandmortyapi.com/api/character?page=${page}&name=${name}&gender=${gender}`);
        if (responce.status === 200) {
          const data = await responce.json();
          commit('setCharacters', data.results);
          commit('setPages', data.info.pages);
        } else {
          commit('setCharacters', []);
          commit('setPages', 1);
        }
      } catch (e) {
        console.log(e);
      } finally {
        commit('setIsLoading', false);
      }
    },
  },
};
