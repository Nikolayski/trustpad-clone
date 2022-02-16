import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";
import { theme } from "../../styles";

export const StyledButton: React.FC<ButtonProps> = styled(
  ({ variant, ...props }: ButtonProps) => <a {...props} />
)`
  color: white;
  display: inline-block;
  padding: 8px 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  ${({ variant }) =>
    (variant === "bordered" &&
      css`
        border-radius: 0.5rem;
        border-width: 2px;
        border-color: ${theme.colors.lightPurple};
        background: ${theme.colors.pinkLinear};
        box-shadow: 0 0 24px 0 rgba(133, 60, 210, 0.5);
        outline: none;
        color: #fff;
        text-decoration: none;
      `)}
`;
