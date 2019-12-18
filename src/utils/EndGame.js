export function Verifica(tabuleiro) {

  const seguenciaVencedora = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (let i = 0; i < seguenciaVencedora.length; i++) {
    const [a, b, c] = seguenciaVencedora[i];
    if (tabuleiro[a] && tabuleiro[a] === tabuleiro[b] && tabuleiro[a] === tabuleiro[c]) {
      return seguenciaVencedora[i]
    }
  }
  return []
}

