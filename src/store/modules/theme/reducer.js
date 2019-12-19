import produce from 'immer'

const INICIAL_STATE = {
  cor: Boolean(localStorage.getItem("tema"))
}

export default function theme(state = INICIAL_STATE, action) {
  switch(action.type){
    case '@theme/UPDATE_THEME':
      return produce(state, draft => {
        if (draft.cor === true){
          draft.cor =  false
          localStorage.setItem("tema", draft.cor)

        }else{
          draft.cor = true 
          localStorage.setItem("tema", draft.cor)

        }
      })
    default:
      return state
  }
};