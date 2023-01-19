import { Carousel } from "react-bootstrap";
import styled, { css } from "styled-components";
import image from "../../images/image.jpg";

// *** Base ***

const baseCentralImage = css`
  -webkit-filter: drop-shadow(12px 12px 7px rgba(0, 0, 0, 0.5));
  display: flex;
  flex-direction: column;
  background-image: url(${image});
  background-size: cover;
  border-radius: 13px;
  position: relative;
  height: 450px;
  align-items: center;
  justify-content: center;
  font-size: 28px;
  color: white;
`;
const baseCarouselImages = css`
  height: 50vh;
  padding: 0px;
  object-fit: cover;
  width: 100%;
  
`;

const baseHome = css`
  height: 100%;
  width: 98%;
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
  top: -22px;
  right: -14px;
  // to be on the top of everything
  position: absolute;
  z-index: 3;
  pointer-events: auto;
  margin-bottom: 73px;
`;
// *** Components ***

const CentralImage = styled.div`
  ${baseCentralImage};
`;

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
  CentralImage,
  CarouselImages,
  SectionTitle,
  Home,
  LatestsBooks,
  Register,
};
