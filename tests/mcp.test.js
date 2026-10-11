import assert from 'node:assert/strict';
import { after, before, describe, it } from 'node:test';
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StdioClientTransport } from '@modelcontextprotocol/sdk/client/stdio.js';

describe('servidor MCP', () => {
  const cliente = new Client({ name: 'teste', version: '1.0.0' });

  before(() => cliente.connect(new StdioClientTransport({ command: process.execPath, args: ['src/mcp-server.js'] })));
  after(() => cliente.close());

  it('expõe as três tools', async () => {
    const { tools } = await cliente.listTools();
    assert.deepEqual(tools.map((t) => t.name).sort(), ['certificado', 'desafio', 'trilha']);
  });

  it('executa uma tool', async () => {
    const { content, isError } = await cliente.callTool({ name: 'certificado', arguments: { nome: 'Thiago', tecnologia: 'java' } });
    assert.ok(!isError);
    assert.match(content[0].text, /concluiu a trilha Java/);
  });

  it('devolve erro legível para entrada inválida', async () => {
    const { content, isError } = await cliente.callTool({ name: 'desafio', arguments: { tecnologia: 'java', nivel: 'expert' } });
    assert.equal(isError, true);
    assert.match(content[0].text, /Nível "expert" não encontrado/);
  });
});
