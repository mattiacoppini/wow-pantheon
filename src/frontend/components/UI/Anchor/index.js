import styled from "styled-components";

export const Anchor = styled.a`
  font-size: ${({ fontSize }) => fontSize};
  color: ${({ color }) => color};
  text-transform: ${({ textTransform }) => textTransform};
  text-decoration: ${({ textDecoration = "none" }) => textDecoration};
  outline: ${({ outline = "none" }) => outline};
`;

export default Anchor;
