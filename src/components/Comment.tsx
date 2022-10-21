import { useState } from 'react';

import styles from './Comment.module.css';

import { ThumbsUp, Trash } from 'phosphor-react';

import { Avatar } from './Avatar'
import { Modal } from './Modal';


interface CommentProps {
  content: string;
  onDeleteComment: (comment: string) => void;
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  function handleDeleteComment() {
    onDeleteComment(content);
  }

  function handleLikeComment() {
    // sempre que for atualizar uma informação, e essa info precisa de uma informação anterior
    // utilizar set como função -> prevState => prevState + 1;
    setLikeCount((state) => {
      return state + 1;
    });
  }

  return (
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/maykbrito.png"/>

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Mayk Brito</strong>
              <time title='11 de Maio as 12:13' dateTime="2022-05-11 12:13:30">Cerca de 1h atras</time>
            </div>

            <button onClick={() => setIsModalOpen(true)} title='Deletar comentario'>
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
          {isModalOpen && <Modal onCancelModal={setIsModalOpen} onDeleteComment={handleDeleteComment}/>}
        </div>
        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}