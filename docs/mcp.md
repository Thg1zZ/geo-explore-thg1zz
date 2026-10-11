# Servidor MCP

O MCP (Model Context Protocol) permite que outras ferramentas, como o Claude Code ou o Claude Desktop, usem os comandos do Geo-explore como *tools*.

O servidor roda via `stdio`: a ferramenta cliente inicia o processo e conversa com ele pela entrada e saída padrão.

## Tools

| Tool | Parâmetros |
|---|---|
| `trilha` | `tecnologia` |
| `desafio` | `tecnologia`, `nivel` |
| `certificado` | `nome`, `tecnologia` |

Entradas inválidas retornam a mensagem de erro com `isError: true`, sem derrubar o servidor.

## Conectar no Claude Code

Na raiz do projeto:

```bash
claude mcp add geo-explore -- node src/mcp-server.js
```

Depois, peça algo como "gere um desafio de Python nível avançado".

## Conectar no Claude Desktop

Adicione ao `claude_desktop_config.json`, usando o caminho absoluto do projeto:

```json
{
  "mcpServers": {
    "geo-explore": {
      "command": "node",
      "args": ["C:/caminho/para/geo-explore-thg1zz/src/mcp-server.js"]
    }
  }
}
```

## Testar manualmente

```bash
npx @modelcontextprotocol/inspector node src/mcp-server.js
```
