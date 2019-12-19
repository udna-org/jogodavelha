import produce from 'immer'

const INICIAL_STATE = {
  cor: false
}

export default function theme(state = INICIAL_STATE, action) {
  switch(action.type){
    case '@theme/UPDATE_THEME':
      return produce(state, draft => {
        if (draft.cor === true){
          draft.cor =  false
        }else{
          draft.cor = true 
        }
      })
    default:
      return state
  }
};