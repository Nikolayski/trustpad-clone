import styled from "styled-components";
import { ButtonProps } from "../../components/Button";
import { CollectWalletButton } from "../../components/Button/CollectWalletButton";
import { theme } from "../../styles";

export const HeaderContainer: React.FC = styled(({ ...props }) => (
  <div {...props} />
))`
  position: absolute;
  color: white;
  width: 1140px;
  display: flex;
  justify-content: space-between;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
`;

export const Navigation: React.FC = styled(({ ...props }) => <ul {...props} />)`
  width: 600px;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;
`;

export const NavigationLink: React.FC = styled(({ ...props }) => (
  <li {...props} />
))``;

export const NavigationItem: React.FC = styled(({ ...props }) => (
  <a href="" {...props} />
))`
  font-family: Rubik, sans-serif !important;
  letter-spacing: 0.6px;
  color: ${theme.colors.white};
`;

export const ImageContainer: React.FC = styled(({ ...props }) => (
  <div {...props} />
))``;

export const CollectWallet: React.FC<ButtonProps> = styled(({ variant, toggle,  ...props }: ButtonProps) => (
  <CollectWalletButton {...props} variant={variant} toggle={toggle} />
))`
  padding: 13px 15px;
`;
