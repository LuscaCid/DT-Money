# Mais um projeto com react

## Desta vez introduzindo o DT-Money

## Aprendizados 

Aprendi a lidar com a maravilhosa biblioteca radix e utilizar dos seus components

utilizei neste projeto o GroupRadio e o Dialog

## JSON SERVER
instalando a dependencia para usar no projeto e ja criar as chamadas para a api com axios de dentro do meu projeto react.

npm install json-server -D para alocar como dependencia de desenvolvimento

cria-se um arquivo na raiz do projeto com extensao .json

e apos isso é so rodar o comando com o executador de pacotes: npx

`````bash
npx json-server server.json -w

`````

isso basicamente para ele ficar observando alteracoes que forem feitas na base de dados

````js
const summary = transactions.reduce((acc, transaction) => {
    if(transaction.type === 'income') {
      acc.income += transaction.price
    }
    if(transaction.type === 'outcome'){
      acc.outcome += transaction.price
    }
    acc.total = acc.income - acc.outcome
    return acc
  }, {
    income : 0,
    outcome : 0,
    total : 0
  })
````

estrutura padrao de um reduce, no primeiro parametro se passa a funcao que vai trabalhar com os dados que irao ser reduzidos do array e no segundo parametro o valor inicial que este elemento acumulador terá.

no primeiro argumento da callback passada se encontra o acumulador que é do tipo, que possui o formato passado no segundo argumento da funcao reduce.

e no segundo argumento da callback, se encontra cada elemento do array que está reduzindo.

## useMemo e useCallback

