import Header from "../src/Components/Header/Header";
import Menu from "../src/Components/Menu/Menu";
import Timeline from "../src/Components/Timeline/Timeline";
import { CSSReset } from "../src/Components/CSSReset.js";

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
        <Header config={configData} />
        <Timeline playlists={configData.playlists} />
      </div>
    </>
  );
}

export default HomePage;
