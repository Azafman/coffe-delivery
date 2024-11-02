import { Minus, Plus, ShoppingCart } from 'phosphor-react'
import { ContainerPriceCoffe } from './styles'
import { priceFormatter } from '../../../../utils/formatter'

interface CoffePriceCartProps {
  price: number
}
export const CoffePriceCart = ({ price }: CoffePriceCartProps) => {
  return (
    <ContainerPriceCoffe>
      <span className="price">
        <span className="currency">R$</span>
        <span className="value">{priceFormatter.format(price)}</span>
      </span>
      <div className="parent-actions-cart">
        <div className="container-action-cart">
          <span className="action-item">
            <Minus size={20} color="purple" />
          </span>
          <span className="action-item quantity-cart">{1}</span>
          <span className="action-item">
            <Plus size={20} color="purple" />
          </span>
        </div>
        <span className="cart-icon">
          <ShoppingCart size={20} color="white" weight="fill" />
        </span>
      </div>
    </ContainerPriceCoffe>
  )
}
