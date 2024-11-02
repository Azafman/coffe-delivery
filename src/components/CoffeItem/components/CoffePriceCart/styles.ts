import styled from 'styled-components'

export const ContainerPriceCoffe = styled.div`
  display: flex;
  justify-content: space-between;
  align-self: stretch;
  padding: 0 0.5rem;

  .price {
    display: flex;
    align-items: end;
    gap: 0.25rem;
    flex: 0 0 auto;

    .currency {
      margin-bottom: 3px;
      font-size: 0.9rem;
    }
    .value {
      font-weight: 700;
      font-size: 1.5rem;
    }
  }

  .parent-actions-cart {
    display: flex;
    gap: 3.5rem;

    .container-action-cart {
      display: flex;

      .action-item {
        flex: 1 0 2rem;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: ${(props) => props.theme['base-hover']};

        &:nth-child(1) {
          border-radius: 6px 0 0 6px;
        }
        &:nth-child(3) {
          border-radius: 0 6px 6px 0;
        }

        &:not(.quantity-cart):hover {
          cursor: pointer;
          background-color: ${(props) => props.theme['base-label']};
        }
      }
    }

    .cart-icon {
      display: flex;
      align-items: center;
      padding: 0.5rem;
      border-radius: 6px;
      background-color: ${(props) => props.theme['purple-dark']};
      cursor: pointer;
    }
  }
`
