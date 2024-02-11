import { SummaryCard, SummaryContainer } from "./styles"
import greenArrow from '../../assets/greenarrow.svg'
import redArrow from '../../assets/redarrow.svg'
import moneyIcon from '../../assets/moneyIcon.svg'
import { useTransactionsContext } from "../../contexts/transactionsContext"
import { priceFormatter } from "../../utils/formatter"
export const Summary = () => {

  const { transactions } = useTransactionsContext()

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
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span className="type">Entradas</span>
          <img src={greenArrow} alt="green-arrow" />
        </header>
        <span className="quantity">
          {priceFormatter.format(summary.income)}
        </span>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span className="type">Saídas</span>
          <img src={redArrow} alt="green-arrow" />
        </header>
        <span className="quantity">
          {priceFormatter.format(summary.outcome)}
        </span>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span className="type">Total</span>
          <img src={moneyIcon} alt="green-arrow" />
        </header>
        <span className="quantity">
          {priceFormatter.format(summary.total)}
        </span>
      </SummaryCard>
      
    </SummaryContainer>
  )
}