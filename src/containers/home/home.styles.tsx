import { Carousel } from "react-bootstrap";
import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***

const baseCarouselImages = css`
  width: 120em;
  height: 25em;
  max-width: 100%;
  object-fit: cover;
`;

const baseHome = css``;

const baseLatestsBooks = css`
  margin-top: 63px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
`;

const baseSectionTitle = css`

  padding: 23px;
  width: 20%;
  margin-bottom: 73px;
  border-style: double;
  border-color: #d7d592;
  padding: 23px;
  width: 20%;
  margin-bottom: 73px;
  border-width: 12px;
  background: linear-gradient(
    0deg,
    rgb(22 0 255) 0%,
    rgb(164 106 232 / 42%) 0%,
    rgb(228 187 82 / 66%) 100%
  );
  font-weight: bold;
`;

const baseRegister = css`
  border-style: solid;
  border-color: #9f906d;
  border-radius: 13px;
  padding: 23px;
  background-color: #f6eee5;
  width: max-content;
  height: max-content;
  right: 0px;
  bottom: 0px;
  // to be on the top of everything
  position: fixed;
  z-index: 3;
  pointer-events: auto;
  background: linear-gradient(
    0deg,
    rgb(22 0 255) 0%,
    rgb(164 106 232 / 42%) 0%,
    rgb(228 187 82 / 66%) 100%
  );
`;

// *** Components ***

const CarouselImages = styled.img`
  ${baseCarouselImages};
`;

const Home = styled.div`
  ${baseHome};
`;

const LatestsBooks = styled.div`
  ${baseLatestsBooks};
`;
const SectionTitle = styled.div`
  ${baseSectionTitle};
`;

const Register = styled.div`
  ${baseRegister};
`;

export const Styled = {
  CarouselImages,
  SectionTitle,
  Home,
  LatestsBooks,
  Register,
};
