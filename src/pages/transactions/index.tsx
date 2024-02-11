
import { PriceTd, TableComponent, TableContainer, TableData } from "./styles"
import { useTransactionsContext } from "../../contexts/transactionsContext"
import { ITransactionsType } from "../../@types/transactions"
import { InputSearch } from "../../components/InputSearch"
import { Summary } from "../../components/Summary"
import { Header } from "../../components/Header"
import { useEffect } from "react"
import { dateFormatter, priceFormatter } from "../../utils/formatter"

export const Transactions = () => {
  const {transactions, loadTransactionsFromDatabase} = useTransactionsContext()  
  useEffect(() => {
    loadTransactionsFromDatabase()
  }, [])
  
  return (
    <div>
      <Header />
      <Summary />
      <InputSearch />
      <TableContainer>
        <TableComponent>
          <tbody>
           {
            transactions.length > 0 && transactions.map((element : ITransactionsType) =>{
              return (
                <tr key={element.id}>
                  <TableData>{element.description}</TableData>
                  <PriceTd variant={element.type}>
                    {element.type === "outcome" && '- '}
                    {priceFormatter.format(element.price)}
                    </PriceTd>
                  <TableData>{element.category}</TableData>
                  <TableData>{dateFormatter.format(new Date(element.createdAt))}</TableData>
                </tr>
              )
            })
           }        
          </tbody>
        </TableComponent>
      </TableContainer>
    </div>
  )
} 