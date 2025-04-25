import { Paper } from "@mui/material";
import InputFile from "../components/documents/InputFile";
import ListOfFile from "../components/documents/ListOfFile";

const Documents = () => {
  return (
    <>
      <Paper
        sx={{ padding: 5, marginTop: 2, width: "fit-content", mx: "auto" }}
      >
        <InputFile />
        <ListOfFile />
      </Paper>
    </>
  );
};

export default Documents;
