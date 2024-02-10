import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, TypeTransactionButton, TypeTransactionSection } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react'

export const NewTransactionModal = () => {
  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <form action="">
          <input type="text" placeholder='Descrição' required />
          <input type="text" placeholder='Preço' required />
          <input type="text" placeholder='Categoria' required/>
          <TypeTransactionSection>
            <TypeTransactionButton value='income' variant='income'>
            Entrada 
            <ArrowCircleUp size={24}/>
            </TypeTransactionButton>
            <TypeTransactionButton value='outcome' variant='outcome'>
              Saída 
              <ArrowCircleDown size={24}/>
            </TypeTransactionButton>
            
          </TypeTransactionSection>
          <button type='submit'>
            Registrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}