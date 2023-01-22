import { Carousel } from "react-bootstrap";
import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***

const baseCarouselImages = css`
  width: 120em;
  height: 30em;
  max-width: 100%;
  object-fit: cover;
`;

const baseHome = css`
  height: 100%;
`;

const baseLatestsBooks = css`
  margin: 63px;
  display: flex;
  flex-direction: column;
  flex-wrap: nowrap;
  align-items: stretch;
`;

const baseSectionTitle = css`
  border-style: solid;
  border-color: #9f906d;
  padding: 23px;
  width: 20%;
  margin-bottom: 73px;
`;

const baseRegister = css`
  border-style: solid;
  border-color: #9f906d;
  border-radius: 13px;
  padding: 23px;
  background-color: #f6eee5;
  width: max-content;
  height: max-content;
  bottom: 0px;
  right: -14px;
  // to be on the top of everything
  position: fixed;
  z-index: 3;
  pointer-events: auto;
  margin-right: 15px;
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
