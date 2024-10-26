import { ReactNode } from 'react'
import { SpanContainerCircle } from './styles'

interface IconCircleProps {
  children: ReactNode
  bgColor: string
}
export const IconCircle = ({ children, bgColor }: IconCircleProps) => {
  return <SpanContainerCircle bgColor={bgColor}>{children}</SpanContainerCircle>
}
