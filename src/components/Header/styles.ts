import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 2rem;
`
export const CartContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  justify-content: end;

  .local-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    font-size: 1em;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['purple-light']};
    color: ${(props) => props.theme.purple};
    border: 1px solid ${(props) => props.theme.purple};
  }

  .cart-container {
    display: flex;
    align-items: center;
    padding: 0.5rem;
    border-radius: 6px;
    background-color: ${(props) => props.theme['yellow-light']};
    border: 1px solid ${(props) => props.theme['yellow-dark']};
  }

  @media (max-width: 400px) {
    flex-direction: column;
    align-items: end;
  }
`
