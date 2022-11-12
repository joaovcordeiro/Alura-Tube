import styled from "styled-components";

export default function Header({ config }) {
  return (
    <StyledHeader>
      {/* <img src="" /> */}
      <section className="user-info">
        <img src={`https://github.com/${config.github}.png`} />
        <div>
          <h2>{config.name}</h2>
          <p>{config.job}</p>
        </div>
      </section>
    </StyledHeader>
  );
}

const StyledHeader = styled.div`
  img {
    width: 80px;
    height: 80px;
    border-radius: 50%;
  }

  .user-info {
    background-color: ${({ theme }) => theme.backgroundLevel1 || "#FFFFFF"};

    color: ${({ theme }) => theme.textColorBase || "#222222"};
    display: flex;
    align-items: center;
    width: 100%;
    padding: 16px 32px;
    gap: 16px;
  }
`;
