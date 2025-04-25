import { BrowserRouter, Routes, Route } from "react-router-dom";

//Material UI
import { ThemeProvider } from "@mui/material/styles";

//Routes
import { MenuItem } from "./constants/NavigationItem";

//Template components
import Layouts from "./layouts/Layouts";

//Redux
import { useSelector } from "react-redux";
import { RootState } from "./redux/store";
import { getTheme } from "./utils/Theme";

//Pages
import Virtual from "./pages/Virtual";
import Login from "./pages/shared/Login";

const App = () => {
  const mode = useSelector((state: RootState) => state.theme.mode);

  const theme = getTheme(mode);

  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layouts />}>
            {MenuItem.map((item, index) =>
              item.path === "" ? (
                <Route index element={item.element} key={index} />
              ) : (
                <Route path={item.path} element={item.element} key={index} />
              )
            )}
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/virtual-desk" element={<Virtual />} />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
