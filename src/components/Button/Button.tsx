import * as E from "./elements";

export interface ButtonProps {
  variant?: "bordered";
  background?: string,
  color?: string,
  toggle?: boolean,
  padding?: string,
  onClick?: () => void,
}

export const Button: React.FC<ButtonProps> = ({
  variant,
  children,
  ...props
}) => {
  return (
    <E.StyledButton {...props} variant={variant}>
      {children}
    </E.StyledButton>
  );
};
