import Header from "../src/Components/Header/Header";
import Menu from "../src/Components/Menu/Menu";
import Timeline from "../src/Components/Timeline/Timeline";
import Banner from "../src/Components/Banner/Banner";
import Favorites from "../src/Components/Favorites/Favorites";
import { useState } from "react";

import configData from "../config.json";

function HomePage() {
  const [valorDoFiltro, setValorDoFiltro] = useState("");

  return (
    <>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        <Menu setFiltro={setValorDoFiltro} valorDoFiltro={valorDoFiltro} />
        <Banner image={configData.banner} />
        <Header config={configData} />
        <Timeline
          playlists={configData.playlists}
          valorDoFiltro={valorDoFiltro}
        />
        <Favorites favorites={configData.favorites} />
      </div>
    </>
  );
}

export default HomePage;
