import React, { memo } from "react";
import { Container, Logo } from "./styles";

import logo from "../../img/logo_poke.svg";

function Header() {
  return (
    <Container>
      <Logo src={logo} />
    </Container>
  );
}

export default memo(Header);
