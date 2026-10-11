import assert from 'node:assert/strict';
import { describe, it } from 'node:test';
import { listarTrilhas } from '../src/base.js';
import { certificado } from '../src/commands/certificado.js';
import { desafio } from '../src/commands/desafio.js';
import { trilha } from '../src/commands/trilha.js';

describe('base de trilhas', () => {
  it('toda trilha tem os três níveis com módulos e desafios', () => {
    for (const { id, niveis } of listarTrilhas()) {
      assert.deepEqual(Object.keys(niveis), ['iniciante', 'intermediario', 'avancado'], id);
      for (const { modulos, desafios } of Object.values(niveis)) {
        assert.ok(modulos.length > 0 && desafios.length > 0, id);
      }
    }
  });
});

describe('trilha', () => {
  it('apresenta nome, carga horária e módulos de todos os níveis', () => {
    const saida = trilha('javascript');
    assert.match(saida, /Trilha JavaScript \(40h\)/);
    assert.match(saida, /iniciante:\n {2}1\. Variáveis e tipos/);
    assert.match(saida, /avancado:/);
  });

  it('ignora maiúsculas e espaços', () => {
    assert.equal(trilha('  PYTHON '), trilha('python'));
  });

  it('lista as opções quando a tecnologia não existe', () => {
    assert.throws(() => trilha('cobol'), /Opções: javascript, python, java/);
    assert.throws(() => trilha(), /não encontrada/);
  });
});

describe('desafio', () => {
  it('sorteia um desafio do nível informado', () => {
    assert.match(desafio('java', 'iniciante', () => 0), /Desafio Java \(iniciante\): Tabuada/);
    assert.match(desafio('java', 'iniciante', () => 0.99), /Palíndromo/);
  });

  it('lista as opções quando o nível não existe', () => {
    assert.throws(() => desafio('java', 'expert'), /Opções: iniciante, intermediario, avancado/);
    assert.throws(() => desafio('java', 'toString'), /não encontrado/);
  });
});

describe('certificado', () => {
  const data = new Date('2026-10-10T12:00:00Z');

  it('gera certificado com aluno, trilha, carga horária e data', () => {
    const saida = certificado('Thiago', 'python', data);
    assert.match(saida, /Certificamos que Thiago/);
    assert.match(saida, /concluiu a trilha Python/);
    assert.match(saida, /36 horas/);
    assert.match(saida, /Data: 10\/10\/2026/);
    assert.match(saida, /Código: GEO-[0-9A-F]{8}/);
  });

  it('gera o mesmo código para os mesmos dados', () => {
    assert.equal(certificado('Thiago', 'python', data), certificado('Thiago', 'python', data));
    assert.notEqual(certificado('Thiago', 'python', data), certificado('Ana', 'python', data));
  });

  it('exige o nome', () => {
    assert.throws(() => certificado('  ', 'python'), /Informe o nome/);
  });
});
