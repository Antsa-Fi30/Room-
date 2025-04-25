import { Grid, Card, CardContent, Typography, Stack } from "@mui/material";

const Stats = () => {
  return (
    <Grid container justifyContent={"center"} spacing={2} marginBottom={3}>
      <Grid>
        <Card>
          <CardContent>
            <Stack direction={"row"} spacing={2}>
              <img src="computer.png" width={80} height={40} />
              <Stack spacing={1}>
                <Typography variant="h6">Total Desks</Typography>
                <Typography variant="h4">0</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <Card>
          <CardContent>
            <Stack direction={"row"} spacing={2}>
              <img src="occupied.png" width={80} height={40} />
              <Stack spacing={1}>
                <Typography variant="h6">Occupied</Typography>
                <Typography variant="h4">0</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
      <Grid>
        <Card>
          <CardContent>
            <Stack direction={"row"} spacing={2}>
              <img src="safe.png" width={80} height={40} />
              <Stack spacing={1}>
                <Typography variant="h6">Available</Typography>
                <Typography variant="h4">0</Typography>
              </Stack>
            </Stack>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Stats;
