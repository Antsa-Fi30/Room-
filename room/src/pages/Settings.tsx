import { Paper, Typography } from "@mui/material";
import ThemeSettings from "../components/settings/ThemeSettings";

const Settings = () => {
  return (
    <Paper
      elevation={3}
      style={{ padding: "1rem", width: "fit-content", marginInline: "auto" }}
    >
      <Typography variant="h5" gutterBottom>
        Settings
      </Typography>
      <ThemeSettings />
    </Paper>
  );
};

export default Settings;
