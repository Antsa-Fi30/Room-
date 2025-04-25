import React from "react";
import {
  Avatar,
  ListItemAvatar,
  ListItemText,
  ListItem,
  IconButton,
} from "@mui/material";
import { Folder, Delete } from "@mui/icons-material";

type DocumentCardProps = {
  label: string;
  onDelete: () => void;
};

const DocumentCard: React.FC<DocumentCardProps> = ({ label, onDelete }) => {
  return (
    <ListItem
      sx={{ width: 700 }}
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={onDelete}>
          <Delete />
        </IconButton>
      }
    >
      <ListItemAvatar>
        <Avatar>
          <Folder />
        </Avatar>
      </ListItemAvatar>
      <ListItemText
        primary={label}
        // secondary={secondary ? "Secondary text" : null}
      />
    </ListItem>
  );
};

export default DocumentCard;
