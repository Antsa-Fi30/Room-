import { Paper, Typography } from "@mui/material";
import NearbyErrorRoundedIcon from "@mui/icons-material/NearbyErrorRounded";

const NoData = () => {
  return (
    <Paper
      sx={{
        padding: 5,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <NearbyErrorRoundedIcon fontSize="large" />
      <Typography variant="subtitle1" sx={{ mt: 1 }}>
        No data
      </Typography>
    </Paper>
  );
};

export default NoData;
