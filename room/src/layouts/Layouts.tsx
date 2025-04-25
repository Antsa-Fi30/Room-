import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import NotificationsIcon from "@mui/icons-material/Notifications";
import DrawerHeader from "../components/templates/DrawerHeader";
import AppBar from "../components/templates/AppBar";
import { MenuItem } from "../constants/NavigationItem";
import SearchBar from "../components/templates/Searchbar";
import Badge from "@mui/material/Badge";
import { getTheme } from "../utils/Theme";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
const drawerWidth = 250;

const Main = styled("main", { shouldForwardProp: (prop) => prop !== "open" })<{
  open?: boolean;
}>(({ theme }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  variants: [
    {
      props: ({ open }) => open,
      style: {
        transition: theme.transitions.create("margin", {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        marginLeft: 0,
      },
    },
  ],
}));

const Layouts = () => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);
  const theme = getTheme(themeMode);
  const navigate = useNavigate();

  return (
    <Box sx={{ display: "flex", height: "100vh", maxHeight: "100vh" }}>
      <CssBaseline />
      <AppBar
        drawerwidth={drawerWidth}
        position="fixed"
        open={true}
        sx={{
          boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
          backgroundColor: theme.palette.primary.main, // 💡 ajouter ceci
        }}
      >
        <Toolbar>
          <Box sx={{ flexGrow: 1 }} />
          <SearchBar />
          <IconButton
            color="inherit"
            aria-label="notifications"
            edge="end"
            size="large"
            sx={{ mr: 1 }}
          >
            <Badge badgeContent={2} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            borderRight: "none",
            backgroundColor: theme.palette.primary.main,
            boxShadow: "2px 0 8px rgba(0,0,0,0.15)",
            color: theme.palette.getContrastText(theme.palette.primary.main),
          },
          "& .MuiListItemIcon-root": {
            color: theme.palette.getContrastText(theme.palette.primary.main),
          },
        }}
        variant="permanent"
        anchor="left"
        open
      >
        <DrawerHeader
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Typography sx={{ marginInline: 2 }} variant="h6" noWrap>
            S
          </Typography>
          <Typography variant="h6" noWrap>
            Virtual desks
          </Typography>
        </DrawerHeader>
        <List>
          {MenuItem.map((item) => (
            <ListItem key={item.label} disablePadding>
              <ListItemButton onClick={() => navigate(item.path)}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.label} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>

      <Main open={true}>
        <DrawerHeader />
        <Outlet />
      </Main>
    </Box>
  );
};

export default Layouts;
