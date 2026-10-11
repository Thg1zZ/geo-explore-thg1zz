import { buscarTrilha } from '../base.js';

export function trilha(tecnologia) {
  const { nome, descricao, cargaHoraria, niveis } = buscarTrilha(tecnologia);

  const secoes = Object.entries(niveis).map(([nivel, { modulos }]) =>
    [`${nivel}:`, ...modulos.map((modulo, i) => `  ${i + 1}. ${modulo}`)].join('\n')
  );

  return [`Trilha ${nome} (${cargaHoraria}h)`, descricao, '', secoes.join('\n\n')].join('\n');
}
