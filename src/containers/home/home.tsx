import * as React from "react";
import { Styled } from "./home.styles";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import Carousel from "react-bootstrap/Carousel";
import { UsersAndBooks } from "../../App";
import { useState } from "react";
import { Books } from "../books/books";
import { Register } from "../register/register";
import ClickAwayListener from "@mui/base/ClickAwayListener";

export const Home = () => {
  // image on clik changes themes (change sun image to something golden)
  const { users, books } = React.useContext(UsersAndBooks);
  const [showLatestBooks, setShowLatestBooks] = useState();
  const [clickedAway, setClickedAway] = useState(true);
  // with params this can be a custum hooks
  React.useEffect(
    () => setShowLatestBooks(books.slice(books.length - 4, books.length)),
    [books]
  );
  const handleClickAway = () => {
    setClickedAway(true);
  };

  const userLogged = JSON.parse(sessionStorage.getItem("user") || "{}");
  console.log(userLogged);
  return (
    <Styled.Home>
      {!userLogged ||
        (Object.keys(userLogged).length === 0 && (
          <ClickAwayListener onClickAway={handleClickAway}>
            <Styled.Register>
              <Register
                setClickedAway={setClickedAway}
                clickedAway={clickedAway}
              />
            </Styled.Register>
          </ClickAwayListener>
        ))}
      <Carousel>
        <Carousel.Item>
          <Styled.CarouselImages src={carousel1} alt="First slide" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <Styled.CarouselImages src={carousel2} alt="Second slide" />

          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>

      <Styled.LatestsBooks>
        <Styled.SectionTitle>Latest Books</Styled.SectionTitle>
        <Books showAll={false} />
      </Styled.LatestsBooks>
    </Styled.Home>
  );
};
