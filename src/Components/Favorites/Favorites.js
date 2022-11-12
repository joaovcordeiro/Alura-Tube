import styled from "styled-components";

export default function Favorites({ favorites }) {
  return (
    <StyledFavorites>
      <h1>AluraTubes Favoritos</h1>
      <FavoritesContainer>
        {favorites.map((favorite, index) => {
          return (
            <FavoritesCard
              key={index}
              image={favorite.thumb}
              name={favorite.name}
              url={favorite.url}
            />
          );
        })}
      </FavoritesContainer>
    </StyledFavorites>
  );
}

function FavoritesCard({ image, name, url }) {
  return (
    <StyledCard>
      <div>
        <a href={url}>
          <img src={image} />
          <h2>{name}</h2>
        </a>
      </div>
    </StyledCard>
  );
}

const StyledFavorites = styled.div`
  padding: 0 32px;
  width: 100vw;
  background-color: ${({ theme }) => theme.backgroundBase || "#f9f9f9"};

  h1 {
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: bold;
    color: ${({ theme }) => theme.textColorBase || "#222222"};
  }
`;

const FavoritesContainer = styled.div`
  display: flex;
  gap: 8px;
  overflow-x: scroll;
`;

const StyledCard = styled.div`
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.textColorBase || "#222222"};
  }

  img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
  }

  h2 {
    font-size: 14px;
  }
`;
