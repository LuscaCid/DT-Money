import { HeaderContainer, HeaderContent, NewTransactionButton } from "./styles"
import logo from '../../assets/Vector.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { NewTransactionModal } from "../NewTransactionModal";

export const Header = () => {
  return (
    <HeaderContainer>
      <HeaderContent>
        <div className="logo-content">
          <img src={logo} alt="logo" />
          <h2>DT Money</h2>
        </div>
          <Dialog.Root>
            <Dialog.Trigger asChild>
              <NewTransactionButton>
              Nova Transação
              </NewTransactionButton>
            </Dialog.Trigger>
            <NewTransactionModal/>
            
          </Dialog.Root>
          
      </HeaderContent>
    </HeaderContainer>
  )
}