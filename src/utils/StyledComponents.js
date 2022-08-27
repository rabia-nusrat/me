import styled from "styled-components";

const GradientText = styled.p`
  height: auto;
  display: inline-block;
  background: -webkit-linear-gradient(
    left,
    rgba(0, 127, 237, 1) 0%,
    rgba(0, 220, 218, 1) 100%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

export { GradientText };
