import * as React from "react";
import { Button } from "react-bootstrap";

import { Styled } from "./home.styles";

export const Home = () => {
  // image on clik changes themes (change sun image to something golden)
  return (
    <div>
      <Styled.CentralImage />
      <div>
        <Button></Button> <Button></Button> <Button></Button> <Button></Button>{" "}
        <Button></Button> <Button></Button> <Button></Button> <Button></Button>{" "}
        <Button></Button>
        <Button></Button> <Button></Button> <Button></Button> <Button></Button>{" "}
        <Button></Button> <Button></Button> <Button></Button> <Button></Button>{" "}
        <Button></Button> <Button></Button> <Button></Button> <Button></Button>{" "}
        <Button></Button> <Button></Button> <Button></Button> <Button></Button>{" "}
        <Button></Button> <Button></Button>
      </div>
    </div>
  );
};
