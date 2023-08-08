import { ThemeProvider } from "styled-components";
import { Route, Routes } from "react-router-dom";
import { GlobalStyles } from "./styles/global";
import { theme } from "./styles/theme";
import Game from "./layouts/Game";
import ProductPage from "./pages/ProductsPage";
import AboutPage from "./pages/AboutPage";
import Shop from "./layouts/Shop";
import { useAppSelector } from "./hooks/redux";
const App = () => {
  let cursor = "initial" as string | undefined;
  const { instrumental } = useAppSelector((state) => state.game);
  cursor = instrumental?.image;
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles $cursor={cursor} />
      <Routes>
        <Route path="/" element={<Game />} />
        <Route path="/shop" element={<Shop />}>
          <Route path="" element={<ProductPage />} />
          <Route path="about" element={<AboutPage />} />
        </Route>
      </Routes>
    </ThemeProvider>
  );
};

export default App;
