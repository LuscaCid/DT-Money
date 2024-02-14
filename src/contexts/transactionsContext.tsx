import { 
    ITransactionsContext, 
    ITransactionsType, 
    TransactionsContextProviderType 
} from "../@types/transactions";
import {useCallback, useState } from "react";
import { createContext } from "use-context-selector";
import { api } from "../services/api";

export const TransactionsContext = createContext({} as ITransactionsContext)

export const TransactionsContextProvider = ({children}: TransactionsContextProviderType) => {
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

    return (
        <TransactionsContext.Provider value={{
            transactions,
            postTransaction,
            fetchTransactions
        }}>
            {children}
        </TransactionsContext.Provider>
    )
}
