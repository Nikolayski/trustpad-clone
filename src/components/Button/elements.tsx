import styled, { css } from "styled-components";
import { ButtonProps } from "./Button";
import { theme } from "../../styles";

export const StyledButton: React.FC<ButtonProps> = styled(
  ({ variant, background, color, toggle, padding, ...props }: ButtonProps) => (
    <a {...props} />
  )
)`
  display: flex;
  color: ${({ color }) => color || "white"};
  background: ${({ background }) => background};
  padding: ${({ padding }) => padding || "8px 12px"};
  align-items: center;
  margin: 5px;
  justify-content: center;
  border-radius: 0.6rem;
  cursor: pointer;
  ${({ variant }) =>
    variant === "bordered" &&
    css`
      border-radius: 0.5rem;
      border-width: 2px;
      border: 2px solid ${theme.colors.lightPurple};
      background: ${theme.colors.pinkLinear};
      box-shadow: 0 0 24px 0 rgba(133, 60, 210, 0.5);
      cursor: pointer;
    `}
`;
