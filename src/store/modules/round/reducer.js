import produce from 'immer'

const INICIAL_STATE = {
  tabuleiro: ["o","o","x","x"," "," "," "," "," "],//Array(9).fill("x")
  next: "o",
  endGame: false
}

export default function round(state = INICIAL_STATE, action) {
  switch(action.type){
    case '@round/START':
      return produce(state, draft => {
        draft.tabuleiro = action.payload.tabuleiro
        draft.next = action.payload.next
        draft.endGame = false
      })
    case '@round/UPDATE_GAMEBOARD_SUCCESS':
      return produce(state, draft => {
        draft.tabuleiro[action.payload.index] = action.payload.next 
        let next = action.payload.next
        if (next === "x"){
          next = "o"
        }else{
          next = "x"
        }
        draft.next =  next// calcular proximo  

      })
    case '@round/FINISHED':
        return produce(state, draft => {
          draft.endGame = true
    })
    default:
      return state
  }
}