import { HomeContainer, ListCoffesContainer } from './styles'
import coffeDeliveryDemo from '../../assets/img/coffe-delivery-home.svg'
import { Coffee, Package, ShoppingCart, Timer } from 'phosphor-react'
import { IconCircle } from '../../components/Icons/IconCircle'
import { defaultTheme } from '../../styles/themes/default'
import { CoffeItem } from '../../components/CoffeItem'
import coffeExpress from '../../assets/img/coffe/expresso.svg'

export const Home = () => {
  return (
    <HomeContainer>
      <section className="section-header">
        <div className="section-descriptions">
          <header>
            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
            <p>
              Com o Coffee Delivery você recebe seu café onde estiver, a
              qualquer hora
            </p>
          </header>

          <ul className="list-data-store">
            <li>
              <IconCircle bgColor={defaultTheme['yellow-dark']}>
                <ShoppingCart size={20} weight="fill" color="white" />
              </IconCircle>
              Compra simples e segura
            </li>
            <li>
              <IconCircle bgColor={defaultTheme.yellow}>
                <Timer size={20} weight="fill" color="white" />
              </IconCircle>
              Embalagem mantém o café intacto
            </li>
            <li>
              <IconCircle bgColor={defaultTheme['base-text']}>
                <Package size={20} weight="fill" color="white" />
              </IconCircle>
              Entrega rápida e rastreada
            </li>
            <li>
              <IconCircle bgColor={defaultTheme['purple-dark']}>
                <Coffee size={20} weight="fill" color="white" />
              </IconCircle>
              O café chega fresquinho até você
            </li>
          </ul>
        </div>

        <img src={coffeDeliveryDemo} alt="" className="img-main-coffe" />
      </section>

      <section>
        <div className="list-coffes">
          <h2>Nossos cafés</h2>

          <ListCoffesContainer>
            <CoffeItem
              coffe="Expresso Tradicional"
              description="O tradicional café feito com água quente e grão moídos"
              img={coffeExpress}
              price={9.9}
              types={['Tradicional']}
            />
          </ListCoffesContainer>
        </div>
      </section>
    </HomeContainer>
  )
}
