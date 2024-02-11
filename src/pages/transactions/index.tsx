
import { useEffect, useState } from "react"
import { Header } from "../../components/Header"
import { InputSearch } from "../../components/InputSearch"
import { Summary } from "../../components/Summary"
import { PriceTd, TableComponent, TableContainer, TableData } from "./styles"
import { api } from "../../services/api"

interface ITransactionsType {
  id : number
  createdAt: string;
  category: string;
  price: string;
  type: "income" | "outcome";
  description : string
}

export const Transactions = () => {
  const [transactionsDisplay, setTransactionsDisplay] = useState<ITransactionsType [] | any>([])

  const loadTransactionsFromDatabase = async () : Promise<void> =>{
    const { data } = await api.get<ITransactionsType[]>('/transactions')
    setTransactionsDisplay(data)
  }
  
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
            transactionsDisplay.length > 0 && transactionsDisplay.map((element : ITransactionsType) =>{
              return (
                <tr key={element.id}>
                  <TableData>{element.description}</TableData>
                  <PriceTd variant={element.type}>{element.price}</PriceTd>
                  <TableData>{element.category}</TableData>
                  <TableData>{element.createdAt}</TableData>
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