import { CartContainer, HeaderContainer } from './styles'
import logoCoffe from '../../assets/img/logo-coffe.svg'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { useTheme } from 'styled-components'

export const Header = () => {
  return (
    <HeaderContainer>
      <div className="logo-container">
        <img src={logoCoffe} alt="" />
      </div>

      <CartContainer>
        <div className="local-container">
          <MapPin color={useTheme().purple} size={22} />
          <span>Porto Alegre, RS</span>
        </div>

        <span className="cart-container">
          <ShoppingCart size={22} color={useTheme()['yellow-dark']} />
        </span>
      </CartContainer>
    </HeaderContainer>
  )
}
