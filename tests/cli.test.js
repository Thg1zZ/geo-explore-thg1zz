import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { describe, it } from 'node:test';

const cli = (...args) => spawnSync(process.execPath, ['src/cli.js', ...args], { encoding: 'utf8' });

describe('cli', () => {
  it('executa um comando', () => {
    const { status, stdout } = cli('trilha', 'java');
    assert.equal(status, 0);
    assert.match(stdout, /Trilha Java/);
  });

  it('mostra a ajuda sem argumentos', () => {
    const { status, stdout } = cli();
    assert.equal(status, 0);
    assert.match(stdout, /Uso:/);
  });

  it('falha com comando desconhecido', () => {
    assert.equal(cli('xpto').status, 1);
  });

  it('mostra o erro e falha com tecnologia inválida', () => {
    const { status, stderr } = cli('trilha', 'cobol');
    assert.equal(status, 1);
    assert.match(stderr, /não encontrada/);
  });
});
