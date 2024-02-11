import { SummaryCard, SummaryContainer } from "./styles"
import greenArrow from '../../assets/greenarrow.svg'
import redArrow from '../../assets/redarrow.svg'
import moneyIcon from '../../assets/moneyIcon.svg'
import { priceFormatter } from "../../utils/formatter"
import { useSummary } from "../../hooks/useSummary"
export const Summary = () => {

  const summary = useSummary()

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