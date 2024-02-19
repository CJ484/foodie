import { Modal } from "@mui/material";
import styles from "../../../assets/styles/components/recipeModal.module.scss";

interface RecipeModalProps {
  modalOpen: boolean;
  setModalOpen: (open: boolean) => void;
}
const RecipeModal = ({ modalOpen, setModalOpen }: RecipeModalProps) => {
  return (
    <>
      <Modal
        className={styles.modal}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
      >
        <h1>Recipe Title</h1>
      </Modal>
    </>
  );
};
export default RecipeModal;
