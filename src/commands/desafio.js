import { buscarNivel, buscarTrilha } from '../base.js';

export function desafio(tecnologia, nivel, sortear = Math.random) {
  const trilha = buscarTrilha(tecnologia);
  const { desafios } = buscarNivel(trilha, nivel);
  const { titulo, enunciado, exemplo } = desafios[Math.floor(sortear() * desafios.length)];

  return [`Desafio ${trilha.nome} (${nivel.trim().toLowerCase()}): ${titulo}`, '', enunciado, '', `Exemplo: ${exemplo}`].join('\n');
}
