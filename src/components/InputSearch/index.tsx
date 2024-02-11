import { zodResolver } from "@hookform/resolvers/zod"
import { ButtonSearch, Input, InputContainer } from "./styles"
import { MagnifyingGlass } from "phosphor-react"
import {useForm} from 'react-hook-form'
import { z } from 'zod'

const FormDataSchema = z.object({
  query: z.string()
})
type FormDataSchemaType = z.infer<typeof FormDataSchema>
export const InputSearch =( ) => {
  

  const { register, handleSubmit, watch, reset, formState : {isSubmitting}}  = useForm<FormDataSchemaType>({
    resolver  : zodResolver(FormDataSchema),
    defaultValues : {
      query: ""
    }
  })

  const searchValue = watch('query')

  const handleSearch = async (data : FormDataSchemaType) => {
    if(!searchValue)return
    await new Promise(resolve => setTimeout(resolve, 2500))
    console.log(data)
    reset()
    console.log(searchValue)
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