export interface ITransactionsType {
    id : number
    createdAt: string;
    category: string;
    price: number;
    type: "income" | "outcome";
    description : string
}
  
export interface ITransactionsContext{
    transactions : ITransactionsType []
    addNewTransaction : (newTransaction : ITransactionsType) => void
    loadTransactionsFromDatabase : () => void
}

export interface TransactionsContextProviderType {
    children : ReactNode
}