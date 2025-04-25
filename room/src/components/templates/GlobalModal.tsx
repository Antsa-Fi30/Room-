import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../redux/store";
import { closeModal } from "../../redux/modalSlice";
import ConfirmDeleteModal from "./ConfirmDeleteModal";

const GlobalModal = () => {
  const { isOpen, type, props } = useSelector(
    (state: RootState) => state.modal
  );
  const dispatch = useDispatch();

  if (!isOpen) return null;

  const renderContent = () => {
    switch (type) {
      case "confirm-delete":
        return <ConfirmDeleteModal {...(props as { id: number })} />;
      default:
        return <div>Unknown modal</div>;
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white p-4 rounded shadow-xl w-[90%] max-w-md relative">
        <button
          onClick={() => dispatch(closeModal())}
          className="absolute top-2 right-2 text-xl"
        >
          &times;
        </button>
        {renderContent()}
      </div>
    </div>
  );
};

export default GlobalModal;
