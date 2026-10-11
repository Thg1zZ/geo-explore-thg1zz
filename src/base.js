import { readFileSync } from 'node:fs';

const { trilhas } = JSON.parse(readFileSync(new URL('../data/trilhas.json', import.meta.url), 'utf8'));

export const listarTrilhas = () => trilhas;

export function buscarTrilha(tecnologia) {
  const id = String(tecnologia ?? '').trim().toLowerCase();
  const trilha = trilhas.find((t) => t.id === id);
  if (!trilha) {
    throw new Error(`Tecnologia "${tecnologia ?? ''}" não encontrada. Opções: ${trilhas.map((t) => t.id).join(', ')}.`);
  }
  return trilha;
}

export function buscarNivel(trilha, nivel) {
  const id = String(nivel ?? '').trim().toLowerCase();
  const dados = Object.hasOwn(trilha.niveis, id) ? trilha.niveis[id] : undefined;
  if (!dados) {
    throw new Error(`Nível "${nivel ?? ''}" não encontrado. Opções: ${Object.keys(trilha.niveis).join(', ')}.`);
  }
  return dados;
}
