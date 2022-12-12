const ADD_BOOK   = 'ADD_BOOK';
const REMOVE_BOOK = 'REMOVE_BOOK';
let idCounter=0;

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case ADD_BOOK:
      return [...state,{id:idCounter+1,title:action.title}];
    case REMOVE_BOOK:
       return state.filter(stateItem=>stateItem.id!==action.id);     
    default: return state;
  }
}


export function bookCreator(title) {
  return {
     type: ADD_BOOK ,
     title:title
    };
}

export function bookRemover(id) {
  return { 
    type: REMOVE_BOOK ,
    id:id
};
}

