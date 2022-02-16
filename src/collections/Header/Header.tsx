import Link from "next/link";
import { Logo } from "../Logo";
import * as E from "./elements";
import { headerLinks } from "../../utilities";
import { Button } from "../../components/Button";
import { Typography } from "../../components";
import { useState } from "react";

export const Header: React.FC = ({ ...props }) => {

   const [toggle, SetToggle] = useState(false);
   
  return (
    <E.HeaderContainer {...props}>
      <Logo hasText />
      <E.Navigation>
        {headerLinks?.map((x) => (
          <E.NavigationLink>
            <Link href={x.href}>
              <E.NavigationItem>{x.text}</E.NavigationItem>
            </Link>
          </E.NavigationLink>
        ))}
        <E.NavigationLink>
          <Link href="/schedule">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
              data-darkreader-inline-stroke=""
              data-darkreader-inline-fill=""
              style={{cursor: "pointer"}}
            >
              <path d="M12 192h424c6.6 0 12 5.4 12 12v260c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V204c0-6.6 5.4-12 12-12zm436-44v-36c0-26.5-21.5-48-48-48h-48V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H160V12c0-6.6-5.4-12-12-12h-40c-6.6 0-12 5.4-12 12v52H48C21.5 64 0 85.5 0 112v36c0 6.6 5.4 12 12 12h424c6.6 0 12-5.4 12-12z"></path>
            </svg>
          </Link>
        </E.NavigationLink>
        <E.NavigationLink>
          <Button variant="bordered">
            <E.ImageContainer>
              <img src="https://trustpad.io/_next/static/media/pancakeswap.b5559135.svg" width="25px" />
            </E.ImageContainer>
            <Typography variant="p" margin="0 0 0 5px">Buy TPAD</Typography>
          </Button>
        </E.NavigationLink>
        <E.NavigationLink>
          <E.CollectWallet toggle={toggle}  variant="bordered" onClick={() => SetToggle(oldState => !oldState)}>
            <Typography variant="p" afterDropdown margin="0">Collect Wallet</Typography>
          </E.CollectWallet>
        </E.NavigationLink>
      </E.Navigation>
    </E.HeaderContainer>
  );
};
