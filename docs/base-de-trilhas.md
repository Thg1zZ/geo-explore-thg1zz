# Base de trilhas

Os dados ficam em `data/trilhas.json`. Todo o conteúdo é fictício.

```json
{
  "trilhas": [
    {
      "id": "javascript",
      "nome": "JavaScript",
      "descricao": "...",
      "cargaHoraria": 40,
      "niveis": {
        "iniciante": {
          "modulos": ["..."],
          "desafios": [{ "titulo": "...", "enunciado": "...", "exemplo": "..." }]
        },
        "intermediario": { "...": "..." },
        "avancado": { "...": "..." }
      }
    }
  ]
}
```

## Adicionar uma trilha

1. Acrescente um objeto em `trilhas` com `id` em minúsculas (é o nome usado nos comandos).
2. Preencha os três níveis (`iniciante`, `intermediario`, `avancado`), cada um com pelo menos um módulo e um desafio.
3. Rode `npm test`. Um dos testes valida a estrutura de todas as trilhas.

Os comandos, a ajuda da CLI e as mensagens de erro passam a reconhecer a nova tecnologia sem nenhuma alteração no código.
