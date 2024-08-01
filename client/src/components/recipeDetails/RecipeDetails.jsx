import { Link, useParams } from 'react-router-dom';
import styles from './RecipeDetails.module.css';
import { useEffect, useState } from 'react';
import recipesAPI from '../../api/recipes-api';

export default function RecipeDetails() {
  const { recipeId } = useParams();
  const [error, setError] = useState('');
  const [recipe, setRecipe] = useState({});

  useEffect(() => {
    (async () => {
      try {
        const result = await recipesAPI.getOne(recipeId);
        setRecipe(result);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [recipeId]);

  //   useEffect(() => {
  //     (async () => {
  //       const result = await recipesAPI.getOne(recipeId);
  //       setRecipe(result);
  //     })();
  //   }, [recipeId]);

  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src={recipe.imageURL} alt={recipe.recipeName} className={styles.image} />
        <div className={styles.details}>
          <div className={styles.title}>
            <h3>{recipe.recipeType}</h3> {/* Променен на h3 и преместен най-отгоре */}
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
              <Link to="/" className={styles.button}>
                Read more
              </Link>
              <Link to={`/recipes/edit`} className={styles.button}>
                Edit
              </Link>
              <Link to={`/recipes/delete`} className={styles.button}>
                Delete
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
