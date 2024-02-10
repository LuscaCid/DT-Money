import * as Dialog from '@radix-ui/react-dialog'
import styled from 'styled-components'
import * as Group from '@radix-ui/react-radio-group'

export const Overlay = styled(Dialog.Overlay)`
  background-color:rgba(0,0,0,0.75);
  opacity: 0.5;
  width: 100vw;
  height: 100vh;
  position: fixed;
  
  inset: 0;
`

export const Content = styled(Dialog.Content)`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 32rem;
  width: 100%;
  border-radius: 5px;
  padding: 2.5rem 3rem;
  background: ${({theme}) => theme['gray-800']};
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) ;
  form {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    input {
      color: ${({theme}) => theme['gray-300']};
      width: 100%;
      padding: .9rem .8rem;
      border: none;
      border-radius: 5px;
      outline: none;
      background: ${({theme}) => theme['gray-900']};
      &:focus{
        border: none;
        box-shadow: 0 0 0 2px ${({theme}) => theme["green-500"]};
      }
    }
    >button[type = 'submit']{
      border: none;
      background: ${({theme}) => theme['green-500']};
      padding: 1rem;
      border-radius: 5px;
      cursor: pointer;
      color: ${({theme}) => theme['white']};
      font-weight: 700;
      transition: background 0.5s;
      &:hover{
        background: ${({theme}) => theme['green-700']};
      }
    }
  }
`

export const Close = styled(Dialog.Close)`
  position: absolute;
  top: 20px;
  right: 20px;
  background: none;
  border: none;
  color: ${({theme}) => theme['gray-500']};
  padding: .3rem;
  cursor: pointer;
  line-height: 0;
`

export const TypeTransactionSection = styled(Group.RadioGroup)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  gap: 1rem;
`
interface TransactionButtonType {
  variant : 'income' | 'outcome'
}

export const TypeTransactionButton = styled(Group.Item)<TransactionButtonType>`
  padding: .6rem .2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .3rem;
  background: ${({theme}) => theme['gray-700']};
  border: none;
  border-radius: 5px;
  color: ${({theme}) => theme['gray-300']};
  cursor: pointer;
  svg {
    color: ${({variant, theme}) => variant === 'income' ? theme['green-500']: theme['red-500']};
  }
  &[data-state='checked']{
    transition: background .2s;
    background: ${({theme,variant}) =>variant === 'income' ? theme['green-500'] : theme['red-300']}  ;
    color: ${({theme}) => theme.white};
    svg {
      color: ${({theme}) => theme['white']};
    }
    
  }
  
  &[data-state='unchecked']{
    &:hover{
      background: ${({theme}) => theme['gray-600']};
    }
    svg {
      color: ${({theme}) => theme['gray-300']};
    }
  }
`
