export function updateGameBoardSuccess(next, index) {
  return {
    type: '@round/UPDATE_GAMEBOARD_SUCCESS',
    payload: { next, index }
  }
}

export function endGame() {
  return {
    type: '@round/FINISHED',
  }
}

export function startGame(tabuleiro, next) {
  return {
    type: '@round/START',
    payload: { tabuleiro, next }
  }
}


