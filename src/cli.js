#!/usr/bin/env node
import { listarTrilhas } from './base.js';
import { certificado } from './commands/certificado.js';
import { desafio } from './commands/desafio.js';
import { trilha } from './commands/trilha.js';

const comandos = { trilha, desafio, certificado };

const ajuda = `Uso:
  geo-explore trilha <tecnologia>
  geo-explore desafio <tecnologia> <nivel>
  geo-explore certificado "<nome>" <tecnologia>

Tecnologias: ${listarTrilhas().map((t) => t.id).join(', ')}
Níveis: iniciante, intermediario, avancado`;

const [nomeComando, ...args] = process.argv.slice(2);
const comando = Object.hasOwn(comandos, nomeComando ?? '') ? comandos[nomeComando] : undefined;

if (!comando) {
  console.log(ajuda);
  process.exit(nomeComando ? 1 : 0);
}

try {
  console.log(comando(...args));
} catch (erro) {
  console.error(erro.message);
  process.exit(1);
}
