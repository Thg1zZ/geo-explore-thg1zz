#!/usr/bin/env node
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { listarTrilhas } from './base.js';
import { certificado } from './commands/certificado.js';
import { desafio } from './commands/desafio.js';
import { trilha } from './commands/trilha.js';

const servidor = new McpServer({ name: 'geo-explore-thg1zz', version: '1.0.0' });

const responder = (executar) => async (args) => {
  try {
    return { content: [{ type: 'text', text: executar(args) }] };
  } catch (erro) {
    return { content: [{ type: 'text', text: erro.message }], isError: true };
  }
};

const tecnologia = z.string().describe(`Tecnologia da trilha: ${listarTrilhas().map((t) => t.id).join(', ')}`);

servidor.registerTool(
  'trilha',
  { description: 'Apresenta o plano de estudos de uma tecnologia.', inputSchema: { tecnologia } },
  responder(({ tecnologia }) => trilha(tecnologia))
);

servidor.registerTool(
  'desafio',
  {
    description: 'Gera um desafio de código para a tecnologia e o nível informados.',
    inputSchema: { tecnologia, nivel: z.string().describe('iniciante, intermediario ou avancado') }
  },
  responder(({ tecnologia, nivel }) => desafio(tecnologia, nivel))
);

servidor.registerTool(
  'certificado',
  {
    description: 'Cria um certificado fictício de conclusão de uma trilha.',
    inputSchema: { nome: z.string().describe('Nome de quem concluiu a trilha'), tecnologia }
  },
  responder(({ nome, tecnologia }) => certificado(nome, tecnologia))
);

await servidor.connect(new StdioServerTransport());
