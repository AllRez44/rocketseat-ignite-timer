
import styled, { css } from 'styled-components';

export type ButtonVariant = 'primary' | 'secondary' | 'danger' | 'success';

interface ButtonContainerProps {
    variant: ButtonVariant;
}

const buttonVariants = {
    primary: 'purple',
    secondary: 'orange',
    danger: 'red',
    success: 'gress'

}

export const ButtonContainer = styled.button<ButtonContainerProps>`
    .button {
        width: 120px;
        height: 40px;
    }

    ${({ variant }) => (css`background-color: ${buttonVariants[variant]}`)}
`   