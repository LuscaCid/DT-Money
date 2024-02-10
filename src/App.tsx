import { ThemeProvider } from "styled-components"
import { GlobalStyle } from "./styles/GlobalStyle"
import { defaultTheme } from "./styles/themes/DefaultThemes"
import { Transactions } from "./pages/transactions"
export function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyle />
        <Transactions />
    </ThemeProvider>
  )
}

