import styled from 'styled-components'

export const CoffeItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding-top: 1rem;
  flex: 0 0 22rem;

  .full-center {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .main-coffe {
    flex: 1;
    background-color: ${(props) => props.theme['base-input']};
    border-radius: 0 2.5rem 0 2.5rem;
    padding: 0 1.5rem 1.5rem 1rem;

    .container-img {
      gap: 1rem;
      margin-top: -2rem;

      img.coffe-image {
        width: 7.5rem;
        height: 7.5rem;
      }
      .type-coffe {
        border-radius: 14px;
        padding: 0.25rem 0.75rem;
        background-color: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
        text-transform: uppercase;
        font-size: 12px;
        font-weight: bold;
      }
    }
    .container-content {
      margin-top: 1.5rem;
      gap: 1.25rem;

      .title {
        font-size: 1.5rem;
        font-weight: 700;
        color: ${(props) => props.theme['base-subtitle']};
        font-family: 'Baloo 2';
      }
      .description {
        word-wrap: break-word;
        max-width: 85%;
        text-align: center;
        font-size: 1rem;
        color: ${(props) => props.theme['base-label']};
      }
      .action-coffe {
        align-self: stretch;
        padding: 1rem 0;
      }
    }
  }
  @media (max-width: 1300px) {
    flex: 0 0 18rem;
  }
`
