import List from "@mui/material/List";
import Typography from "@mui/material/Typography";

import DocumentCard from "./DocumentCard";
import NoData from "../templates/NoData";
import Loading from "../templates/Loading";
import { useFiles } from "../../hooks/useFiles";
import { useDispatch } from "react-redux";
import { openModal } from "../../redux/modalSlice";
import Error from "../templates/Error";
import GlobalModal from "../templates/GlobalModal";

const ListOfFile = () => {
  const { files, loading, error } = useFiles();
  const dispatch = useDispatch();

  const confirmDelete = (id: number) => {
    console.log(id);
    dispatch(
      openModal({
        type: "confirm-delete",
        props: { id },
      })
    );
  };

  // const confirmDelete = (id: number) => {
  //   // handleDelete(id);
  //   dispatch(
  //     openModal(
  //       <div>
  //         <h2 className="text-xl font-bold">Titre du Modal</h2>
  //         <p>Contenu dynamique...</p>
  //       </div>
  //     )
  //   );
  // };

  console.log("Erreur : ", error);

  if (loading) return <Loading />;
  if (error) return <Error message={error} />;

  return (
    <>
      <Typography sx={{ mt: 4, mb: 2 }} variant="h6" component="div">
        PDF uploaded
      </Typography>

      {files === undefined || files.length === 0 ? (
        <NoData />
      ) : (
        <List>
          {files.map((file) => (
            <DocumentCard
              key={file.id}
              label={file.file_name}
              onDelete={() => confirmDelete(file.id)}
            />
          ))}
        </List>
      )}

      <GlobalModal />
    </>
  );
};

export default ListOfFile;
