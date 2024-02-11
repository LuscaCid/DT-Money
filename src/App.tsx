import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle"
import { defaultTheme } from "./styles/themes/DefaultThemes"
import { Transactions } from "./pages/transactions"
import { TransactionsContextProvider } from "./contexts/transactionsContext" 
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
      <TransactionsContextProvider>
        <Transactions />
      </TransactionsContextProvider>
    </ThemeProvider>
  )
}

