export function jogadorRequest(id){
  return{
    type: '@round/ADD_REQUEST',
    id,
  }
}

export function updateGameBoardSuccess(table) {
  return {
    type: '@round/UPDATE_GAMEBOARD_SUCCESS',
    payload: { table }
  }
}
