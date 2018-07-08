import FETCH_DATA from './actions/shared'

export default function loaderClass (state='block', action) {
    switch (action.type) {
       case FETCH_DATA:
          return 'hidden';
      default:
          return state
    }
}