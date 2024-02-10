import { defaultTheme } from '../styles/themes/DefaultThemes'
import 'styled-components'

type DefaultThemeType = typeof defaultTheme

declare module 'styled-components'{
  export interface DefaultTheme extends DefaultThemeType {}
}
//DESTA FORMA CONSIGO SOBRESCREVER O DEFAULTTHEME QUE ADVEM DO STYLED-COMPONENTS E CONSEGUIR TER ACESSO AS MINHAS VARIAVEIS DE 
//DENTRO DO DEFAULT THEME QUANDO EU EXTENDO 
