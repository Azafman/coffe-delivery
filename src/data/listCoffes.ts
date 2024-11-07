import expresso from '../assets/img/coffe/expresso.svg'
import americano from '../assets/img/coffe/americano.svg'
import cremoso from '../assets/img/coffe/expresso-cremoso.svg'
import leite from '../assets/img/coffe/cafe-com-leite.svg'
import latte from '../assets/img/coffe/latte.svg'
import capuccino from '../assets/img/coffe/capuccino.svg'
import macchiato from '../assets/img/coffe/macchiato.svg'
import mocaccino from '../assets/img/coffe/mocaccino.svg'
import quente from '../assets/img/coffe/chocolate-quente.svg'
import cubano from '../assets/img/coffe/cubano.svg'
import havaiano from '../assets/img/coffe/havaiano.svg'
import arabe from '../assets/img/coffe/arabe.svg'
import irlandes from '../assets/img/coffe/irlandes.svg'

type TypeCoffe =
  | 'Tradicional'
  | 'Com leite'
  | 'Alcoólico'
  | 'Gelado'
  | 'Especial'
export interface CoffeProps {
  coffe: string
  price: number
  description: string
  types: TypeCoffe[]
  img: string
}
export const coffes: CoffeProps[] = [
  {
    coffe: 'Expresso Tradicional',
    description: 'O tradicional café feito com água quente e grãos moídos',
    img: expresso,
    price: 9.9,
    types: ['Tradicional'],
  },
  {
    coffe: 'Expresso Americano',
    description: 'Expresso diluído, menos intenso que o tradicional',
    img: americano,
    price: 9.9,
    types: ['Tradicional'],
  },
  {
    coffe: 'Expresso Cremoso',
    description: 'Café expresso tradicional com espuma cremoso',
    img: cremoso,
    price: 9.9,
    types: ['Tradicional'],
  },
  {
    coffe: 'Expresso Gelado',
    description: 'Bebida preparada com café expresso e cubos de gelo',
    img: cremoso,
    price: 9.9,
    types: ['Tradicional', 'Gelado'],
  },
  {
    coffe: 'Café com leite',
    description: 'Meio a meio de expresso tradicional com leite vaporizado',
    img: leite,
    price: 9.9,
    types: ['Tradicional', 'Com leite'],
  },
  {
    coffe: 'Latte',
    description:
      'Uma dose de café expresso com o dobro de leite e espuma cremosa',
    img: latte,
    price: 9.9,
    types: ['Tradicional', 'Com leite'],
  },
  {
    coffe: 'Capuccino',
    description:
      'Bebida com canela feita de doses iguais de café, leite e espuma',
    img: capuccino,
    price: 9.9,
    types: ['Tradicional', 'Com leite'],
  },
  {
    coffe: 'Macchiato',
    description:
      'Café expresso misturado com um pouco de leite quente e espuma',
    img: macchiato,
    price: 9.9,
    types: ['Tradicional', 'Com leite'],
  },
  {
    coffe: 'Mocaccino',
    description: 'Café expresso com calda de chocolate, pouco leite e espuma',
    img: mocaccino,
    price: 9.9,
    types: ['Tradicional', 'Com leite'],
  },
  {
    coffe: 'Chocolate Quente',
    description: 'Bebida feita com chocolate dissolvido no leite quente e café',
    img: quente,
    price: 9.9,
    types: ['Especial', 'Com leite'],
  },
  {
    coffe: 'Cubano',
    description:
      'Drink gelado de café expresso com rum, creme de leite e hortelã',
    img: cubano,
    price: 9.9,
    types: ['Especial', 'Gelado', 'Alcoólico'],
  },
  {
    coffe: 'Havaiano',
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: havaiano,
    price: 9.9,
    types: ['Especial'],
  },
  {
    coffe: 'Árabe',
    description: 'Bebida adocicada preparada com café e leite de coco',
    img: arabe,
    price: 9.9,
    types: ['Especial'],
  },
  {
    coffe: 'Irlandês',
    description: 'Bebida a base de café, uísque irlandês, açúcar e chantilly',
    img: irlandes,
    price: 9.9,
    types: ['Especial', 'Alcoólico'],
  },
]
