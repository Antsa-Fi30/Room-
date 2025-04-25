import { Typography, Switch, Box } from "@mui/material";
import { toggleTheme } from "../../redux/themeSlice";
import { RootState } from "../../redux/store";
import { useSelector, useDispatch } from "react-redux";

const ThemeSettings = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const dispatch = useDispatch();

  const handleThemeToggle = () => {
    dispatch(toggleTheme());
  };
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      mt={2}
      sx={{ width: 500 }}
    >
      <Typography>Dark Theme</Typography>
      <Switch checked={themeMode === "dark"} onChange={handleThemeToggle} />
    </Box>
  );
};

export default ThemeSettings;
