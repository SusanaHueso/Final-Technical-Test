import * as React from "react";

import { Styled } from "./home.styles";
import { Header } from "../../components/header/header";
export const Home = () => {
  return (
    <Styled.BeneathHome>
      <Header />
      <Styled.CentralImagePosition>
        <Styled.CentralImage />
      </Styled.CentralImagePosition>
    </Styled.BeneathHome>
  );
};
