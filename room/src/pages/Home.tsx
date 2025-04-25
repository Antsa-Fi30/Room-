import { Paper } from "@mui/material";

import AreaAction from "../components/home/AreaAction";
import Stats from "../components/home/Stats";
import Events from "../components/home/Events";

const Home = () => {
  return (
    <div>
      {/* Card button */}
      <AreaAction />

      {/* Desk's data */}
      <Paper
        elevation={0}
        sx={{
          width: "fit-content",
          padding: 2,
          marginInline: "auto",
          marginTop: 0,
        }}
      >
        <Stats />
      </Paper>

      {/* Evénements récents */}
      <Paper
        elevation={0}
        sx={{
          width: "fit-content",
          padding: 2,
          marginInline: "auto",
          marginTop: 2,
        }}
      >
        <Events />
      </Paper>
    </div>
  );
};

export default Home;
