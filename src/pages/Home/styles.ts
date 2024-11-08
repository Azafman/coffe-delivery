import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5rem 12rem;
  gap: 12rem;

  .section-header {
    display: flex;
    gap: 7rem;
  }
  .section-descriptions {
    display: flex;
    flex-direction: column;
    gap: 6rem;
    width: 45%;

    header {
      display: flex;
      flex-direction: column;
      gap: 1rem;

      h2 {
        font-size: 3.25rem;
        font-family: 'Baloo 2', sans-serif;
        font-weight: 900;
        color: ${(props) => props.theme['base-title']};

        @media (max-width: 810px) {
          font-size: 2.5rem;
        }
        @media (max-width: 550px) {
          font-size: 2rem;
        }
      }
      p {
        font-size: 1.5rem;
      }
    }

    .list-data-store {
      list-style-type: none;
      display: flex;
      flex-direction: column;
      flex-wrap: wrap;
      gap: 2rem;
      max-height: 130px;

      li {
        display: flex;
        align-items: center;
        gap: 1rem;
        font-size: 1.125rem;
      }

      @media (max-width: 830px) {
        max-height: initial;
      }
    }
  }

  .list-coffes {
    h2 {
      font-family: 'Baloo 2';
      font-size: 2.5rem;
      color: ${(props) => props.theme['base-subtitle']};
      font-weight: 900;
    }
  }

  @media (max-width: 1500px) {
    padding: 5rem 5rem;
  }

  @media (max-width: 1300px) {
    padding: 5rem 2rem;

    .section-header {
      flex-direction: column;
    }
    .section-descriptions {
      width: 100%;
    }
    .img-main-coffe {
      max-width: 70%;
      margin: auto;
    }
  }

  @media (max-width: 550px) {
    .section-header {
      flex-direction: column-reverse;
    }
  }
`

export const ListCoffesContainer = styled.ul`
  display: flex;
  justify-content: space-between;
  gap: 2rem 0;
  padding: 2rem 0;
  flex-wrap: wrap;

  @media (max-width: 1300px) {
    justify-content: center;
    gap: 2rem;
  }
`
