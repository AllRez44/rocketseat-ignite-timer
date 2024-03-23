import styled, { css } from 'styled-components'

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success'

interface ButtonContainerProps {
  variant?: ButtonVariant
}

const buttonVariants = {
  primary: 'purple',
  secondary: 'orange',
  danger: 'red',
  success: 'gress',
}

export const ButtonContainer = styled.button<ButtonContainerProps>`
  width: 120px;
  height: 40px;
  border-radius: 4px;
  border: 0;
  margin: 8px;

  ${({ theme, variant }) => css`
    background-color: ${variant ? buttonVariants[variant] : theme['green-500']};
    color: ${theme.white};
  `}
`
