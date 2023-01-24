import HTMLFlipBook from "react-pageflip";
import styled, { css } from "styled-components";

// *** Base ***
const baseSmallBook = css`
  min-height: 49vh;
  min-width: 19vw;

  &:hover {
    transition: transform 2s;
    transform: rotate3d(-3, 2, 0.5, 0.5rad);
  }
  background-color: brown;
  border: 1mm ridge rgba(211, 220, 50, 0.6);
`;

const baseBigBook = css``;

// *** Components ***
const BigBook = styled(HTMLFlipBook)`
  ${baseBigBook}
`;
const SmallBook = styled.div<{ $backgroundImage: any }>`
  ${baseSmallBook}
  background-image: url(${({ $backgroundImage }: any) => $backgroundImage});
  background-size: cover;
  background-repeat: no-repeat;
`;
export const Styled = {
  BigBook,
  SmallBook,
};
