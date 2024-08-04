import { useState } from 'react';
import commentsAPI from '../../api/comments-api';
import styles from './RecipeDetails.module.css';

export default function Comment({ recipeId, username, userId, comments, setComments, setError, isAuthenticated }) {
  const [newComment, setNewComment] = useState('');
  const [showCommentForm, setShowCommentForm] = useState(false);

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

  return (
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
      {isAuthenticated && (
        <>
          {!showCommentForm && (
            <button onClick={() => setShowCommentForm(true)} className={styles.button}>
              Add comment
            </button>
          )}
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
        </>
      )}
    </div>
  );
}
