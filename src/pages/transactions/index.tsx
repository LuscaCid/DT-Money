
import { Header } from "../../components/Header"
import { InputSearch } from "../../components/InputSearch"
import { Summary } from "../../components/Summary"
import { PriceTd, TableComponent, TableContainer, TableData } from "./styles"

export const Transactions= () => {
  
  return (
    <div>
      <Header />
      <Summary />
      <InputSearch />
      <TableContainer>
        <TableComponent>
          <tbody>
            <tr>
              <TableData>Hamburger</TableData>
              <PriceTd variant = "income">R$ 12.000,00</PriceTd>
              <TableData>Venda</TableData>
              <TableData>13/04/2021</TableData>
            </tr>
            <tr>
              <TableData>Hamburger</TableData>
              <PriceTd variant="outcome">R$ 12.000,00</PriceTd>
              <TableData>Venda</TableData>
              <TableData>13/04/2021</TableData>
            </tr>
            
          </tbody>
        </TableComponent>
      </TableContainer>
    </div>
  )
} 