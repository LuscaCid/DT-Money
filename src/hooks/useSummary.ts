import { useContextSelector } from "use-context-selector"
import { TransactionsContext } from "../contexts/transactionsContext"
import { useMemo } from "react"
export function useSummary() {
    const transactions = useContextSelector(
      TransactionsContext, 
      (context) => {
      return context.transactions
    })
    //o useMemo me ajuda a criar uma variavel que so sera recriada no momento em que o valor da dependencia mudar.
    //nao quando o componente pai for renderizado novamente e isso é otimo, pois eu nao vou precisar recriar este calculo

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
    return summary
}
