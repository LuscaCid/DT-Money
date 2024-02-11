import * as Dialog from '@radix-ui/react-dialog'
import { Close, Content, Overlay, TypeTransactionButton, TypeTransactionSection } from './styles'
import { ArrowCircleDown, ArrowCircleUp, X } from 'phosphor-react' 
import { Controller, useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from '@hookform/resolvers/zod'

const formSchema = z.object({
  description : z.string().min(1),
  price : z.number(),
  category : z.string(),
  typeTransaction : z.enum(['income', 'outcome'])//é tratado tbm como required
})

type NewTransactionFormType = z.infer<typeof formSchema>

export const NewTransactionModal = () => {

  const newTransactionForm = useForm<NewTransactionFormType>({
    resolver : zodResolver(formSchema),
    defaultValues : {
      category : '',
      description : '',
      typeTransaction : 'income'
    }
  })
  const { 
    control, 
    register, 
    handleSubmit, 
    watch, 
    reset,
    formState : {isSubmitting}
  } = newTransactionForm

  const handleCreateNewTransaction = async (data : NewTransactionFormType) => {
    await new Promise(resolve => setTimeout(resolve, 2500))
    console.log(data)
    reset()
  }

  return (
    <Dialog.Portal>
      <Overlay />
      <Content>
        <Close>
          <X size={24} />
        </Close>
        <Dialog.Title>Nova Transação</Dialog.Title>
        <form action="" onSubmit={handleSubmit(handleCreateNewTransaction)}>
          <input 
            type="text" 
            placeholder='Descrição' 
            required 
            {...register('description')} 
          />

          <input 
            type="number"
            placeholder='Preço' 
            required 
            
            {...register('price', {valueAsNumber : true})}
          />

          <input 
            type="text" 
            placeholder='Categoria' 
            required 
            {...register('category')}
          />
          <Controller
            control={control}
            name='typeTransaction'
            render={({field}) => {
              return (
                <TypeTransactionSection 
                  value={field.value}
                  onValueChange={field.onChange} 
                >
                  <TypeTransactionButton value='income' variant='income'>
                    Entrada 
                    <ArrowCircleUp size={24}/>
                  </TypeTransactionButton>
                  <TypeTransactionButton value='outcome' variant='outcome'>
                    Saída 
                    <ArrowCircleDown size={24}/>
                  </TypeTransactionButton>
                </TypeTransactionSection>
              )
            }}
            >         
          </Controller>
          <button type='submit' disabled = {isSubmitting}>
            Registrar
          </button>
        </form>
      </Content>
    </Dialog.Portal>
  )
}