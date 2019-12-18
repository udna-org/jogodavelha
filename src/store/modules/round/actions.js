export function updateGameBoardSuccess(index) {
  return {
    type: '@round/UPDATE_GAMEBOARD_SUCCESS',
    payload: { index }
  }
}

export function endGame() {
  return {
    type: '@round/FINISHED',
  }
}

export function startGame(valor) {
  return {
    type: '@round/START',
    payload: { valor }
  }
}


