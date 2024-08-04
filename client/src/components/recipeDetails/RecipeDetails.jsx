import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './RecipeDetails.module.css';
import { useEffect, useState } from 'react';
import recipesAPI from '../../api/recipes-api';
import commentsAPI from '../../api/comments-api';
import { useAuthContext } from '../../contexts/AuthContext';
import { useModal } from '../../contexts/ModalContext';
import Comment from './Comments'; // Импортиране на компонента Comment

export default function RecipeDetails() {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const { username, userId, isAuthenticated } = useAuthContext();
  const { openModal, closeModal } = useModal();
  const [error, setError] = useState('');
  const [recipe, setRecipe] = useState({});
  const [comments, setComments] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const result = await recipesAPI.getOne(recipeId);
        setRecipe(result);
        const comments = await commentsAPI.getAll(recipeId);
        setError('');
        setComments(comments);
      } catch (error) {
        setError(error.message);
        openModal(<div>{error.message}</div>);
      }
    })();
  }, [recipeId, openModal]);

  const deleteButtonClickHandler = () => {
    openModal(
      <div>
        <p>Are you sure you want to delete the {recipe.recipeName} recipe?</p>
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
      await recipesAPI.remove(recipeId);
      const allComments = await commentsAPI.getAllByRecipe(recipeId);
      if (allComments.length > 0) {
        await Promise.all(allComments.map((comment) => commentsAPI.remove(comment._id)));
      }
      closeModal();
      navigate('/recipes');
    } catch (error) {
      setError(error.message);
      openModal(<div>{error.message}</div>);
    }
  };

  const isOwner = userId === recipe._ownerId;

  return (
    <div className={styles.cardWrapper}>
      {error && <div className={styles.error}>{error}</div>}
      <div className={styles.card}>
        <img src={recipe.imageURL} alt={recipe.recipeName} className={styles.image} />
        <div className={styles.details}>
          <div className={styles.title}>
            <h3>{recipe.recipeType}</h3>
            <h1 className={styles.borderBottom}>{recipe.recipeName}</h1>
          </div>
          <div className={styles.content}>
            <h2>Description</h2>
            <p>{recipe.description}</p>
            <div className={styles.border} />
            <h2>Preparation Time</h2>
            <p>{recipe.preparationTime} h</p>
            <div className={styles.border} />
            <h2>Ingredients</h2>
            <p>{recipe.ingredients}</p>
            <div className={styles.border} />
            <h2>Preparation Instructions</h2>
            <p>{recipe.instructions}</p>
            <div className={styles.buttonContainer}>
              {isOwner && (
                <>
                  <Link to={`/recipes/${recipeId}/edit`} className={styles.button}>
                    Edit
                  </Link>
                  <button className={styles.button} onClick={deleteButtonClickHandler}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
          <Comment
            recipeId={recipeId}
            username={username}
            userId={userId}
            comments={comments}
            setComments={setComments}
            setError={setError}
            isAuthenticated={isAuthenticated}
          />
        </div>
      </div>
    </div>
  );
}
