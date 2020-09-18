import React from "react";
import { Link } from "react-router-dom";
import Nav from "../UI/Layout/Nav";
import "./navbar.less";
import UIToken from "../../utils/UIToken";
import FlexBox from "../UI/Layout/FlexBox";
import Box from "../UI/Layout/Box";
import Anchor from "../UI/Anchor";

export default function Navbar() {
  return (
    <Nav
      className="Navbar"
      background={UIToken.primaryColor}
      fullWidth
      display="flex"
      justifyContent="space-between"
      borderWidth={[0, 0, 1]}
      borderColor={UIToken.secondaryColor}
      borderStyle="solid"
    >
      <FlexBox className="left-side">
        <Box padding={[UIToken.paddingSm]}>
          <Link
            to="/"
            component={Anchor}
            fontSize={UIToken.fontSizeLg}
            color={UIToken.secondaryColor}
          >
            Logo
          </Link>
        </Box>
        <Box padding={[UIToken.paddingSm]}>
          <Link
            to="/my-addons"
            component={Anchor}
            fontSize={UIToken.fontSizeLg}
            color={UIToken.secondaryColor}
          >
            My addons
          </Link>
        </Box>
        <Box padding={[UIToken.paddingSm]}>
          <Link
            to="/explore"
            component={Anchor}
            fontSize={UIToken.fontSizeLg}
            color={UIToken.secondaryColor}
          >
            Explore
          </Link>
        </Box>
      </FlexBox>
      <FlexBox className="right-side">
        <Box padding={[UIToken.paddingSm]}>
          <Link
            to="/options"
            component={Anchor}
            fontSize={UIToken.fontSizeLg}
            color={UIToken.secondaryColor}
          >
            Options
          </Link>
        </Box>
      </FlexBox>
    </Nav>
  );
}
