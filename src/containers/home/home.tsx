import { useEffect } from "react";
import { useState } from "react";

import { Styled } from "./home.styles";

export const Home = () => {
  const [animation, setAnimation] = useState({
    transition: "transform 2s",
    transform: "rotate3d(5, -1, -1, 1turn)",
  });
  /* useEffect(() => {
    setAnimation({
      transition: "",
      transform: "",
    });
  }, []);*/

  return (
    <Styled.BeneathHome>
      <Styled.Home {...animation}>
        <Styled.Button>Login</Styled.Button>{" "}
        <Styled.Button>Register</Styled.Button>
      </Styled.Home>
    </Styled.BeneathHome>
  );
};
