import { Grid, Box } from "@mui/material";
import ActionAreaCards from "../templates/Card";

const AreaAction = () => {
  return (
    <Box
      sx={{
        flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        padding: 3,
      }}
    >
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: 1200 }}
      >
        <Grid>
          <ActionAreaCards
            title="Virtual desk"
            description="Access to the virtual desk here"
            action={() => window.open("/virtual-desk", "_blank")}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default AreaAction;
