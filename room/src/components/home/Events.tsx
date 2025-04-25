import { Alert, Stack } from "@mui/material";

const Events = () => {
  return (
    <Stack spacing={2} marginBottom={3}>
      <Alert severity="info">Maintenance prévue sur Desk5 — 17/04/2025</Alert>
      <Alert severity="success">
        2 nouveaux utilisateurs ajoutés aujourd'hui
      </Alert>
    </Stack>
  );
};

export default Events;
