import styled from "styled-components";

export default function Banner({ image }) {
  return <StyledBanner banner={image} />;
}

export const StyledBanner = styled.div`
  background-image: url(${({ banner }) => banner});
  height: 230px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
