import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, TypeTransactionButton, TypeTransactionSection } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react' 
import { useForm } from "react-hook-form"
import { z } from "zod"

const formSchema = z.object({
  description : z.string().min(1),
  price : z.string(),
  category : z.string(),
  typeTransaction : "income" | "outcome"
})

type NewTransactionFormType = z.infer<typeof formSchema>

export const NewTransactionModal = () => {

  const newTransactionForm = useForm()

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