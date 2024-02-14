export interface ITransactionsType {
    id? : number
    createdAt: string;
    category: string;
    price: number;
    type: "income" | "outcome";
    description : string
}
  
export interface ITransactionsContext{
    transactions : ITransactionsType []
    postTransaction : (data : ITransactionsType) => Promise<void>
    fetchTransactions : (query? : string) => Promise<void>
}

export interface TransactionsContextProviderType {
    children : ReactNode
}