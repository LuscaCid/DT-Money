import { ButtonSearch, Input, InputContainer } from "./styles"
import { MagnifyingGlass } from "phosphor-react"
import {useForm} from 'react-hook-form'
import { z } from 'zod'

const FormDataSchema = z.object({
  search: z.string()
})
type FormDataSchemaType = z.infer<typeof FormDataSchema>
export const InputSearch =( ) => {
  

  const { register, handleSubmit, watch, reset}  = useForm<FormDataSchemaType>()

  const searchValue = watch('search')

  const handleSearch = (data : FormDataSchemaType) => {
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
        {...register("search")}
      />
      <ButtonSearch disabled={searchValue == ''} type="submit">
          <MagnifyingGlass size={20} />
          Buscar
      </ButtonSearch>
    </InputContainer>
  )
}