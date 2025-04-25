import HomeIcon from "@mui/icons-material/Home";
// import InfoIcon from "@mui/icons-material/Info";
import DocumentScannerIcon from "@mui/icons-material/DocumentScanner";
import SettingsIcon from "@mui/icons-material/Settings";
//Page
import Home from "../pages/Home";
// import About from "../pages/About";
import Documents from "../pages/Documents";
import Settings from "../pages/Settings";

export const MenuItem = [
  { label: "Home", icon: <HomeIcon />, path: "", element: <Home /> },
  {
    label: "Documents",
    icon: <DocumentScannerIcon />,
    path: "docs",
    element: <Documents />,
  },
  {
    label: "Settings",
    icon: <SettingsIcon />,
    path: "settings",
    element: <Settings />,
  },
  // { label: "About", icon: <InfoIcon />, path: "about", element: <About /> },
];
