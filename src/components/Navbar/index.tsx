import { useState } from "react";
import useMedia from "use-media";
import { userData } from "@/utils/userData";

import {
  Navbar as NavbarWrapper,
  LogoTipo,
  LogoTipoText,
  NavbarLinks,
  NavbarMobileArea,
} from "./style";

import { FaBars } from "react-icons/fa";
import { IoClose } from "react-icons/io5";
import { Button } from "@/styles/Buttons";
import { Container, Flex } from "@/styles/Global";

export interface MenuButtonOpen {
  open: Boolean;
  setOpen: (value: Boolean) => void;
}

export const NavBar = (): JSX.Element => {

  const isWide = useMedia({ maxWidth: "991px" });

  document.title = userData.nameUser;

  const [open, setOpen] = useState(false);

  const OpenMenu = () => {
    setOpen(!open);
  };

  // <nav className="navbar">
  //   <a href="#">Home</a>
  //   <a href="#">About</a>
  // </nav>

  return (
    <NavbarWrapper className="navigation">
      <Container>
        <NavbarMobileArea>
          <LogoTipo>
            <LogoTipoText>ALVES<span> Portifolio</span></LogoTipoText>
          </LogoTipo>
          {isWide && (
            <Button
              type="icon"
              onClick={OpenMenu}
              aria-label={!open ? "Abrir Menu" : "Fechar Menu"}
            >
              {!open ? <FaBars /> : <IoClose />}
            </Button>
          )}
        </NavbarMobileArea>
        <Flex>
          {isWide ? open && <NavLinks /> : <NavLinks />}
        </Flex>
      </Container>
      <div className="navend"/>
    </NavbarWrapper>
  );
};

export const NavLinks = (): JSX.Element => {
  return (
    <NavbarLinks>
      <Button type="btLink" as="a" href={`#home`}>
        Home
      </Button>
      {/* <Button type="btLink" as="a" href={`#about`}>
        About Me
      </Button> */}
      <Button type="btLink" as="a" href={`#projects`}>
        Projects
      </Button>
      <Button type="btLink" as="a" href={`#contact`}>
        Contact
      </Button>
      <Button type="btLink" as="a"
        href={`#social-media`}>
        Social Media
      </Button>
    </NavbarLinks>
  );
};
