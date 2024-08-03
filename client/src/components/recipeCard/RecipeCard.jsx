import { Link } from 'react-router-dom';

import styles from './RecipeCard.module.css';

export default function RecipeCard({ _id, recipeName, recipeType, imageURL, description }) {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.card}>
        <img src={imageURL} alt={recipeName} className={styles.image} />
      </div>
      <div className="title">
        <h1 className="border-bottom">{recipeName}</h1>
        <h5>{recipeType}</h5>
      </div>
      <div className="border" />
      <div className="content">
        <p>
          {description}
          <br />
        </p>
        <div className="button-link">
          <Link to={`/recipes/${_id}/details`}>details</Link>
        </div>
      </div>
    </div>
  );
}
