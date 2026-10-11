# Uso da CLI

```bash
node src/cli.js <comando> [argumentos]
```

Sem argumentos, a CLI mostra a ajuda. Para usar o comando `geo-explore` em qualquer pasta, rode `npm link` na raiz do projeto.

## trilha

```bash
node src/cli.js trilha javascript
```

```
Trilha JavaScript (40h)
Da base da linguagem até assincronismo e testes.

iniciante:
  1. Variáveis e tipos
  2. Condicionais e laços
  ...
```

## desafio

```bash
node src/cli.js desafio java iniciante
```

Sorteia um dos desafios do nível. Cada execução pode trazer um desafio diferente.

## certificado

```bash
node src/cli.js certificado "Thiago Gomes" javascript
```

Gera um certificado com o nome, a trilha, a carga horária, a data de hoje e um código fictício. O código é derivado do nome, da trilha e da data, então os mesmos dados geram sempre o mesmo código.

## Erros

Tecnologia ou nível inexistente encerra com código de saída `1` e lista as opções válidas:

```
Tecnologia "cobol" não encontrada. Opções: javascript, python, java.
```
