import { Button, ButtonProps } from "..";
import { Typography } from "../..";
import * as E from "./elements";
import { navigationDropdownsItems } from "../../../utilities";
import Link from "next/link";

export const CollectWalletButton: React.FC<ButtonProps> = ({
  variant,
  toggle,
  children,
  ...props
}) => {
  return (
    <E.StyledCollectWalletButtonContainer>
      <Button {...props} variant={variant}>
        {children}
      </Button>
      <E.DropdownContainer toggle={toggle}>
        {navigationDropdownsItems?.map((x) => (
          <Link href="/">
            <Button background={x.background} padding="0">
              <E.ImageContainer>
                <img src={x.src} width="25px" />
              </E.ImageContainer>
              <Typography variant="p">{x.text}</Typography>
            </Button>
          </Link>
        ))}
      </E.DropdownContainer>
    </E.StyledCollectWalletButtonContainer>
  );
};
