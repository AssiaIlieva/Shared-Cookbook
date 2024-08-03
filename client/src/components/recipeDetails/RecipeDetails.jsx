import { Link, useNavigate, useParams } from 'react-router-dom';
import styles from './RecipeDetails.module.css';
import { useEffect, useState } from 'react';
import recipesAPI from '../../api/recipes-api';
import commentsAPI from '../../api/comments-api';
import { useAuthContext } from '../../contexts/AuthContext';

export default function RecipeDetails() {
  const navigate = useNavigate();
  const { recipeId } = useParams();
  const { username, userId } = useAuthContext();
  const { isAuthenticated } = useAuthContext();
  const [error, setError] = useState('');
  const [recipe, setRecipe] = useState({});
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);

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
      }
    })();
  }, [recipeId]);

  const handleAddComment = async () => {
    if (newComment.trim() === '') {
      setError('Comment cannot be empty.');
      return;
    }
    try {
      const comment = await commentsAPI.create(recipeId, newComment);
      const newCommentWithAuthor = {
        ...comment,
        author: {
          username: username,
          _id: userId,
        },
      };
      setComments([...comments, newCommentWithAuthor]);
      setNewComment('');
      setError('');
      setShowCommentForm(false);
    } catch (error) {
      setError(error.message);
    }
  };

  const deleteButtonClickHandler = async () => {
    const hasConfirmed = confirm(`Are you sure you want to delete the ${recipe.recipeName} recipe?`);
    if (hasConfirmed) {
      try {
        await recipesAPI.remove(recipeId);
        navigate('/recipes');
      } catch (error) {
        setError(error.message);
      }
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
              {isAuthenticated && (
                <button onClick={() => setShowCommentForm(true)} className={styles.button}>
                  Add comment
                </button>
              )}
              {isOwner && (
                <>
                  <Link to={`/recipes/edit`} className={styles.button}>
                    Edit
                  </Link>
                  <button className={styles.button} onClick={deleteButtonClickHandler}>
                    Delete
                  </button>
                </>
              )}
            </div>
          </div>
          <div className={styles.commentsSection}>
            <h2>Comments</h2>
            {comments.length > 0 ? (
              comments.map((comment) => (
                <div key={comment._id} className={styles.comment}>
                  <hr className={styles.commentSeparator} />
                  <p>
                    {comment.author.username}: {comment.text}
                  </p>
                </div>
              ))
            ) : (
              <p>No comments available.</p>
            )}
          </div>
          {showCommentForm && (
            <div className={styles.commentForm}>
              <h2>Add your comment</h2>
              <div className={styles.commentField}>
                <div className={styles.staticField}>{username}</div>
              </div>
              <div className={styles.commentField}>
                <label>Comment</label>
                <textarea className={styles.textarea} value={newComment} onChange={(e) => setNewComment(e.target.value)} rows="3" />
              </div>
              <button onClick={handleAddComment} className={styles.button}>
                Add
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
