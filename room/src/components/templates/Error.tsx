import { Card, Typography, Box } from "@mui/material";
import { Error as ErrorIcon } from "@mui/icons-material";
import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

type ErrorProps = {
  message: string;
};

const Error: React.FC<ErrorProps> = ({ message }) => {
  const themeMode = useSelector((state: RootState) => state.theme.mode);

  return (
    <Card
      sx={{
        padding: 3,
        marginBlock: 4,
        backgroundColor: themeMode === "dark" ? "#424242" : "#ffebee",
        borderRadius: "12px",
        display: "flex",
        alignItems: "center",
        boxShadow: 3,
        transition: "transform 0.3s ease-in-out",
        "&:hover": {
          transform: "scale(1.05)",
        },
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", marginRight: 2 }}>
        <ErrorIcon sx={{ color: "#d32f2f", fontSize: 40 }} />
      </Box>
      <Typography
        color="error"
        variant="h6"
        sx={{ fontWeight: 600, color: "#d32f2f" }}
      >
        {message}
      </Typography>
    </Card>
  );
};

export default Error;
