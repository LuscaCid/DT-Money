# Mais um projeto com react

# Desta vez introduzindo o DT-Money

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

## useMemo, useCallback

usados para estabelecer uma forma de nao realocar em memoria funcoes ou variaveis que nao precisem ser recriadas 
devido a alteracoes em componentes pais, apenas passando um array de dependencias...

````js
const summary = useMemo(() => {
      transactions.reduce((acc, transaction) => {
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
    }, [transactions])
````

transactions é um array de objetos que contém todas as transacoes da aplicacoes, este calculo so sera realizado 
novamente quando o array aumentar ou diminuir de tamanho

`````js
const [transactions, setTransactions] = useState<ITransactionsType []>([])

const fetchTransactions = useCallback(async (query? : string) : Promise<void> =>{
    const response = await api.get('transactions', {
        params : {
            description : query
        }
    })
    setTransactions(response.data)
}, [])

//se caso eu possuir uma funcao que eu quero que apenas seja realocada em memoria uma unica vez quando a aplicação
//iniciar, eu posso usar o useCallback passando as dependencias de valores que ela possui para nao ficar desatualizada
const postTransaction = useCallback(async (data : ITransactionsType ) => {
    const response = await api.post('transactions', {
        description : data.description,
        price : data.price,
        category : data.category,
        type : data.type,
        createdAt : new Date().toISOString()
      })
    setTransactions(prevState => [response.data ,...prevState])
}, []) 
````