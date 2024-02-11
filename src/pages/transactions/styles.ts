import styled from 'styled-components'

export const TableContainer = styled.section`
  width: 100%;
  max-width: 1100px;
  margin: 0 auto; 
  padding : 0 1.5rem ;
`

export const TableComponent =  styled.table`
  border-collapse: separate;
  border-spacing: 0 .5rem ;
  width: 100%;

`
export const TableData = styled.td`
  background: ${({theme}) => theme['gray-700']};
  padding:1.25rem 2rem ;
  color: ${({theme}) => theme['gray-300']};
  &:first-child {
    width: 45%;
    border-radius: 5px 0 0 5px;
  }  
  &:last-child {
    border-radius: 0 5px 5px 0;
  }

`
interface TablePriceProps {
  variant : "income" | "outcome"
}
export const PriceTd = styled(TableData)<TablePriceProps>`
  color:  ${({theme, variant}) => variant === "income" ? theme['green-300'] : theme['red-300']};
 
  


`