import produce from 'immer'

const INICIAL_STATE = {
  tabuleiro: Array(9).fill(" "),
  next: 0,
  endGame: false,
  valores: ["O","X"]
}

export default function round(state = INICIAL_STATE, action) {
  switch(action.type){
    case '@round/START':
      return produce(state, draft => {
        draft.tabuleiro = Array(9).fill(" ")
        draft.next =  action.payload.valor
        draft.endGame = false
      })
    case '@round/UPDATE_GAMEBOARD_SUCCESS':
      return produce(state, draft => {
        if (draft.tabuleiro[action.payload.index] === " "){
          draft.tabuleiro[action.payload.index] = draft.valores[draft.next]
          if (draft.next === 1 ){
            draft.next = 0
          }
          else {
            draft.next = 1
          }
        }
      })
    case '@round/FINISHED':
        return produce(state, draft => {
          draft.endGame = true
    })
    default:
      return state
  }
}