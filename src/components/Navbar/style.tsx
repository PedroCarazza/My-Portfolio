import { styled } from "@/styles/stitches.config";
import { Flex, Container } from "@/styles/Global";
import { Button } from "@/styles/Buttons";
import { SwitchLayoutGroupContext } from "framer-motion";

export const Navbar = styled("nav", {
  background: "transparent",
  // borderBottom: "2px solid $brand1",
  backdropFilter: "blur(5px)",
  position: "fixed",
  inset: 0,
  bottom: "auto",
  padding: "1rem 0",
  width: "100%",
  zIndex: "99999",

  [`& ${Container}`]: {
    display: "flex",
    position: "relative",
    justifyContent: "space-between",
    "@mobile": {
      flexDirection: "column",
    },
  },

  "a": {
    position: "relative",
  },

  "a::after":{
    content: "",
    position: "absolute",
    left: "0",
    bottom: "-2px",
    width: "100%",
    height: "3px",
    background: "$gradientText",
    borderRadius: "6px",
    transformOrigin: "right",
    transform: "scaleX(0)",
    transition: "transform .2s",
  },

  "a:hover::after": {
    transformOrigin: "left",
    transform: "scaleX(1)",
  },
});

export const LogoTipo = styled(Flex, {
  alignItems: "center",
});

export const LogoTipoText = styled("p", {
  fontSize: "1.25rem",
  fontWeight: 600,
  color: "$grey4",
  fontFamily: '"IBM Plex Sans"',
  "@mobile": {
    fontSize: "1rem",
  },

  span: {
    color: "$brand1",
  }
});

export const NavbarLinks = styled(Flex, {
  "@mobile": {
    marginTop: "$3",
    flexDirection: "column",
    alignItems: "flex-start",
    "& a": {
      width: "100%",
      justifyContent: "flex-start",
      paddingLeft: 0,
    },
  },
});

export const NavbarMobileArea = styled("div", {
  display: "flex",
  justifyContent: "space-between",
});
