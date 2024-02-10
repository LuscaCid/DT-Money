import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background: ${({theme}) => theme['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  padding: 0 1.5rem;

  .logo-content {
    display: flex;
    gap: 1rem;
    align-items: center;
    font-size: 1rem;
  }
  
  justify-content: space-between;

`

export const NewTransactionButton = styled.button`
   
    display: flex;
    align-items: center;
    justify-content: center;
    background: ${({theme}) => theme['green-500']};
    cursor: pointer;
    border: none;
    padding: 1rem;
    width:10rem;
    color: ${({theme}) => theme['white']};
    font-weight: 700;
    border-radius: 5px;
    &:hover{
      transition: background 0.5s;
      background: ${({theme}) => theme['green-700']};
      border-color: ${({theme}) => theme['green-700']} ;
    }
  
`