import { Typography } from "../../components";
import * as E from "./elements";

export interface LogoProps {
  hasText: boolean;
}

export const Logo: React.FC<LogoProps> = ({ hasText, ...props }) => {
  return (
    <E.LogoContainer {...props}>
      <E.IconContainer>
        <img src="https://trustpad.io/_next/static/media/tpad-logo-img.5eaa1084.svg" />
      </E.IconContainer>
      {hasText && (
        <E.ContentContainer>
          <Typography
            variant="p"
            margin="0"
            fontSize="20px"
            fontFamily="Alfphabet,sans-serif!important;"
            weight={700}
          >
            TRUSTPAD
          </Typography>
          <Typography
            variant="p"
            margin="0"
            fontSize="12px"
            fontFamily="Rubik,sans-serif!important"
          >
            The #1 Multi-Chain Launchpad
          </Typography>
        </E.ContentContainer>
      )}
    </E.LogoContainer>
  );
};
