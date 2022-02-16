import styled from "styled-components";
import { Button } from "..";

export const StyledCollectWalletButtonContainer = styled(({ ...props }) => (
  <div {...props} />
))``;

export const DropdownContainer = styled(({ toggle, ...props }) => (
  <div {...props} />
))`
  position: absolute;
  width: 230px;
  right: 13px;
  top: 60px;
  padding: 20px;
  background: #1a192e;
  border-radius: 12px;
  min-height: 160px;
  display: ${({ toggle }) => (toggle ? "block" : "none")};
`;

export const ImageContainer: React.FC = styled(({ ...props }) => (
  <div {...props} />
))``;
