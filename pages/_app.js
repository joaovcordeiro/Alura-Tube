import { ThemeProvider } from "styled-components";
import { CSSReset } from "../src/Components/CSSReset.js";
import { RecoilRoot } from "recoil";
import useTheme from "../src/State/Hooks/useTheme.js";

function MyApp({ Component, pageProps }) {
  const { actualTheme } = useTheme();
  return (
    <ThemeProvider theme={actualTheme}>
      <CSSReset />
      <Component {...pageProps} />;
    </ThemeProvider>
  );
}

export default function _App(props) {
  return (
    <RecoilRoot>
      <MyApp {...props} />
    </RecoilRoot>
  );
}
