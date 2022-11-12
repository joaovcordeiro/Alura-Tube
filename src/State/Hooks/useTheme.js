import { theme } from "../../Theme/Theme";
import { useRecoilState } from "recoil";
import { themeState } from "../atom";

export default function useTheme() {
  const [actualTheme, setTheme] = useRecoilState(themeState);

  const toggleTheme = () => {
    setTheme(actualTheme === theme.dark ? theme.light : theme.dark);
  };

  return { actualTheme, toggleTheme };
}
