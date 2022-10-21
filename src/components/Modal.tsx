import styles from "./Modal.module.css";

interface ModalProps {
  onCancelModal: (param: boolean) => void;
  onDeleteComment: () => void;
}

export function Modal({ onCancelModal, onDeleteComment }: ModalProps) {
  return (
    <>
      <div className={styles.overlay}></div>
      <div className={styles.modal}>
        <h2>Excluir Comentário</h2>
        <p>
          Você tem certeza que gostaria de <br /> excluir este comentário?
        </p>

        <button
          onClick={() => onCancelModal(false)}
          className={`${styles.button} ${styles.buttonGhost}`}
        >
          Cancelar
        </button>
        <button
          onClick={() => onDeleteComment()}
          className={`${styles.button} ${styles.buttonFill}`}
        >
          Sim, excluir
        </button>
      </div>
    </>
  );
}
