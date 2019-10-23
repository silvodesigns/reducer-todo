//define my initial state
const initialState = [
    {
      item: 'Learn about reducers',
      completed: false,
      id: 1
    }]



//create a function reducer
function reducer(state, action) {
    switch (action.type) {
      case 'ADD_TODO':
        return [...state, {
            item: action.payload,
            completed: false,
            id: state.length + 1
        }];
          
      
      default:
        return state;
    }
  }

  export default reducer;
  export { initialState };
  
  