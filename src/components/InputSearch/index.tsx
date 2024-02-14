import { zodResolver } from "@hookform/resolvers/zod"
import { ButtonSearch, Input, InputContainer } from "./styles"
import { MagnifyingGlass } from "phosphor-react"
import {useForm} from 'react-hook-form'
import { z } from 'zod'
import { TransactionsContext } from "../../contexts/transactionsContext"
import { useContextSelector } from "use-context-selector"
import { memo } from "react"

const FormDataSchema = z.object({
  query: z.string()
})
type FormDataSchemaType = z.infer<typeof FormDataSchema>

const InputSearchComponent = () => {
  
  const fetchTransactions = useContextSelector(TransactionsContext, (context) => {
    return context.fetchTransactions
  })
  const { 
    register, 
    handleSubmit,  
    reset, 
    formState : {isSubmitting}} = useForm<FormDataSchemaType>({
    resolver  : zodResolver(FormDataSchema),
    defaultValues : {
      query: ""
    }
  })

  const handleSearch = async (data : FormDataSchemaType) => {
    //if(!searchValue)return
     
    await fetchTransactions(data.query)
    
    reset()
    
  }
 
  return (
    <InputContainer
    onSubmit={handleSubmit(handleSearch)}
    >
      <Input 
        placeholder="Busque uma transação" 
        type="text"
        {...register("query")}
      />
      <ButtonSearch disabled={isSubmitting} type="submit">
          <MagnifyingGlass size={20} />
          Buscar
      </ButtonSearch> 
    </InputContainer>
  )
}

export const InputSearch = memo(InputSearchComponent)