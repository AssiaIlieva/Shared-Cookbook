import { Link, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import tipsAPI from '../../api/tips-api';
import likesAPI from '../../api/likes-api';
import { useAuthContext } from '../../contexts/AuthContext';
import { useModal } from '../../contexts/ModalContext';
import styles from './TipDetails.module.css';

export default function TipDetails() {
  const navigate = useNavigate();
  const { tipId } = useParams();
  const { userId, isAuthenticated } = useAuthContext();
  const { openModal, closeModal } = useModal();
  const [error, setError] = useState('');
  const [tip, setTip] = useState(null);
  const [likes, setLikes] = useState(0);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const result = await tipsAPI.getOne(tipId);
        const initialTip = {
          ...result,
          likedBy: Array.isArray(result.likedBy) ? result.likedBy : [],
        };
        setTip(initialTip);
        setError('');
      } catch (error) {
        setError(error.message);
        openModal(<div>{error.message}</div>);
      }
    })();
  }, [tipId, openModal]);

  useEffect(() => {
    (async () => {
      try {
        const likeCount = await likesAPI.getLikesForTip(tipId);
        setLikes(likeCount);
        if (isAuthenticated) {
          const liked = await likesAPI.userHasLiked(tipId, userId);
          setHasLiked(liked);
        }
      } catch (error) {
        setError(error.message);
        openModal(<div>{error.message}</div>);
      }
    })();
  }, [tipId, userId, isAuthenticated, openModal]);

  const deleteButtonClickHandler = () => {
    openModal(
      <div>
        <p>Are you sure you want to delete the {tip?.heading} tip?</p>
        <button onClick={handleDeleteConfirm} className={styles.button}>
          Yes
        </button>
        <button onClick={closeModal} className={styles.button}>
          No
        </button>
      </div>
    );
  };

  const handleDeleteConfirm = async () => {
    try {
      await tipsAPI.remove(tipId);
      closeModal();
      navigate('/tips');
    } catch (error) {
      setError(error.message);
      openModal(<div>{error.message}</div>);
    }
  };

  const handleLikeClick = async () => {
    if (!isAuthenticated) {
      openModal(<div>You need to be logged in to like a tip.</div>);
      return;
    }

    if (hasLiked) {
      openModal(<div>You have already liked this tip.</div>);
      return;
    }

    try {
      await likesAPI.likeCreate({ tipId });
      setLikes(likes + 1);
      setHasLiked(true);
    } catch (error) {
      setError(error.message);
      openModal(<div>{error.message}</div>);
    }
  };

  const isOwner = userId === tip?._ownerId;
  const likeCount = likes;
  const userHasLiked = hasLiked;

  if (!tip) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.cardWrapper}>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.card}>
        <img src={tip.imageURL} alt={tip.heading} className={styles.image} />
        <div className={styles.details}>
          <div className={styles.title}>
            <h3 className={styles.tipType}>{tip.tipType}</h3>
            <h1 className={styles.borderBottom}>{tip.heading}</h1>
          </div>
          <div className={styles.content}>
            <h2>Description</h2>
            <p>{tip.description}</p>
            <div className={styles.border} />
            <h2>Content</h2>
            <p>{tip.content}</p>
            <div className={styles.border} />
            <div className={styles.likes}>
              {userHasLiked ? (
                <p>
                  You and {likeCount - 1} {likeCount - 1 === 1 ? 'other' : 'others'} liked this tip
                </p>
              ) : (
                <p>{likeCount} people liked this tip</p>
              )}
            </div>
            <div className={styles.buttonContainer}>
              {!userHasLiked && isAuthenticated && !isOwner && (
                <button className={styles.button} onClick={handleLikeClick}>
                  Like
                </button>
              )}
              {isOwner && (
                <>
                  <Link to={`/tips/${tipId}/edit`} className={styles.button}>
                    Edit
                  </Link>
                  <button className={styles.button} onClick={deleteButtonClickHandler}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
