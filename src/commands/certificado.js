import { createHash } from 'node:crypto';
import { buscarTrilha } from '../base.js';

export function certificado(nome, tecnologia, data = new Date()) {
  const aluno = String(nome ?? '').trim();
  if (!aluno) throw new Error('Informe o nome de quem concluiu a trilha.');

  const trilha = buscarTrilha(tecnologia);
  const dia = data.toLocaleDateString('pt-BR');
  // Código fictício, mas estável: mesmo aluno, trilha e dia geram o mesmo código.
  const codigo = createHash('sha256').update(`${aluno}|${trilha.id}|${dia}`).digest('hex').slice(0, 8).toUpperCase();

  return [
    '========== CERTIFICADO ==========',
    '',
    `Certificamos que ${aluno}`,
    `concluiu a trilha ${trilha.nome},`,
    `com carga horária de ${trilha.cargaHoraria} horas.`,
    '',
    `Data: ${dia}`,
    `Código: GEO-${codigo}`,
    '',
    'Geo-explore Thg1zz (certificado fictício)',
    '================================='
  ].join('\n');
}
