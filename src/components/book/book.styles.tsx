import HTMLFlipBook from "react-pageflip";
import styled, { css } from "styled-components";

// *** Base ***
const baseSmallBook = css`
  margin-bottom: 13px;
  height: 25vh;
  min-height: 200px;
  width: 12vw;
  max-width: 160px;
  min-width: 100px;

  &:hover {
    transition: transform 2s;
    transform: rotate3d(-3, 2, 0.5, 0.5rad);
  }
  background-color: brown;
  border: 1mm ridge rgba(211, 220, 50, 0.6);
`;

const baseBigBook = css`
  min-height: fit-content;
`;

// *** Components ***
const BigBook = styled(HTMLFlipBook)`
  ${baseBigBook}
`;
const SmallBook = styled.div<{ $backgroundImage: any }>`
  ${baseSmallBook}
  background-image: url(${({ $backgroundImage }: any) => $backgroundImage});
  background-size: cover;
`;
export const Styled = {
  BigBook,
  SmallBook,
};
