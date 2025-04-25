import {
  Stack,
  Card,
  CardContent,
  CardActionArea,
  Typography,
} from "@mui/material";

interface ActionAreaCardProps {
  title: string;
  description: string;
  action: () => void;
}

const ActionAreaCard: React.FC<ActionAreaCardProps> = ({
  title,
  description,
  action,
}) => {
  return (
    <Card
      sx={{
        maxWidth: 345,
        transition: "transform 0.2s, box-shadow 0.2s",
        "&:hover": {
          transform: "scale(1.03)",
          boxShadow: 6,
        },
      }}
    >
      <CardActionArea onClick={action}>
        <CardContent>
          <Stack direction={"row"} spacing={2}>
            <img src="location.png" alt="" width={80} height={40} />
            <Stack spacing={1}>
              <Typography gutterBottom variant="h5" component="div">
                {title}
              </Typography>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                {description}
              </Typography>
            </Stack>
          </Stack>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default ActionAreaCard;
