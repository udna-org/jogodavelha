import produce from 'immer'

const INICIAL_STATE = {
  table: null,
  vez: "x"
}

export default function round(state = INICIAL_STATE, action) {
  switch(action.type){
    case '@round/UPDATE_GAMEBOARD_SUCCESS':
      return produce( state, draft => {
        draft.table = action.payload.table
      })
    default:
      return state
  }
}