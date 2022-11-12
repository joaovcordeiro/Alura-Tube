import styled from "styled-components";

export default function Banner({ image }) {
  return (
    <>
      <StyledBanner>
        <img src={image} />
      </StyledBanner>
    </>
  );
}

export const StyledBanner = styled.div`
  img {
    width: 100%;
    height: 300px;
    object-fit: cover;
  }
`;
