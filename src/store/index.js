import { createStore } from 'redux';

const peopleListReducer = (state = { peopleList: [] }, action) => {
  if (action.type === 'set') {
    return {
      peopleList: state.peopleList = action.peopleList,
    }
  }
  return state;
};

const store = createStore(peopleListReducer);

export default store;
