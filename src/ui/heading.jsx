import styled, { css } from "styled-components";
// const test = css`
//   text-align: center;
// `;

const Heading = styled.h1`
  ${(props) =>
    props.type === "h1" &&
    css`
      font-size: 3rem;
      font-weight: 600;
      background-color: yellow;
    `}

  ${(props) =>
    props.type === "h2" &&
    css`
      font-size: 8rem;
      font-weight: 500;
      background-color: blue;
    `}





    line-height: 1.4;
`;

export default Heading;
