import Header from "../src/Components/Header/Header";
import Menu from "../src/Components/Menu/Menu";
import Timeline from "../src/Components/Timeline/Timeline";
import { CSSReset } from "../src/Components/CSSReset.js";
import Banner from "../src/Components/Banner/Banner";
import Favorites from "../src/Components/Favorites/Favorites";

import configData from "../config.json";

function HomePage() {
  return (
    <>
      <CSSReset />
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu />
        <Banner image={configData.banner} />
        <Header config={configData} />
        <Timeline playlists={configData.playlists} />
        <Favorites favorites={configData.favorites} />
      </div>
    </>
  );
}

export default HomePage;
