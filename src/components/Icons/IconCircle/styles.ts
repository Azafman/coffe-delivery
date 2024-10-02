import styled from 'styled-components'

interface SpanContainerCircleProps {
  bgColor: string
}
export const SpanContainerCircle = styled.span<SpanContainerCircleProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 2.25rem;
  height: 2.25rem;
  border-radius: 50%;
  background-color: ${(props) => props.bgColor};
`
