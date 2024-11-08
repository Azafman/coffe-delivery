import styled from 'styled-components'

export const LayoutContainer = styled.div`
  max-width: 85vw;
  margin: auto;
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.background};

  @media (max-width: 1300px) {
    max-width: initial;
  }
`
