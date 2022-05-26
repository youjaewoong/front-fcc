//***********************************************************************************
//* 이름:
//*
//* 설명:
//*
//* 참고:
//*
//*
//***********************************************************************************

const common = {
  namespaced: true,

  state: {
    postList: [],
  },

  getters: {
    postList: (state) => state.postList,
  },

  mutations: {
    SET_POST_LIST: (state, payload) => {
      state.postList = payload;
    },
  },

  actions: {
    setPostList: ({ commit }, payload) => {
      commit('SET_POST_LIST', payload);
    },
  },
};

export default common;
