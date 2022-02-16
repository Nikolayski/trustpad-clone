import * as E from "./elements";

export interface ButtonProps {
  variant?: "bordered";
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
