import styled from 'styled-components'

export const HomeContainer = styled.main`
  display: flex;
  flex-direction: column;
  padding: 5rem;

  .section-header {
    display: flex;
    justify-content: center;
    gap: 6rem;
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
        font-size: 2.5rem;
      }
      p {
        font-size: 1.5rem;
      }
    }

    ul {
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
      }
    }
  }

  @media (max-width: 1150px) {
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
`
