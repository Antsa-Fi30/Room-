import { useDispatch } from "react-redux";
import { closeModal } from "../../redux/modalSlice";
import { useFiles } from "../../hooks/useFiles";

interface Props {
  id: number;
}

const ConfirmDeleteModal = ({ id }: Props) => {
  const dispatch = useDispatch();
  const { handleDelete } = useFiles();

  const confirm = () => {
    handleDelete(id);
    dispatch(closeModal());
  };

  return (
    <div>
      <h2 className="text-xl font-bold">Confirmer la suppression</h2>
      <p>Voulez-vous vraiment supprimer ce fichier ?</p>
      <div className="flex justify-end mt-4 gap-2">
        <button onClick={() => dispatch(closeModal())}>Annuler</button>
        <button
          onClick={confirm}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default ConfirmDeleteModal;
