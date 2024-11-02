import { CoffePriceCart } from './components/CoffePriceCart'
import { CoffeItemContainer } from './style'

interface CoffeItemProps {
  coffe: string
  price: number
  description: string
  types: string[]
  img: string
}
export const CoffeItem = (coffeItem: CoffeItemProps) => {
  return (
    <CoffeItemContainer>
      <main className="full-center main-coffe">
        <div className="full-center container-img">
          <img src={coffeItem.img} alt="" className="coffe-image" />
          <div className="full-center desc-type">
            {coffeItem.types.map((type, index) => {
              return (
                <span key={index} className="type-coffe">
                  {type}
                </span>
              )
            })}
          </div>
        </div>
        <div className="full-center container-content">
          <div className="title">{coffeItem.coffe}</div>
          <div className="description">{coffeItem.description}</div>
          <CoffePriceCart price={coffeItem.price} />
        </div>
      </main>
    </CoffeItemContainer>
  )
}
