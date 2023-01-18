import * as React from "react";
import { Button } from "react-bootstrap";

import { Styled } from "./home.styles";
import carousel1 from "../../images/carousel1.jpg";
import carousel2 from "../../images/carousel2.jpg";
import Carousel from "react-bootstrap/Carousel";
import { UsersAndBooks } from "../../App";
import { useEffect, useState } from "react";
import { Books } from "../books/books";
/*  <Styled.CentralImage>
        Feeling this screen is too bright? Click here{" "}
      </Styled.CentralImage>{" "}*/
export const Home = () => {
  // image on clik changes themes (change sun image to something golden)
  const { users, books } = React.useContext(UsersAndBooks);
  const [showLatestBooks, setShowLatestBooks] = useState();
  // with params this can be a custum hooks
  React.useEffect(
    () => setShowLatestBooks(books.slice(books.length - 4, books.length)),
    [books]
  );
  return (
    <Styled.Home>
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
      </Styled.LatestsBooks>
    </Styled.Home>
  );
};
