import { 
    ITransactionsContext, 
    ITransactionsType, 
    TransactionsContextProviderType 
} from "../@types/transactions";
import { createContext, useContext, useState } from "react";
import { api } from "../services/api";


export const TransactionsContext = createContext({} as ITransactionsContext)

export const TransactionsContextProvider = ({children}: TransactionsContextProviderType) => {
    const [transactions, setTransactions] = useState<ITransactionsType [] | any>([])

    const loadTransactionsFromDatabase = async () : Promise<void> =>{
        const { data } = await api.get<ITransactionsType[]>('/transactions')
        setTransactions(data)
    }

    const addNewTransaction = (newTransaction : ITransactionsType ) => {
        return console.log(newTransaction)
    }

    return (
        <TransactionsContext.Provider value={{
            transactions,
            addNewTransaction,
            loadTransactionsFromDatabase
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}
export const useTransactionsContext = () => {
    const context = useContext(TransactionsContext)
    return context
}