const CHECK_STATUS   = 'CHECK_STATUS';

export default function reducer(state = [], action = {}) {
  switch (action.type) {
    case CHECK_STATUS:
      return 'Under construction';
      
    default: return state;
  }
}


export function statusChecker(title) {
  return {
     type: CHECK_STATUS ,
    };
}


