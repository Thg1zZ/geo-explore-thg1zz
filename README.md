# Geo-explore Thg1zz

CLI e servidor MCP para estudar tecnologia com trilhas fictícias. São três comandos:

| Comando | O que faz |
|---|---|
| `trilha <tecnologia>` | Apresenta o plano de estudos da tecnologia |
| `desafio <tecnologia> <nivel>` | Sorteia um desafio de código do nível informado |
| `certificado "<nome>" <tecnologia>` | Gera um certificado fictício de conclusão |

Tecnologias: `javascript`, `python`, `java`. Níveis: `iniciante`, `intermediario`, `avancado`.

## Começando

Requer Node.js 18 ou superior.

```bash
npm install
node src/cli.js trilha javascript
node src/cli.js desafio python intermediario
node src/cli.js certificado "Seu Nome" java
```

## Testes

```bash
npm test
```

## Estrutura

```
data/trilhas.json        base de trilhas fictícias
src/base.js              leitura e busca na base
src/commands/            trilha, desafio e certificado
src/cli.js               interface de linha de comando
src/mcp-server.js        servidor MCP com os mesmos comandos
tests/                   testes automatizados (node:test)
docs/                    documentação detalhada
```

Os comandos são funções que recebem os argumentos e devolvem texto. A CLI e o servidor MCP apenas chamam essas funções, então a regra fica em um lugar só.

## Documentação

- [Uso da CLI](docs/cli.md)
- [Servidor MCP](docs/mcp.md)
- [Base de trilhas](docs/base-de-trilhas.md)
