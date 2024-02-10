import { SummaryCard, SummaryContainer } from "./styles"
import greenArrow from '../../assets/greenarrow.svg'
import redArrow from '../../assets/redarrow.svg'
import moneyIcon from '../../assets/moneyIcon.svg'
export const Summary = () => {
  return (
    <SummaryContainer>
      <SummaryCard>
        <header>
          <span className="type">Entradas</span>
          <img src={greenArrow} alt="green-arrow" />
        </header>
        <span className="quantity">
          R$780,00
        </span>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span className="type">Saídas</span>
          <img src={redArrow} alt="green-arrow" />
        </header>
        <span className="quantity">
          R$200,00
        </span>
      </SummaryCard>
      <SummaryCard>
        <header>
          <span className="type">Total</span>
          <img src={moneyIcon} alt="green-arrow" />
        </header>
        <span className="quantity">
          R$1200,00
        </span>
      </SummaryCard>
      
    </SummaryContainer>
  )
}